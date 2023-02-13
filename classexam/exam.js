
$(document).ready(() => {
  //on load greeting
  alert("welcome :)")
// json object that contains the tv's
const data = {
  tv: [
    {
      image:
        "https://www.google.com/search?q=TCL+24+Inch+HD+Ready+24D3100+-+black&sxsrf=AJOqlzX8DCxkWEh603iWVXZ_zDhasxdCVg:1674747027234&source=lnms&tbm=isch&sa=X&ved=2ahUKEwi1lZbtxuX8AhWC26QKHbwuCX8Q_AUoAnoECAEQBA&biw=1490&bih=714&dpr=1.25",
      tv_model: "TCL 24 Inch HD Ready 24D3100 - black",
      name_of_store: "K.S.P",
      address: "Shaul HaMelech St 80, Beer Sheva, 8446335",
      city: "Beer Sheva",
      price: 449,
      store_pic: "/images/ksp.png",
      store_link: "https://ksp.co.il/web/item/70504",
      rating: 2,
    },
    {
      image:
        "https://www.bing.com/images/search?view=detailV2&ccid=su4vovfH&id=A0B6C263C54E8EF5569812EC47C744C3CA0E57E6&thid=OIP.su4vovfHDjKOhiLKWlCobgHaE8&mediaurl=https%3a%2f%2fwww.produkttest24.com%2fwp-content%2fuploads%2f2021%2f04%2fxiaomi-mi-tv-q1-75-1-x.jpg&cdnurl=https%3a%2f%2fth.bing.com%2fth%2fid%2fR.b2ee2fa2f7c70e328e8622ca5a50a86e%3frik%3d5lcOysNEx0fsEg%26pid%3dImgRaw%26r%3d0&exph=1200&expw=1800&q=qled+75+l75m6-esg+smart+4k+xiaomi&simid=608010259806229890&FORM=IRPRST&ck=C96125DD424E870B72EFD013CCBAA32B&selectedIndex=17&ajaxhist=0&ajaxserp=0",
      tv_model: "QLED 75 L75M6-ESG SMART 4K Xiaomi",
      name_of_store: "machsanei chashmal",
      address: "HaPeled St 7, Holon",
      city: "holon",
      price: 5645,
      store_pic: "/images/machsanei_hashmal.jpg",
      store_link: "https://www.payngo.co.il/268621.html",
      rating: 3,
    },
    {
      image: "https://www.lg.com/il/tv/lg-75nano91vpa",
      tv_model: "75 LG 75NANO91VPA NanoCell 4K LG",
      name_of_store: "A.L.A.M",
      address: "Einstein St 40, Tel Aviv-Yafo",
      city: "tel aviv",
      price: 6640,
      store_pic: "/images/alam.jpg",
      store_link: "https://www.alm.co.il/catalog/product/view/id/17931/",
      rating: 5,
    },
    {
      image:
        "https://www.bing.com/images/search?view=detailV2&ccid=DZQDtG0p&id=F7825EE18EDBEBBD836EA04C1BF822E7FC3F94B4&thid=OIP.DZQDtG0pIK36z8a_urq7VQHaGY&mediaurl=https%3a%2f%2fworldwideelectro.com%2fwp-content%2fuploads%2f2020%2f03%2fSony-Bravia-4k-smart-75inch-XBR75X940D-650x560.jpg&cdnurl=https%3a%2f%2fth.bing.com%2fth%2fid%2fR.0d9403b46d2920adfacfc6bfbababb55%3frik%3dtJQ%252f%252fOci%252bBtMoA%26pid%3dImgRaw%26r%3d0&exph=560&expw=650&q=%2275+Sony+Bravia+X81K+KD-75X81KAEP&simid=607992341194421433&FORM=IRPRST&ck=015DA0C6905B06F6FE9B939793496D2A&selectedIndex=2&ajaxhist=0&ajaxserp=0",
      tv_model: '"75 Sony Bravia X81K KD-75X81KAEP',
      name_of_store: "Ivory",
      address: "HaTa'asiya St 19, Ra'anana",
      city: "Raanana",
      price: 5390,
      store_pic: "/images/ivory.png",
      store_link: "https://www.ivory.co.il/catalog.php?id=52550",
      rating: 4,
    },
  ],
};

//Ex 1 +2 +5
//function that gather the information from the json opject and print it to the page
// with some statments that make the rows with different colours based on their rating shop
// and a modal that take the costumer to pay on the tv
function main() {
  for (let i = 0; i < data.tv.length; i++) {
    $("#tv_tab").append(`
        <tr id="tr${i + 1}">
        <td>${i + 1}</td>
        <td><img src="/images/tv_image.png" id="img${i}" alt=""></td>
        <td>${data.tv[i].tv_model}</td>
        <td>${data.tv[i].name_of_store}</td>
        <td>${data.tv[i].address}</td>
        <td>${data.tv[i].city}</td>
        <td id="tv${i}" class="price">₪ ${data.tv[i].price}</td>
        <td><img src="${data.tv[i].store_pic}" id="store_logo${i}" alt=""></td>
        <td>${data.tv[i].rating}/5</td>
        <td><button type="button" id="deleteBtn${
          i + 1
        }" class="btn btn-danger">delete</button></td>
        <td><button type="button" id="buyBtn${
          i + 1
        }" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop${
      i + 1
    }">buy</button></td>
        </tr>`);

    if (data.tv[i].rating >= 4) {
      $(`#tr${i + 1}`).addClass("high_rating");
    } else if (data.tv[i].rating <= 2) {
      $(`#tr${i + 1}`).addClass("low_rating");
    } else {
      $(`#tr${i + 1}`).addClass("default");
    }

    $(`#deleteBtn${i + 1}`).on("click", () => {
      $(`#tr${i + 1}`).remove();
    });

    $(`#img${i}`).on("click", () => {
      window.open(`${data.tv[i].image}`);
    });

    $(`#store_logo${i}`).on("click", () => {
      window.open(`${data.tv[i].store_link}`);
    });

    $(`#modal`).append(`

  <!-- Modal -->
  <div class="modal fade" id="staticBackdrop${
    i + 1
  }" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="staticBackdropLabel">${
            data.tv[i].tv_model
          }</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          
            <table>
                <tr>
                    <td>name of the store:</td>
                    <td>${data.tv[i].name_of_store}</td>
                </tr>
                <tr>
                    <td>Price:</td>
                    <td>₪ ${data.tv[i].price}</td>
                </tr>
                <tr>
                    <td>credit card:</td>
                    <td><input type="number" placeholder="XXXX-XXXX-XXXX-XXXX"></td>
                </tr>
                <tr><td>exp. date:</td>
                    <td><input type="number" placeholder="Day/Month/Year"></td>
                </tr>
                <tr>
                    <td>CVV:</td>
                    <td><input type="number" placeholder="XXX"></td>
                </tr>
            </table>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-success" data-bs-dismiss="modal"><img src="/images/cart.webp" alt=""></button>
        </div>
      </div>
    </div>
  </div>
    `);
  }
}

main();

// note that i didnt really checked the following functions
//i had a little difficulty to gather information about how the array object looks
//so i made it from my head

//function that return the avg price of the all store
function price_avg(arr_objects) {
  const avg = {
    price_avg: 0,
    items_num: 0,
  };
  for (let i = 0; i < arr_objects.tv.length; i++) {
    avg.price_avg = avg.price_avg + arr_objects.tv[i].price;
    avg.items_num++;
  }

  return avg.price_avg / avg.items_num;
}
let avg_price = price_avg(data);
$(`#price_average`).on("click", () => {
  let avg_price = price_avg(data);
  console.log(avg_price.toString());
  Swal.fire(
    `The average price of the tv's ins the store are: ${avg_price.toString()}`
  );
});

//function that needto return the best option for the buyer
//we didnet really learned i think on how to sort a list of objects with key value and not to mention how to sort again
//on the sorted list i was really upset with that exercise it took me alot of effort to search in google for the result
//so i didnt had time to put effort on the css and final coding
function best_option(array_of_tv) {
  array_of_tv.tv.sort((a, b) => (b.rating != a.rating ? b.rating - a.rating : a.price - b.price)) //sort by rating an price

  return array_of_tv.tv[0].tv_model;
}

$(`#best_tv_op`).on("click", () => {
  Swal.fire(
    `The best option tv by price and rating is: <br/> ${JSON.stringify(
      best_option(data)
    )}`
  );
});
});