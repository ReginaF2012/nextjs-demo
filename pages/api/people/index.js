import { people } from '../../../data/data';

export default function PeopleHandler(req, res) {
    res.status(200).json(people)
}