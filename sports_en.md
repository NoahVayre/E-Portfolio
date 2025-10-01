<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width,initial-scale=1" />
  <title>Sports & Other Activities — E-portfolio</title>

  <!-- Styles CSS -->
  <style>
    :root{
      --bg: #f6f8fb;
      --card: #ffffff;
      --muted: #667085;
      --accent: #0b6efd;
      --accent-2: #0a8a66;
      --border: #e6e9ef;
      --shadow: 0 6px 18px rgba(22, 30, 43, 0.08);
      --radius: 12px;
      --maxw: 980px;
      --gap: 22px;
      --mono: ui-monospace, SFMono-Regular, Menlo, Monaco, "Roboto Mono", "Helvetica Neue", monospace;
      --ui: system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial;
    }

    /* Reset minimal */
    *{box-sizing:border-box}
    html,body{height:100%}
    body{
      margin:0;
      font-family: var(--ui);
      background: linear-gradient(180deg,var(--bg),#eef3fb 80%);
      color:#0f1724;
      -webkit-font-smoothing:antialiased;
      -moz-osx-font-smoothing:grayscale;
      padding:32px 20px;
      display:flex;
      justify-content:center;
    }

    .wrap{
      width:100%;
      max-width:var(--maxw);
      margin:0 auto;
    }

    /* Header / breadcrumb */
    header.top{
      display:flex;
      align-items:center;
      justify-content:space-between;
      gap:16px;
      margin-bottom:18px;
    }

    .breadcrumb{
      font-size:14px;
      color:var(--muted);
    }

    .breadcrumb a{
      color:var(--muted);
      text-decoration:none;
      margin-right:8px;
    }

    .breadcrumb a:hover{ text-decoration:underline; color:var(--accent); }

    /* Page title */
    h1{
      margin:0 0 12px 0;
      font-size:28px;
      letter-spacing:-0.4px;
    }

    /* Section list container */
    main{
      display:grid;
      grid-template-columns: 1fr;
      gap:var(--gap);
    }

    /* Card style for each activity block */
    .card{
      background:var(--card);
      border-radius:var(--radius);
      padding:20px;
      box-shadow: var(--shadow);
      border:1px solid var(--border);
      transition:transform .18s ease, box-shadow .18s ease;
    }
    .card:hover{ transform:translateY(-6px); box-shadow:0 12px 30px rgba(22,30,43,0.12); }

    .meta{
      display:flex;
      align-items:center;
      gap:12px;
      margin-bottom:8px;
    }

    .meta h2{
      margin:0;
      font-size:18px;
      display:flex;
      align-items:center;
      gap:10px;
    }

    .role{
      font-size:13px;
      color:var(--muted);
    }

    .label{
      display:inline-block;
      font-size:12px;
      padding:6px 10px;
      border-radius:999px;
      background:#f1f6ff;
      color:var(--accent);
      border:1px solid rgba(11,110,253,0.08);
      margin-left:6px;
    }

    p.lead{
      margin:8px 0 14px 0;
      color:#1f2937;
      line-height:1.5;
    }

    ul.checklist{
      margin:0 0 12px 0;
      padding-left:18px;
      color:var(--muted);
      line-height:1.6;
    }

    ul.checklist li{
      margin:6px 0;
    }

    .links{
      display:flex;
      gap:10px;
      flex-wrap:wrap;
      margin-top:12px;
    }

    a.button{
      text-decoration:none;
      display:inline-flex;
      align-items:center;
      gap:8px;
      padding:8px 12px;
      border-radius:10px;
      border:1px solid rgba(11,110,253,0.12);
      background:linear-gradient(180deg, rgba(11,110,253,0.06), rgba(11,110,253,0.03));
      color:var(--accent);
      font-weight:600;
      font-size:13px;
    }
    a.button.secondary{
      border-color: rgba(10,138,102,0.08);
      background:linear-gradient(180deg, rgba(10,138,102,0.06), rgba(10,138,102,0.03));
      color:var(--accent-2);
    }

    /* Small meta row at bottom */
    .small{
      font-size:13px;
      color:var(--muted);
      margin-top:10px;
    }

    hr.soft{
      border:0;
      height:1px;
      background:linear-gradient(90deg, transparent, rgba(0,0,0,0.05), transparent);
      margin:22px 0;
      border-radius:2px;
    }

    /* Responsive */
    @media (min-width:880px){
      main{
        grid-template-columns: 1fr;
      }
      .meta h2{ font-size:20px }
    }

    @media (max-width:520px){
      body{ padding:18px 12px; }
      h1{ font-size:22px; }
    }

    /* Print */
    @media print{
      body{ background:white; color:black; padding:0; }
      .card{ box-shadow:none; border:1px solid #ddd; }
      header.top{ display:none; }
    }
  </style>
</head>

<body>
  <div class="wrap">

    <header class="top">
      <div>
        <nav class="breadcrumb" aria-label="breadcrumb">
          <a href="index_en.md">Home (index_en.md)</a> |
          <span>Sports & Other Activities</span>
        </nav>
        <h1>Sports &amp; Other Activities</h1>
      </div>

      <!-- Placeholder pour futur switch langue -->
      <div style="display:flex;align-items:center;gap:10px">
        <span style="color:var(--muted);font-size:13px">Langue :</span>
        <select aria-label="Choisir la langue" style="padding:8px;border-radius:8px;border:1px solid var(--border)">
          <option>FR</option>
          <option selected>EN</option>
        </select>
      </div>
    </header>

    <main>

      <!-- Robotics Club -->
      <article class="card" id="robotics">
        <div class="meta">
          <h2>🤖 Robotics Club <span class="label">ENSEEIHT</span></h2>
        </div>

        <p class="lead"><strong>Short description:</strong> Student robotics club at ENSEEIHT, focused on building and programming autonomous robots. <strong>Role:</strong> Active member (2023–present).</p>

        <ul class="checklist">
          <li><strong>Achievements / responsibilities:</strong> contributed to motor control design and battery management testing.</li>
          <li><strong>What I learned:</strong> teamwork, troubleshooting, and applying electronics knowledge to real prototypes.</li>
          <li><strong>Future plans:</strong> take part in national competitions such as <a href="https://www.eurobot.org/" target="_blank" rel="noopener">Eurobot</a> and mentor younger members.</li>
        </ul>

        <div class="links">
          <a class="button" href="#robotics">Voir la section</a>
        </div>
      </article>

      <hr class="soft">

      <!-- 3D Printing -->
      <article class="card" id="3d-printing">
        <div class="meta">
          <h2>🛠️ 3D Printing &amp; Maker Projects</h2>
          <div style="margin-left:auto" class="role">Independent (2024–present)</div>
        </div>

        <p class="lead"><strong>Short description:</strong> Personal and academic projects involving 3D design and additive manufacturing. <strong>Role:</strong> Independent projects (2024–present).</p>

        <ul class="checklist">
          <li><strong>Achievements / responsibilities:</strong> conducted experiments on cube resistance depending on infill rate; designed 3D models using <a href="https://www.solidworks.com/" target="_blank" rel="noopener">SolidWorks</a>, <a href="https://www.3ds.com/products-services/catia/" target="_blank" rel="noopener">CATIA</a>, and sliced models with <a href="https://ultimaker.com/software/ultimaker-cura/" target="_blank" rel="noopener">Ultimaker Cura</a>.</li>
          <li><strong>What I learned:</strong> practical use of CAD software, experimental methodology, and prototyping.</li>
          <li><strong>Future plans:</strong> expand experiments to more complex structures and explore sustainable materials for 3D printing.</li>
        </ul>

        <div class="links">
          <a class="button secondary" href="#3d-printing">Détails</a>
        </div>
      </article>

      <hr class="soft">

      <!-- Atelier 2 Tonnes -->
      <article class="card" id="atelier">
        <div class="meta">
          <h2>🌍 Workshop “Atelier 2 Tonnes”</h2>
          <div class="role">Participant (2024)</div>
        </div>

        <p class="lead"><strong>Short description:</strong> Interactive workshop on climate change and carbon footprint reduction.</p>

        <ul class="checklist">
          <li><strong>Achievements / responsibilities:</strong> engaged in collaborative scenarios to explore pathways for reducing carbon emissions.</li>
          <li><strong>What I learned:</strong> the role of engineers in sustainability, systemic impact of individual choices.</li>
          <li><strong>Future plans:</strong> contribute to student-led sustainability initiatives and apply these insights in future projects.</li>
        </ul>

        <div class="links">
          <a class="button" href="https://www.2tonnes.org/" target="_blank" rel="noopener">Atelier 2 Tonnes website</a>
        </div>
      </article>

      <hr class="soft">

      <!-- Minecraft Modding -->
      <article class="card" id="minecraft">
        <div class="meta">
          <h2>🎮 Minecraft Modding &amp; Game Design</h2>
          <div class="role">Developer &amp; tester (2023–present)</div>
        </div>

        <p class="lead"><strong>Short description:</strong> Personal project designing and managing a custom Minecraft modpack.</p>

        <ul class="checklist">
          <li><strong>Achievements / responsibilities:</strong> created a stable exploration-oriented modpack, optimized performance for multiplayer servers, designed interactive learning scenarios.</li>
          <li><strong>What I learned:</strong> project management, creativity, technical problem-solving.</li>
          <li><strong>Future plans:</strong> publish modpack guides and use game-based learning for scientific communication.</li>
        </ul>

        <div class="links">
          <a class="button" href="https://www.minecraft.net/" target="_blank" rel="noopener">Minecraft Official</a>
          <a class="button secondary" href="https://www.curseforge.com/minecraft/mc-mods" target="_blank" rel="noopener">CurseForge Mods</a>
        </div>
      </article>

      <hr class="soft">

      <!-- Sports -->
      <article class="card" id="sports">
        <div class="meta">
          <h2>⚽ Sports (Football &amp; Fitness)</h2>
          <div class="role">Team player &amp; individual training (2019–present)</div>
        </div>

        <p class="lead"><strong>Short description:</strong> Regular practice of football and fitness.</p>

        <ul class="checklist">
          <li><strong>Achievements / responsibilities:</strong> participation in friendly matches and continuous improvement of physical endurance.</li>
          <li><strong>What I learned:</strong> perseverance, discipline, teamwork, stress management.</li>
          <li><strong>Future plans:</strong> join ENSEEIHT sport teams and maintain regular training alongside studies.</li>
        </ul>
      </article>

      <hr class="soft">

      <!-- Student Life -->
      <article class="card" id="student-life">
        <div class="meta">
          <h2>🎓 Student Life &amp; Peer Support</h2>
          <div class="role">Group member (2022–present)</div>
        </div>

        <p class="lead"><strong>Short description:</strong> Collaboration in study groups, lab work and presentation preparation.</p>

        <ul class="checklist">
          <li><strong>Achievements / responsibilities:</strong> contributed to group projects, shared feedback, and helped peers with technical understanding.</li>
          <li><strong>What I learned:</strong> communication, leadership, cooperation.</li>
          <li><strong>Future plans:</strong> continue peer mentoring and get involved in future tutoring opportunities. Salope</li>
        </ul>
      </article>

    </main>

  </div>
</body>
</html>
