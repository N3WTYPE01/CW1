new Vue({
    el: "#app4",
  
    data() {
        return {
            editMode: false,
            columns: ["Activity", "Description", "Location", "Price" , "Review", "Profile", "Time"],
            ActivityArr: [
                { Activity: `English`, Description: 'Freshen up on English course! be ready for your next exam.', Location: 'hendon', Review: 68, Price: '$' + 0.00 , Profile: 'Mr John', Time: '2 Hours' },
                { Activity: `Maths lecture`, Description: 'Maths is all around us, join us as we dive into how maths help your career', Location: "hendon", Review: 70, Price: '$' + 0.00, Profile: 'Mr Smith', Time: '2 Hours' },
                { Activity: `Animation`, Description: 'join us and a panel of renowned animators as they discuss how to break into the industry ', Location: 'hendon', Review: 80, Price: '$' + 10.00 , Profile: 'Mr James', Time: '4 Hours'},
                { Activity: `Skii Trip`, Description: 'Visit the alps and learn to skii in scenic italy!', Location: 'Cortina dAmpezzo, Italy.', Review: 94, Price: '$' + 350.00, Profile: 'Mrs Kon', Time: '4 Days'},
                {Activity: `Trip to the Shard`, Description: 'Visit one of londons new iconic landmarks.', Location: 'Central London', Review: 65, Price: '$' + 20.00, Profile: 'Mr Singh', Time: '8 Hours'},
                {Activity: `Natural History Museum`, Description: 'The Natural History Museum in London is a natural history museum that exhibits a vast range of specimens from various segments of natural history.', Location: 'hendon', Review: 94, Price: '$' + 22.50, Profile: 'Mr Bobo', Time: '8 Hours'    }
            ],
            filterText: ''
        }
    },
    methods: {
        sortLowest() {
            this.ActivityArr.sort((a, b) => a.Review > b.Review ? 1 : -1);
        },
        sortHighest() {
            this.ActivityArr.sort((a, b) => a.Review < b.Review ? 1 : -1);
        },

        sortHighestPrice() {
            this.ActivityArr.sort((a, b) => a.Price < b.Price ? 1 : -1);
        },
        sortLowestPrice() { 
            this.ActivityArr.sort((a, b) => a.Price > b.Price ? 1 : -1);
        },
        sortActivLow() { 
            this.ActivityArr.sort((a, b) => a.Activity > b.Activity ? 1 : -1);
        },
        sortActivHigh() { 
            this.ActivityArr.sort((a, b) => a.Activity < b.Activity ? 1 : -1);
        },
    },
    computed: {
        filteredActivitys() {
         var filter = new RegExp(this.filterText, 'i')
            return this.ActivityArr.filter(el => el.Activity.match(filter))
        }
    }
});


function logOut(){
    localStorage.removeItem("loggedUser");
    window.location.href = "index.html"
}