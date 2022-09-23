
import './App.css';
import {motion} from 'framer-motion'

function App() {
  return (
    <div >
      <motion.button
       whileHover={{ scale: 1.3 }}
       whileTap={{ scale: 0.9 }}
      >click</motion.button>

      <motion.div 
       drag
       dragMomentum={false}
       dragConstraints={{
         top: -50,
         left: -50,
         right: 50,
         bottom: 50,
       }
      }
      className='box'>jaja</motion.div>
      <motion.div 
      transition={{duration:2}}
      animate={{
        scale:[1,2,2,1,1],
        rotate:[0,0,270,270,0],
        borderRadius:["20%","20%","50%","50%","20%"]
      
      }} className='box'>
        <p>animated</p>
      </motion.div>
      <motion.div 
      initial={{scale:2}}
      animate={{scale:1}} className='box'>
        <p>hola</p>
      </motion.div>
      {/* <motion.h1 
      initial={{
        scale:2
      }}
      animate={{
        y:100,
        color:'white',
        scale:1
        }}>Hello</motion.h1> */}
    </div>
  );
}

export default App;
