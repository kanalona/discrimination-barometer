<template>
  <div>
    <banner>
      <div class="center-screen-container">
        <p class="highlight">
          Vorhersagealgorithmen sind oft genauso gut darin zu diskriminieren wie
          es die Gesellschaft davor schon war. Die Algorithmen zeigen die
          gesellschaftlichen Verhältnisse und somit auch die Diskriminierung.
        </p>
        <base-button
          link
          mode="flat"
          primaryColor="#ffffff"
          secondaryColor="#ff7b00"
          to="#start"
          >&rarr; Start</base-button
        >
      </div>
    </banner>
    <div id="start">
      <inner-wrapper>
        <h1>DER AMS-ALGORITHMUS</h1>
        <p>
          In vielen europäischen Ländern wurden in den letzten Jahren immer mehr
          Algorithmen eingesetzt, um Erwerbslosigkeit zu organisieren. So wird
          seit 2018 in Österreich die Einführung eines Algorithmus diskutiert
          und getestet, der die Chancen von Arbeitssuchenden auf dem
          Arbeitsmarkt vorhersagen soll. Arbeitssuchende werden in drei Gruppen
          eingeteilt: Arbeitssuchende mit niedrigen, mittleren und hohe Chancen.
          Je nachdem welcher Gruppe eine Person zugeordnet wird, bekommt sie
          unterschiedliche Ressourcen des AMS.
        </p>
        <p>
          Schlechtere Chancen werden zum Beispiel für Frauen, Mütter, Menschen
          mit Beeinträchtigung, Menschen aus nicht EU-Staaten und Menschen über
          50 berechnet. Diese Chance berechnet der
          Algorithmus mit Daten, die das AMS gesammelt hat. Es werden also Daten
          aus der Vergangenheit genommen um die Zukunft vorherzusagen. Das
          basiert auf der Annahme, dass die Zukunft der Vergangenheit ähneln
          wird: Veränderungen also unwahrscheinlich sind. So wird der jetzige
          Status-Quo erhalten!
        </p>
        <h1>DAS DISKRIMINIERUNGS-BAROMETER</h1>
        <p>
          Dabei ist der AMS-Algorithmus gar nicht so gut darin für einzelne
          Menschen die Zukunft am Arbeitsmarkt vorherzusagen. Aber er spiegelt
          wieder wie verschiedene Personengruppen in der Vergangenheit am
          Arbeitsmarkt diskriminiert wurden. Daten und statistische Berechnungen
          können einen Hinweis geben auf die Verhältnisse am Arbeitsmarkt, aber
          auch nicht genau. Der AMS-Algorithmus ist also eher wie ein verzerrtes
          Spiegelbild.
        </p>
        <p>
          Eigentlich nicht verwunderlich: Es wird sichtbar, wie der
          österreichische Arbeitsmarkt vorher schon aufgrund von persönlichen
          Merkmalen diskriminiert hat. Der AMS-Algorithmus wird zum
          Diskriminierungs-Barometer!
        </p>
        <p>
          >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
        </p>
        <div class="center-container">
          <ul>
            <li>
              <base-button
                link
                mode="flat"
                primaryColor="#000000"
                secondaryColor="#ff7b00"
                to="/barometer"
                >(1) Das Barometer PROBIEREN!</base-button
              >
            </li>
            <li>
              <base-button
                link
                mode="flat"
                primaryColor="#000000"
                secondaryColor="#ff7b00"
                to="/berechnung"
                >(2) Mehr über die dahinterliegenden Werte
                ERFAHREN!</base-button
              >
            </li>
            <li>
              <base-button
                link
                mode="flat"
                primaryColor="#000000"
                secondaryColor="#ff7b00"
                to="/kontext"
                >(3) Den Algortihmus KONTEXTUALISIEREN!</base-button
              >
            </li>
          </ul>
        </div>
      </inner-wrapper>
    </div>
  </div>
</template>

<style scoped>
h1 {
  font-size: 50px;
}
.highlight {
  color: #ff7b00;
  font-size: 3rem;
  font-style: italic;
  text-align: center;
}
.strike {
  text-decoration: line-through;
}
.center-screen-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}
.center-container {
  display: inline flex;
  justify-content: center;
  margin: auto;
}
.center-container ul {
  list-style: none;
  margin: 0;
  padding: 0 0 10rem 0;
  text-align: left;
}
.center-container li {
  padding: 5px;
}

</style>