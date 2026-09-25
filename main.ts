interface PatchNotes{
    version: string;
    date: string;
    changes: string[];
}

const changelogs: PatchNotes[] = [
    {
        version: "0.0.1 (Prototype)",
        date: "2026-09-19",
        changes: [
            "PLEASE KEEP IN MIND: that the Declarations are inaccurate",
            "                                                          ",
            "                                                          ",
            "Added: Move Joystick",
            "Added: Attack Joystick",
            "Added: enemies",
            "Added: menu",
            "Added: fps screen"

        ]
    },
    {
        version: "0.0.2 (Prototype)",
        date: "2026-09-24",
        changes: [
            "Added: ",
            "Fixed: "
        ]
    }
];

const versionList = document.getElementById("version-list");

const changeLogContent = document.getElementById("changelog-content");

function ShowVersion(versionData: PatchNotes): void{
    if(changeLogContent != null)
    changeLogContent.innerHTML = `<h2>Version ${versionData.version}</h2><p>Released on: ${versionData.date}</p><ul>${versionData.changes.map((change: string) => `<li>${change}</li>`).join('')}</ul>`;
}

changelogs.forEach((log: PatchNotes) => {
    const button = document.createElement("button");
    button.textContent = `Changelog ${log.version}`;

    button.addEventListener("click", () =>{
        ShowVersion(log);
    });

    if(versionList){
        versionList.appendChild(button);
    }
});

if(changelogs.length > 0){
    ShowVersion(changelogs[changelogs.length - 1]);
}