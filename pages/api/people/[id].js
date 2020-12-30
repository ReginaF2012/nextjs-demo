import { people } from '../../../data/data';

export default function PersonHandler({query: {id}}, res) {
    const person = people.find(person => person.id === id);

    if (person) {
        res.status(200).json(person);
    } else {
        res.status(400).json({message: 'ID not found'})
    }
}