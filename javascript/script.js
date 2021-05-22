let items = [
    // biryani
    {
        foodname: "Biryyani",
        foodimage: './media/biryani.jpg',
        price: "$20",
        type: "l",
        Description: "Biryani is a mixed rice dish originating among the Muslims of the Indian subcontinent. It is made with Indian spices, rice, and meat."
    },
    // banashake
    {
        foodname: "Banana Shake",
        foodimage: './media/bnana.jpg',
        price: "$5",
        type: "s",
        Description: "Banana shake is basically a sweetened drink made by blending ripe bananas, milk, ice cream, flavorings and a sweetener."
    },
    // burger
    {
        foodname: "Burger",
        foodimage: './media/burger.jpg',
        price: "$10",
        type: "d",
        Description: "A burger consisting of one or more cooked patties of ground meat, usually beef, placed inside a sliced bread roll or bun. "
    },
    // halwapuri
    {
        foodname: "Halwa Puri",
        foodimage: './media/halwpuri.jpg',
        price: "$20",
        type: "b",
        Description: " Poori is a popular deep fried flatbread that's served for breakfast across Pakistan and India"
    },
    // icecream
    {
        foodname: "Ice-cream Shake",
        foodimage: './media/icecream.jpg',
        price: "$30",
        type: "s",
        Description: "Combine milk, chocolate syrup and chocolate ice cream in a blender. Blend until smooth"
    },
    // karahi
    {
        foodname: "Chiken Karahi",
        foodimage: './media/karahi.jpg',
        price: "$50",
        type: "l",
        Description: " Karahi is named after the pan in which it was originally cooked – a heavy, often cast-iron pan that's similar to a wok"
    },
    // mango shake
    {
        foodname: "Mango Shake",
        foodimage: './media/mango.jpg',
        price: "$20",
        type: "s",
        Description: "Rinse and pat dry the mangoes. Peel and chop them. Add chopped mangoes in a blender jar.Blend to a smooth consistency. "
    },
    // nanchany
    {
        foodname: "Nan Chany",
        foodimage: './media/nanchany.jpg',
        price: "$10",
        type: "b",
        Description: " Lahori Nashta Murgh Chana With Tawa Naan by Kitchen With Amna. A Professional. How to make Professional Murgh Chanay recipe with tawa naan"
    },
    // pizza
    {
        foodname: "Pizza",
        foodimage: './media/pizza.jpg',
        price: "$15",
        type: "d",
        Description: "Pizza is a savory dish of Italian origin consisting of a usually round,wheat-based dough topped with tomatoes, cheese, and often various other ingredients"
    },
    {
        foodname: "Cheese Pratha",
        foodimage: './media/chesepratha.jpg',
        price: "$5",
        type: "b",

        Description: 'Cheese paratha is a delicious whole wheat flatbread stuffed with a spiced cheese stuffing. These cheese flatbreads make for a wholesome breakfast or brunch.'

    },
    //tika
    {
        foodname: "Tikka Kabab",
        foodimage: './media/tika.jpg',
        price: "$8",
        type: "l",
        Description: " ikka Kabab Recipe - Read Quick & Easy to Cook Tikka Kabab Recipe and make your favorite recipe at home available "
    },
    // toast
    {
        foodname: "French Toast",
        foodimage: './media/toast.jpg',
        price: "$6",
        type: "b",
        Description: "French toast is a dish made of sliced bread soaked in beaten eggs and typically milk, then pan fried"
    }


]

let foodsection = document.querySelector('.food-section')
const fooditems = items.map(e => {

    const foodlist = `<div class="col-md-5 col-sm-5 mx-2 ${e.type} my-2 food-container">
                <!-- image -->
                <div class="food food-image">

                    <img src="${e.foodimage}" alt="biryani">

                </div>
                <!-- description -->
                <div class="food details">
                    <div class="pricebox ">
                        <span>${e.foodname}</span>
                        <span>${e.price}</span>
                    </div>
                    <div class="des-box">
                        <p>${e.Description}</p>
                    </div>

                </div>

            </div>`
    foodsection.innerHTML += foodlist
})

// accessing all elements
const elements = document.querySelectorAll('.food-container')

elements.forEach(el => {
    console.log(el)



})
const menulist = document.querySelectorAll('.menu-items')

menulist.forEach(el => {

    el.addEventListener('click', i => {


        elements.forEach(el => {
            el.classList.add('d-none')
            if (i.target.innerHTML === 'All') {
                el.classList.remove('d-none')

            }
            else if (i.target.innerHTML === 'Breakfast') {
                if (el.classList.contains('b')) {
                    el.classList.remove('d-none')
                }
                else {
                    el.classList.add('d-none')
                }
            }

            else if (i.target.innerHTML === 'Lunch') {
                if (el.classList.contains('l')) {
                    el.classList.remove('d-none')
                }
                else {
                    el.classList.add('d-none')
                }
            }
            else if (i.target.innerHTML === 'Shake') {
                if (el.classList.contains('s')) {
                    el.classList.remove('d-none')
                }
                else {
                    el.classList.add('d-none')
                }

            }
            else if (i.target.innerHTML === 'Dinner') {
                if (el.classList.contains('d')) {
                    el.classList.remove('d-none')
                }
                else {
                    el.classList.add('d-none')
                }
            }

        })

        console.log(i.target.innerHTML);
    })




})

