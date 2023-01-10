import './text.css'
import NavigationBar from './NavigationBar';
import { Container } from '@mui/material';
import ArrowCircleDownIcon from '@mui/icons-material/ArrowCircleDown';

export default function About() {
  return (
    <div>
      <div className='bg'>
        <NavigationBar />
        <div className='title'>About Me</div>
        <div className='h_line'/>
        <Container sx={{marginTop: 5}} maxWidth="sm" >
          <p>
            I am a Year 2 CS student in NUS. Being exceptional at the art of procrastination and slacking, I will (hopefully) finish whatever this is before I gradute. I have nothing else to say but i need this sentence to be longer to look nicer, so I am just typing gibberish. “The whole secret lies in confusing the enemy, so that he cannot fathom our real intent.” “If he sends reinforcements everywhere, he will everywhere be weak.” “The supreme art of war is to subdue the enemy without fighting.” “Bravery without forethought, causes a man to fight blindly and desperately like a mad bull.
          </p>
        </Container>
        <Container sx = {{marginTop: 15}}>
          <h3>
            My Interests
          </h3>
          <ArrowCircleDownIcon style={{color:'whitesmoke', marginLeft:'50%', marginTop:10}}/>
        </Container>

      </div>
      <div className='bg2'>
        <div className='guitar'/>
        <div className='gaming'/>
      </div>
    </div>

  )
}