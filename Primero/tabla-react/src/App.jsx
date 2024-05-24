import TablaComponent from './Components/TablaComponent';

function App() {
  const columns = [
    {
      name: 'Nombre',
      key: 'name'
    },
    {
      name: 'Apellido',
      key: 'lastName'
    }
  ]

  const dataColumns = [
    {
      name: 'Juan',
      lastName: 'Perez',
      key: '1'
    },
    {
      name: 'Maria',
      lastName: 'Gomez',
      key: '2'
    }
  ]

  return (
    <>
      <h1>Tabla</h1>
      <TablaComponent columns={columns} dataColumns={dataColumns}/>
    </>
  )
}

export default App;