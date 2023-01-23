function sidebar() {
  return `
<div class="sidebar">
            <div class="app_name">
                <img src="../images/timer lgo.png" alt="LOGO">
            </div>

            <ul class="menu">
                <a href="track.html">
                    <i class='bx bx-timer' style='color:#ffffff'></i>
                    <li>Track</li>
                </a>
                <a href="projects.html">
                    <i class='bx bx-briefcase' style='color:#ffffff'></i>
                    <li>Projects</li>
                </a>
                <a href="clients.html">
                    <i class='bx bx-folder'></i>
                    <li>Clients</li>
                </a>
                <a href="teams.html">
                    <i class='bx bx-group' style='color:#ffffff'></i>
                    <li>Teams</li>
                </a>
            </ul>

            <div class="sidebar-footer">
                <div class="profile">
                    <div class="profile-img">
                        <img src="../images/real timer sqr.png" alt="">
                    </div>
                    <h4 class="profile-name">Mohammad Gauhar</h4>
                </div>
                <button id="logout">Logout</button>
            </div>
        </div>
`;
}
export { sidebar };
