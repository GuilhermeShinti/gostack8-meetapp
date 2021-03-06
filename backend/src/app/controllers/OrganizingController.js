import Meetup from '../models/Meetup';
import File from '../models/File';

class OrganizingControlller {
  async index(req, res) {
    const meetups = await Meetup.findAll({
      where: { user_id: req.userId },
      attributes: ['id', 'title', 'description', 'location', 'date', 'file_id'],
      include: [
        {
          model: File,
          as: 'banner',
        },
      ],
    });
    return res.json(meetups);
  }
}

export default new OrganizingControlller();
