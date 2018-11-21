(()=>{
    const vn = new Vue({
        el: '#app',
        data:{
            mainMessage : "welcome to my vidoe app",
            videodata : [
                {title:"some title", path:"some path", vid_thumb:"avaengers.jpg"},
                {title:"some title", path:"some path", vid_thumb:"forcewakens.jpg"},
                {title:"some title", path:"some path", vid_thumb:"strangerthings.jpg"},
            ],
            singlemoviedata : [],

            videotitle :"",
            videosource ="",
            videodescription ="",
            showDeatils : false
        },
        created : function (){
            //this.fetchMovieData(null);
        },
        method :{
            fetchMore(){
                this.fetchMovieData(e.currentTarget.datset.movie);
            },

            loadMovie(){
                datakey= e.currentTarget.getAttribute('href');
                currenData = this.vieodata.filter(video => video.vid_path == datakey);
                this.videotitle = currenData[0].vid_name;
                this.videodescription = currenData[0].vid_desc;
                this.videosource = datakey;

                this.showDeatils= true;

                setTimeout(function(){ window.scroll})
                    
                
            },
            scrollBackUp(){
                window.scrollTo(0,0);
                this.showDetails = false;
                this.videosource = "";
            }
            fetchMovieData(movie){
                url =  movie ? `./includes/index.php?movie=${movie}` : './includes/index.php';
                fetch(url)
                .then(res => res.json())
                .then(data =>{
                    if(movie){
                        console.log(data);
                        this.singlemoviedata=data;
                    }
                    else{
                        this.videodata=data;
                    }
                })
            }

        }
    });
})();