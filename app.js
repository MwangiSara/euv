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
                    isfav: true
                },
    
                    {Title :'The way of kings', //dynamic change able value
                    author : 'Brandon Sandason 11',
                    age: '50',
                    img: 'assets/bed3.jpg',
                    isfav: true
                },
    
                    {Title :'The Final empire', //dynamic change able value
                    author : 'Brandon Sandason 111',
                    age: '50',
                    img: 'assets/bed2.jpg',
                    isfav: false
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
        }
    }
) //creating a vue app

app.mount('#app')  //using id to put some things in the html page that is in variable app: data-v-app

