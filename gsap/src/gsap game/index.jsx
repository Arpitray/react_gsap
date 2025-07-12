
import { useGSAP } from '@gsap/react'
import './style.css'
import gsap from 'gsap'
import { useRef, useState } from 'react'
import myImage from '../assets/fly.webp';
export default function Containers()
{
    var randomX = gsap.utils.random(-700,700,100);
    var randomY = gsap.utils.random(-350,350,100);
    var rotate = gsap.utils.random(0,720,10);
    const[Xvalue,setXvalue] = useState(0); 
    const [Yvalue,setYvalue] = useState(0);
    const[rotateImg, setRotateImg] = useState(0);

    var boxMove = useRef();
    useGSAP(()=>
    {
        gsap.to(boxMove.current,
            {
                x:Xvalue,
                y:Yvalue,
                rotate:rotateImg,
                duration:0.4,
            }
        )
    },[,Xvalue,Yvalue,rotate]);

    // const boxRef = useRef();
    return(
<>
<div className="big_container">
    {/* <button className='btn'>Animate</button> */}
        <img src={myImage} onClick={()=>
        {
            setXvalue(randomX);
            setYvalue(randomY);
            setRotateImg(rotate);
        }
    } ref={boxMove}></img>
</div>
</>
    )

}