import amigo from '../drawings/amigo.jpg'
import burger from '../drawings/burger.jpg'
import cat from '../drawings/cat.jpg'
import coffee from '../drawings/coffee.jpg'
import ginger from '../drawings/ginger.jpg'
import glen from '../drawings/glen.jpg'
import hornet from '../drawings/hornet.jpg'
import manInRed from '../drawings/maninred.jpg'

function getImages() {
    return [
        {name: "Amigo", source:amigo},
        {name: "Burger", source:burger},
        {name: "Cat", source:cat},
        {name: "Coffee", source:coffee},
        {name: "Ginger", source:ginger},
        {name: "Glen", source:glen},
        {name: "Hornet", source:hornet},
        {name: "Man In Red", source:manInRed}
    ];
}

export default {getImages};