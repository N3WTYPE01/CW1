new Vue({
    el: "#app4",
    data() {
        return {
            columns: ["Activity", "Description", "Location", "Price" , "Review", "Profile"],
            ActivityArr: [
                { Activity: `English`, Description: 'Freshen up on English course! be ready for your next exam.', Location: 'hendon', Review: 68, Price:  0 , Profile: 'Mr John' },
                { Activity: `Maths lecture`, Description: 'Maths is all around us, join us as we dive into how maths help your career', Location: "hendon", Review: 70, Price:  0, Profile: 'Mr Smith' },
                { Activity: `Animation`, Description: 'join us and a panel of renowned animators as they discuss how to break into the industry ', Location: 'hendon', Review: 80, Price:  10 , Profile: 'Mr James'},
                { Activity: `Skii Trip`, Description: 'Visit the alps and learn to skii in scenic italy!', Location: 'Cortina dAmpezzo, Italy.', Review: 94, Price: 350, Profile: 'Mrs Kon'},
                {Activity: `Trip to the Shard`, Description: 'Visit one of londons new iconic landmarks.', Location: 'Central London', Review: 65, Price: 20, Profile: 'Mr Singh'},
                {Activity: `Natural History Museum`, Description: 'The Natural History Museum in London is a natural history museum that exhibits a vast range of specimens from various segments of natural history.', Location: 'hendon', Review: 94, Price: 22.50, Profile: 'Mr Bobo'    }
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
    },
    computed: {
        filteredActivitys() {
         var filter = new RegExp(this.filterText, 'i')
            return this.ActivityArr.filter(el => el.Activity.match(filter))
        }
    }
});

function logOut(){
    window.location.href = "index.html"
}