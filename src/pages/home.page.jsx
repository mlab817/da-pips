import MainLayout from "../layouts/main/main.layout";

const subprograms = [
  {
    name: 'PSS on National Rice Program'
  },
  {
    name: 'ESETS on National Rice Program'
  }
]

const roles = [
  'national banner program coordinator',
  'regional banner program coordinator',
  'pmed',
  'ipd',
]

const HomePage = () => {
  return (
    <MainLayout>
      <select>
        {
          roles.map((role, index) => <option key={index}>{role}</option>)
        }
      </select>

      <h1>RFO I</h1>
      <ul>
        {subprograms.map((sp, index) => <li key={index}>{sp.name}</li>)}
      </ul>
    </MainLayout>
  )
}

export default HomePage;