import React  from 'react'
import  styles  from './About.module.css'
const About = () => {
    
document.body.style.overflow = "hidden"     
 document.body.style.backgroundSize= `cover`
     document.body.style.backgroundRepeat= `no-repeat`

document.body.style.backgroundImage=`url(https://img.freepik.com/free-photo/top-view-pepperoni-pizza-sliced-into-six-slices_141793-2157.jpg?size=626&ext=jpg&ga=GA1.2.2069374694.1640736000)`         

return (
      
      <div className={styles['main-div']}>
    <div className={styles['About-div']}><h2 className={styles.About}>About Us</h2></div>
    <div className={styles['p-div']}>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nec nisi venenatis, pulvinar nulla ut, ornare urna. Sed sit amet enim vitae nisi tempus rutrum. Suspendisse feugiat tincidunt ipsum. Sed interdum purus diam, vitae congue ipsum ullamcorper sed. Nunc dui sem, aliquam quis diam sit amet, tincidunt bibendum nibh. Nunc tempus a nibh in rutrum. Proin congue, urna ut consequat pellentesque, metus tellus imperdiet velit, non mattis mi arcu ac mauris.
<br></br>
Donec bibendum vestibulum tortor, quis faucibus elit efficitur ac. Donec malesuada augue sed ex aliquam, laoreet auctor dolor mattis. Sed euismod felis id accumsan pellentesque. In ultricies at sem sit amet porta. Etiam vel laoreet enim. Donec a odio sit amet lectus rhoncus maximus. Nullam vestibulum ornare congue. Mauris sollicitudin diam purus, at faucibus tellus ullamcorper at.
<br></br>
Vivamus non erat vitae felis convallis fermentum porttitor vitae sapien. Nam nec justo sit amet ex suscipit interdum. Pellentesque at gravida ante. Vivamus ut magna at turpis semper luctus sed eget leo. In hac habitasse platea dictumst. Curabitur tincidunt, orci in gravida aliquet, justo leo faucibus tellus, eu interdum turpis turpis non magna. Morbi lacus lectus, volutpat vel ultricies vel, ultrices efficitur risus. Praesent magna tellus, tempus in pretium nec, ornare at tortor. Fusce interdum diam ut erat hendrerit facilisis.</p></div>
</div>  )
}

export default About