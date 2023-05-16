const puppeteer  = require("puppeteer");
const fs = require("fs");
const scrapping = async () => {
    const BASE_URL = "https://www.game.es/buscar/brv/o=7&cf=000a_aa0204:5:GIDS";

    const browser = await puppeteer.launch({
        headless: false,
        defaultViewport: null,
        args: ["--start-maximized"],
    });

const page = await browser.newPage()

await page.goto(BASE_URL)
await page.waitForTimeout(4000)

await page.evaluate(()=>{
    const element = document.getElementById("l-footer");
    const y = element.getBoundingClientRect().top + window.pageYOffset;
    window.scrollTo({ top: y});
});
await page.evaluate(()=>{
    const element = document.getElementById("l-footer");
    const y = element.getBoundingClientRect().top + window.pageYOffset;
    window.scrollTo({ top: y});
});
await page.evaluate(()=>{
    const element = document.getElementById("l-footer");
    const y = element.getBoundingClientRect().top + window.pageYOffset;
    window.scrollTo({ top: y});
});
await page.evaluate(()=>{
    const element = document.getElementById("l-footer");
    const y = element.getBoundingClientRect().top + window.pageYOffset;
    window.scrollTo({ top: y});
});

await page.waitForSelector(".search-item");

const title = await page.$$eval("a.cm-txt", (nodes)=>
nodes.map((n) => n.innerText)
);

const images = await page.$$eval(".img-responsive", (nodes)=>
    nodes.map((n) => n.src)
);

const prices = await page.$$eval("div.buy--price", (nodes)=>
    nodes.map((n) => n.innerText)
);

const GAMESPRODUCTS = title.map((item, index) => ({
    title: title[index],
    img: images[index],
    price: prices[index],
}));

GAMESPRODUCTS.pop();

console.log(GAMESPRODUCTS)

await browser.close();

};

scrapping();
