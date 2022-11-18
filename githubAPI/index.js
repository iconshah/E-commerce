const buttonElement = document.querySelector("#search");
const inputElement = document.querySelector("#inputValue");

const apiURL = "https://api.github.com/users";

// Fetch data on clicking the Search Button
buttonElement.onclick = function (event) {

    var username = document.getElementById("inputValue").value
    var githubRepoContainer = document.getElementById("githubRepoContainer")
    var githubStarCount = document.getElementById("githubStarCount")
    // var githubViewsCount = document.getElementById("githubViewsCount")
    const githubURL = document.getElementById("githubURL")
    let fetchRes = fetch(
        `https://api.github.com/users/${username}/repos`);
    fetchRes.then(res =>
        res.json()).then(data => {
            // console.log(data)


            // Each Data of array is shown seperately. 
            data.forEach((eachData) => {
                const repoName = document.createElement('p')
                repoName.innerHTML = eachData.full_name;
                // console.log(repoName)
                githubRepoContainer.appendChild(repoName)
            })

            data.forEach((stargazers) => {
                const starCount = document.createElement('p')
                starCount.innerHTML = stargazers.stargazers_count ;
                // console.log(starCount)
                githubStarCount.appendChild(starCount)
            })

            // data.forEach((views) => {
            //     const viewCount = document.createElement('p')
            //     // console.log(viewCount)
            //     viewCount.innerHTML = views.watchers_count + " ";
            //     console.log(viewCount)
            //     githubViewsCount.appendChild(viewCount)
            // })

             data.forEach((url) => {
                // change String urls to link 
                const URL = document.createElement('a')
                URL.setAttribute("href", url.html_url)
                URL.setAttribute("target", "_blank")
                URL.innerHTML = url.html_url;  
                URL.style.display = "block";
                URL.style.color = "blue";
                // console.log(URL)

                githubURL.appendChild(URL)
            })
            
        }).catch(err => console.log(err))
};


