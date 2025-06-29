document.write(` <!--Sección de Descarga-->
<div class="download-container">
    <!--Header-->
    <div class="series-header">
        <div class="series-icon">⬇</div>
        <div class="series-info">
            <h1>Enlaces de Descarga - Mario Kart 8 Deluxe</h1>
            <p>Español, Inglés y otros</p>
        </div>
    </div>

    <!--Pestañas-->
    <div class="tabs-container">
        <button class="tab-button active" onclick="showSeason(1)">Partes del juego</button>
    </div>

    <!--Temporada 1-->
    <div class="tab-content active" id="season-1">
        <div class="season-info">
  <div class="season-title">🎮 Información del Juego</div>
  <div class="season-specs">
    <div class="season-spec">
      <div class="spec-label">PLATAFORMA</div>
      <div class="spec-value">PC / Windows</div>
    </div>
    <div class="season-spec">
      <div class="spec-label">FORMATO</div>
      <div class="spec-value">RAR</div>
    </div>
    <div class="season-spec">
      <div class="spec-label">TAMAÑO</div>
      <div class="spec-value">5.11 GB</div>
    </div>
    <div class="season-spec">
      <div class="spec-label">IDIOMA</div>
      <div class="spec-value">Español / Inglés</div>
    </div>
  </div>
</div>


        <div class="episodes-grid">
            <div class="episode-card">
                <div class="episode-header">
                    <div class="episode-number">1</div>
                    <h3 class="episode-title">Primera Parte</h3>
                </div>
                <div class="episode-specs">
                    <div class="episode-spec">
                        <div class="episode-spec-label">PESO</div>
                        <div class="episode-spec-value">2.93 GB</div>
                    </div>
                    <div class="episode-spec">
                        <div class="episode-spec-label">FORMATO</div>
                        <div class="episode-spec-value">RAR
                      </div>
                    </div>
                </div>
                <a class="download-button" href="https://tpi.li/m8Xew" target="_blank">
                    <span>📥</span>
                    <span>DESCARGAR</span>
                </a>
            </div>

            <div class="episode-card">
                <div class="episode-header">
                    <div class="episode-number">2</div>
                    <h3 class="episode-title">Segunda Parte</h3>
                </div>
                <div class="episode-specs">
                    <div class="episode-spec">
                        <div class="episode-spec-label">PESO</div>
                        <div class="episode-spec-value">2.18 GB</div>
                    </div>
                    <div class="episode-spec">
                        <div class="episode-spec-label">FORMATO</div>
                        <div class="episode-spec-value">RAR</div>
                    </div>
                </div>
                <a class="download-button" href="https://tpi.li/Mk8Dex82" target="_blank">
                    <span>📥</span>
                    <span>DESCARGAR</span>
                </a>
            </div>
        </div>
    </div>

  <!--Contraseña-->
    <div class="password-section">
        <div class="password-header">
            <span class="password-icon">🔐</span>
            <h3 class="password-title">Contraseña del Archivo</h3>
        </div>
        <div class="password-container">
            <input class="password-text" readonly="" type="text" value="mymoviesplayseries" />
            <button class="copy-button" onclick="copyPassword()">
                <span id="copy-text">📋 Copiar</span>
            </button>
        </div>
    </div>
</div>

`);