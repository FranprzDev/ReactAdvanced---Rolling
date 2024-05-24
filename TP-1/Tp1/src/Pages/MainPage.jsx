import heroes from '../Constants/constants.js'
import { CardHero } from '../Components/CardHero.jsx'
import { Container, Row } from 'react-bootstrap';

function MainPage({ publisher, hero }) {
    let filteredHeroes = [];

    if(publisher) { 
        filteredHeroes = heroes.filter(h => h.publisher === publisher)
    } else {
        filteredHeroes = heroes
    }

  return (
    <>
        <Container>
            <Row>
                {
                    filteredHeroes?.map((h, index) => {
                        { console.log(h) }
                        return (
                            <CardHero h={h} key={index}/>
                        )
                    })
                }
            </Row>
        </Container>
    </>
  )
}

export default MainPage