const activities = [
  {
    img: "https://culinaryclassroom.com/wp-content/uploads/2024/04/How-to-Start-Baking-.webp",
    caption: "Baking"
  },
  {
    img: "https://injurymap.com/wp-content/uploads/2024/01/running_cover_1.jpg",
    caption: "Running"
  },
  {
    img: "https://substack-post-media.s3.amazonaws.com/public/images/d5254e61-ffc0-4b83-97eb-445da0acc6f7_675x1000.jpeg",
    caption: "Watching Severance"
  },
  {
    img: "https://srikantihota.wordpress.com/wp-content/uploads/2019/01/reading.jpg",
    caption: "Reading"
  }
];

let index = 0;

function updateActivity() {
  const img = document.getElementById("activity-img");
  const caption = document.getElementById("activity-caption");
  img.src = activities[index].img;
  caption.textContent = activities[index].caption;
}

document.getElementById("next").addEventListener("click", () => {
  index = (index + 1) % activities.length;
  updateActivity();
});

document.getElementById("prev").addEventListener("click", () => {
  index = (index - 1 + activities.length) % activities.length;
  updateActivity();
});

updateActivity();


