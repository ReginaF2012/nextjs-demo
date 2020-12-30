import {useRouter} from 'next/router'
import useSWR from 'swr'

export default function Person() {
    const {query} = useRouter();

    const {data, error} = useSWR(`/api/people/${query.id}`, 
    (url) => fetch(url).then(res => res.json()))

    if(!data) return <div>Loading...</div>

    return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Height</th>
          <th>Mass</th>
          <th>Hair color</th>
          <th>Skin color</th>
          <th>Eye color</th>
          <th>Gender</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{data.name}</td>
          <td>{data.height}</td>
          <td>{data.mass}</td>
          <td>{data.hair_color}</td>
          <td>{data.skin_color}</td>
          <td>{data.eye_color}</td>
          <td>{data.gender}</td>
        </tr>
      </tbody>
    </table>
  )
}
