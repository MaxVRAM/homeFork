const Config = {
    name: "user",
    scale: 1,
    engine: ["ddg","https://duckduckgo.com/"],
    Links: [
        [
            "site",
            [
                ["link", "https://www.example.com"],
                ["link", "https://www.example.com"]
            ]
        ],
        [
            "site",
            [
                ["link", "https://www.example.com"],
                ["link", "https://www.example.com"]
            ]
        ],
        [
            "site",
            [
                ["link", "https://www.example.com"],
                ["link", "https://www.example.com"],
                ["link", "https://www.example.com"]
            ]
        ],
        [
            "site",
            [
                ["link", "https://www.example.com"],
                ["link", "https://www.example.com"],
                ["link", "https://www.example.com"],
                ["link", "https://www.example.com"]
            ]
        ]
    ]
}

function mouseOverLink(x)
{
    document.getElementById("command").innerHTML = x;
    document.getElementById("searchbar").style.visibility = "hidden";
}

function mouseOffLink(x)
{
    document.getElementById("command").innerHTML = Config.engine[0];
    document.getElementById("searchbar").style.visibility = "visible";
}

const Main = (() => {
    const list = document.getElementById("list");
    const names = document.querySelectorAll("[data-Name]");
    const search = document.getElementById("search");
    const form = document.forms[0];

    const init = () => {
        list.innerHTML = Config.Links.map(([gName, Links]) => `
            <li>
                <h1 onclick="this.parentNode.classList.toggle('hideChildren')">${gName}</h1>
                <ul>
                    ${Links.map(([lName, url]) => `
                        <li>
                            <a onmouseenter="mouseOverLink('${lName}')" onmouseleave="mouseOffLink()" href="${url}">${lName}</a>
                        </li>`
                    ).join("")}
                </ul>
            </li>` 
        ).join("")
        
        names.forEach(el => {
            el.innerText = Config.name;
        });

        document.addEventListener("keydown", e => e.key.length === 1 && search.focus());
        search.addEventListener("keydown", () => (window.event ? event.keyCode : e.which) == 13 && form.submit());
    };

    return {
        init,
    };
})();

Main.init()
