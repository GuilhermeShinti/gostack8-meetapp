import { Op } from 'sequelize';
import Meetup from '../models/Meetup';
import Subscription from '../models/Subscription';
import User from '../models/User';
import File from '../models/File';

class SubscriptionController {
  async index(req, res) {
    const page = req.query.page || 1;

    const meetups = await Subscription.findAll({
      where: { user_id: req.userId },
      attributes: ['id'],
      include: [
        {
          model: Meetup,
          attributes: ['id', 'title', 'description', 'location', 'date'],
          include: [
            { model: File, as: 'banner', attributes: ['id', 'url', 'path'] },
            { model: User, attributes: ['id', 'name', 'email'] },
          ],
          where: {
            date: {
              [Op.gt]: new Date(),
            },
          },
        },
      ],
      limit: 10,
      offset: 10 * page - 10,
      order: [[Meetup, 'date', 'ASC']],
    });

    return res.json(meetups);
  }

  async store(req, res) {
    const { meetupId } = req.query;

    const meetup = await Meetup.findByPk(meetupId);

    if (!meetup) {
      return res.status(404).json({ error: 'Meetup not found.' });
    }

    if (meetup.past) {
      return res
        .status(400)
        .json({ error: 'You cannot subscribe past meetup.' });
    }

    const subscribed = await Subscription.findOne({
      where: {
        user_id: req.userId,
        meetup_id: meetupId,
      },
    });

    if (subscribed) {
      return res.status(400).json({ error: 'You are already subscribed.' });
    }

    const meetupInSameTime = await Subscription.findOne({
      where: {
        user_id: req.userId,
      },
      include: [{ model: Meetup, where: { date: meetup.date } }],
    });

    if (meetupInSameTime) {
      return res
        .status(400)
        .json({ error: 'You already have meetup in same time.' });
    }

    const subscription = await Subscription.create({
      user_id: req.userId,
      meetup_id: meetupId,
    });

    return res.json(subscription);
  }

  async delete(req, res) {
    const subscribedMeetup = await Subscription.findOne({
      where: {
        user_id: req.userId,
        meetup_id: req.params.id,
      },
    });

    if (!subscribedMeetup) {
      return res.status(404).json({ error: 'Subscribed meetup not found.' });
    }

    await subscribedMeetup.destroy();

    return res.send();
  }
}

export default new SubscriptionController();
