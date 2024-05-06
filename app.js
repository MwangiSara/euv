// console.log("hello, my people") //printing
const app = Vue.createApp(
    {
        //we can set up any data, functions or template
        // template: "<h2>template</h2>"
        data(){
            return{
                url:'https://www.google.com',



                showbooks: true,

                Title :'The last empire', //dynamic change able value
                author : 'Brandon Sandason',
                age: '50',
                x : 0,
                y : 0,

                books: [
                    {Title :'The last empire', //dynamic change able value
                    author : 'Brandon Sandason 1',
                    age: '50',
                    img: 'assets/bed1.jpg',
                    isfav: 0
                },
    
                    {Title :'The way of kings', //dynamic change able value
                    author : 'Brandon Sandason 11',
                    age: '50',
                    img: 'assets/bed3.jpg',
                    isfav: 1
                },
    
                    {Title :'The Final empire', //dynamic change able value
                    author : 'Brandon Sandason 111',
                    age: '50',
                    img: 'assets/bed2.jpg',
                    isfav: 0
                },
                ]
            }
        },
        methods: {
            changetitle(title){
                this.Title = title
            },
            toggleshowbooks(){
                this.showbooks =! this.showbooks
            },
            handleEvent(e, data){
                console.log(e, e.type)
                if (data) {
                    console.log(data)
                }
            },
            mousemovehandler(e){
                this.x = e.offsetX
                this.y = e.offsetY
            },
            changefav(book){
                book.isfav =! book.isfav
            }
        },
        computed: {
            // Computed properties are updated automatically when a dependency changes, while methods are called on when something happens, like with event handling for example. Computed properties are used when outputting something that depends on something else.
            filteredBooks(){
                return this.books.filter((book) => book.isfav) //. A Vue.js filter is essentially a function that takes a value, processes it, and then returns the processed value. 
            }
        }
    }
) //creating a vue app

app.mount('#app')  //using id to put some things in the html page that is in variable app: data-v-app

