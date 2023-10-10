// Add Custom CSS - Function
const Add_Custom_Style = css => {
    document.head.appendChild(document.createElement("style")).innerHTML = css;
};

// Fonction pour vérifier et appliquer les modifications en fonction de l'URL
function checkAndApplyChanges() {
    const url = window.location.href;

    // Code JS Accueil
    if (url.includes("https://www.ecoledirecte.com/login?cameFrom=%2FAccueil")) {
        /* -------------- */
        /* Add Custom CSS */
        /* -------------- */
	// alert("Accueil");
        Add_Custom_Style(`
        div.container-principal {
	    background: url("https://4kwallpapers.com/images/walls/thumbs_3t/12661.jpg");
	    background-repeat: no-repeat;
	    background-size: cover;
	}
	div.col-lg-4.col-md-5.login-container {
	    padding: 0px 80px 80px 80px !important;
	}
	div.col-lg-8.col-md-7.info-container {
	    background: transparent;
	}
	a:link, button.btn.btn-link:link, .link:link {
	    color: #e6e6e6;
	}
	div.modal-body {
	    color: #e6e6e6;
	}
	h3.modal-title {
	    color: #e6e6e6;
	}
	.modal-content {
	    background-color: #1e1e1e;
	}
	.form-check-input {
	    background-color: #1e1e1e;
	}
	.login-container[_ngcontent-pgv-c176] header[_ngcontent-pgv-c176] h1[_ngcontent-pgv-c176] {
	    color: #e6e6e6;
	}
	button#pb-connexion.btn.btn-link {
	    background: #1e1e1e;
	    border-radius: 0px 0px 10px 10px;
	    color: #e6e6e6;
	}
	div#item-mentions {
	    color: #e6e6e6;
	}
	label.form-check-label {
	    color: #e6e6e6;
	}
	input#seSouvenirDeMoi.form-check-input.ng-untouched.ng-pristine.ng-valid {
	    background: #1e1e1e;
	}
        .col-lg-4.col-md-5.login-container {
            background: #121212!important;
        }
	.text-center {
	    color: #e6e6e6;
	}
	input#username.log.form-control.ng-pristine.ng-valid.ng-touched {
	    background: #1e1e1e;
	    border: 0px;
	    border-radius: 4px;
	}
	input#password.log.form-control.ng-pristine.ng-valid.ng-touched {
	    background: #1e1e1e;
	    border: 0px;
	    border-radius: 4px;	    
	}
	button#connexion.btn.btn-info.login {
	      align-items: center;
	      background-image: linear-gradient(144deg,#AF40FF, #5B42F3 50%,#00DDEB);
  	      border: 0;
              border-radius: 8px;
              box-shadow: rgba(151, 65, 252, 0.2) 0 15px 30px -5px;
              box-sizing: border-box;
	      color: #e6e6e6;
	      display: flex;
	      font-family: Phantomsans, sans-serif;
	      font-size: 20px;
	      justify-content: center;
	      line-height: 1em;
	      max-width: 100%;
	      min-width: 140px;
	      padding: 3px;
	      text-decoration: none;
	      user-select: none;
	      -webkit-user-select: none;
	      touch-action: manipulation;
	      white-space: nowrap;
	      cursor: pointer;
	      height: 50px;
	    }

	    .button-64:active,
	    .button-64:hover {
	      outline: 0;
	    }

	    .button-64 span {
	      background-color: rgb(5, 6, 45);
	      padding: 16px 24px;
	      border-radius: 6px;
	      width: 100%;
	      height: 100%;
	      transition: 300ms;
	    }

	    .button-64:hover span {
	      background: none;
	    }

	    @media (min-width: 768px) {
	      .button-64 {
  	      font-size: 24px;
	        min-width: 196px;
	      }
	    }
	}
        `);
    } else if (url.includes("https://www.ecoledirecte.com/login")) {
        /* -------------- */
        /* Add Custom CSS */
        /* -------------- */
	// alert("login");
        Add_Custom_Style(`
	.ed-menu-parent .ed-menu:not(.active) .ed-menu-image-wrapper>div:after {
	    background: transparent!important;
	}
        div.container-principal {
	    background: url("https://4kwallpapers.com/images/walls/thumbs_3t/12661.jpg");
	    background-repeat: no-repeat;
	    background-size: cover;
	}
	div.col-lg-4.col-md-5.login-container {
	    padding: 0px 80px 80px 80px !important;
	}
	div.col-lg-8.col-md-7.info-container {
	    background: transparent;
	}
	a:link, button.btn.btn-link:link, .link:link {
	    color: #e6e6e6;
	}
	div.modal-body {
	    color: #e6e6e6;
	}
	h3.modal-title {
	    color: #e6e6e6;
	}
	.modal-content {
	    background-color: #1e1e1e;
	}
	.form-check-input {
	    background-color: #1e1e1e;
	}
	.login-container[_ngcontent-pgv-c176] header[_ngcontent-pgv-c176] h1[_ngcontent-pgv-c176] {
	    color: #e6e6e6;
	}
	button#pb-connexion.btn.btn-link {
	    background: #1e1e1e;
	    border-radius: 0px 0px 10px 10px;
	    color: #e6e6e6;
	}
	div#item-mentions {
	    color: #e6e6e6;
	}
	label.form-check-label {
	    color: #e6e6e6;
	}
	input#seSouvenirDeMoi.form-check-input.ng-untouched.ng-pristine.ng-valid {
	    background: #1e1e1e;
	}
        .col-lg-4.col-md-5.login-container {
            background: #121212!important;
        }
	.text-center {
	    color: #e6e6e6;
	}
	input#username.log.form-control.ng-pristine.ng-valid.ng-touched {
	    background: #1e1e1e;
	    border: 0px;
	    border-radius: 4px;
	}
	input#password.log.form-control.ng-pristine.ng-valid.ng-touched {
	    background: #1e1e1e;
	    border: 0px;
	    border-radius: 4px;	    
	}
	button#connexion.btn.btn-info.login {
	      align-items: center;
	      background-image: linear-gradient(144deg,#AF40FF, #5B42F3 50%,#00DDEB);
  	      border: 0;
              border-radius: 8px;
              box-shadow: rgba(151, 65, 252, 0.2) 0 15px 30px -5px;
              box-sizing: border-box;
	      color: #e6e6e6;
	      display: flex;
	      font-family: Phantomsans, sans-serif;
	      font-size: 20px;
	      justify-content: center;
	      line-height: 1em;
	      max-width: 100%;
	      min-width: 140px;
	      padding: 3px;
	      text-decoration: none;
	      user-select: none;
	      -webkit-user-select: none;
	      touch-action: manipulation;
	      white-space: nowrap;
	      cursor: pointer;
	      height: 50px;
	    }

	    .button-64:active,
	    .button-64:hover {
	      outline: 0;
	    }

	    .button-64 span {
	      background-color: rgb(5, 6, 45);
	      padding: 16px 24px;
	      border-radius: 6px;
	      width: 100%;
	      height: 100%;
	      transition: 300ms;
	    }

	    .button-64:hover span {
	      background: none;
	    }

	    @media (min-width: 768px) {
	      .button-64 {
  	      font-size: 24px;
	        min-width: 196px;
	      }
	    }
	}
        `);
    } else if (url.includes("https://www.ecoledirecte.com/Famille")) {
        /* -------------- */
        /* Add Custom CSS */
        /* -------------- */
	// alert("Famille");
	const lienMentionsLegales = document.querySelector('a[routerlink="/about"]');
	if (lienMentionsLegales) {
	    lienMentionsLegales.classList.add('legal');
	}
	const lienHelp = document.querySelector('a[routerlink="/Aides"]');
	if (lienHelp) {
	    lienHelp.classList.add('help');
	}
        Add_Custom_Style(`
	    .ed-menu-parent .ed-menu:not(.active) .ed-menu-image-wrapper>div:after {
	        background: transparent!important;
	    }
	    a.help {
		background: #2d2d2d!important;
		color: white;
	    }
	    a.legal {
		background: #2d2d2d!important;
		color: white;
	    }
	    a.envelope-size {
		color: white!important;
		background: #2d2d2d!important;
	    }
	    div.note-postit.gestion-postit {
	        color: #e6e6e6;
	    }
	    div#wallmessages.qa-message-list.ng-star-inserted {
	        border-left: 2px solid #e3e3e3;
	    }
	    #container-menu {
	        background: linear-gradient(144deg,#AF40FF, #5B42F3 50%,#00DDEB)!important;
	    }
	    div.ed-menu {
	        background: linear-gradient(144deg,#AF40FF, #5B42F3 50%,#00DDEB)!important;
	    }
            div.container-principal {
	        background: #121212;
	    }
	    nav.navbar.navbar-expand-lg.navbar-light.double-padding.bg-transparent {
	        background: #1e1e1e!important;
	    }
	    div#nom-etb {
	        color: #e6e6e6;
	    }
	    a#user-account-link.nav-link.text-famille {
	      	align-items: center!important;
	      	background-image: linear-gradient(144deg,#AF40FF, #5B42F3 50%,#00DDEB)!important;
  	      	border: 0!important;
             	border-radius: 8px!important;
              	box-shadow: rgba(151, 65, 252, 0.2) 0 15px 30px -5px!important;
              	box-sizing: border-box!important;
	      	color: #e6e6e6!important;
	      	display: flex!important;
	      	font-family: Phantomsans, sans-serif!important;
	      	font-size: 20px;
	      	justify-content: center!important;
	      	line-height: 1em!important;
	      	max-width: 100%!important;
	      	min-width: 140px!important;
	      	padding: 3px!important;
	      	text-decoration: none!important;
	      	user-select: none!important;
	      	-webkit-user-select: none!important;
	      	touch-action: manipulation!important;
	      	white-space: nowrap!important;
	      	cursor: pointer!important;
	      	height: 30px!important;
	    }
	    .page-accueil .padding-home {
	        color: #e6e6e6;
	    }
	    a.ng-star-inserted {
	        color: #e6e6e6;
	    }
	    .page-accueil .accueiluserauth .separator {
	        box-shadow: -5px 0 5px -4px #000000;
	    }
	    div#soldes.hidden-xs.card.ed-card.px-3.pb-3.ng-star-inserted {
	        background: #1e1e1e;
	        border: 0px;
	        border-radius: 15px;
	    }
	    #footer[_ngcontent-qqa-c165] ul[_ngcontent-qqa-c165] li[_ngcontent-qqa-c165] a[_ngcontent-qqa-c165] {
	        background: #1e1e1e!important;
	    }
        `);
    } else if (url.includes("https://www.ecoledirecte.com/F/FamilleCoordonnees")) {
        /* -------------- */
        /* Add Custom CSS */
        /* -------------- */
	// alert("Famille");
        Add_Custom_Style(`
	    .ed-menu-parent .ed-menu:not(.active) .ed-menu-image-wrapper>div:after {
	        background: transparent!important;
	    }
	    ul.nav.nav-tabs {
		border-bottom: 0px;
	    }
	    a.nav-link.active {
		color: white!important;
	    }
	    .ed-card>.card-body {
		background: #2d2d2d;
		border-radius: 0 0 15px 15px !important;
	    }
	    .ed-card>.card-header {
		border-radius: 15px 15px 0px 0px !important;
		background: #1e1e1e;
	    }
	    .ed-card.with-epingle {
		border: 0px;
	        border-radius: 15px;
	        background: #1e1e1e;
	        box-shadow: 0 0 15px black;
		color: #e6e6e6;
	    }
	    .container-bg {
	        border: 0px;
	        border-radius: 15px;
	        background: #1e1e1e;
	        box-shadow: 0 0 15px black;
		color: #e6e6e6;
	    }
	    .nav-tabs>li.active:after {
		background-color: #2d2d2d;
	    }
	    a.nav-link.active {
		background-color: #1e1e1e!important;
		color: white!important;
	    }
	    .form-control-plaintext {
		color: wheat;
	    }
	    .form-check.radio-custom-ed .btn {
	        color: #e6e6e6;
	    }
	    button[_ngcontent-hol-c178]:not(#show-password):not(.btn-link) {
	        align-items: center!important;
	      	background-image: linear-gradient(144deg,#AF40FF, #5B42F3 50%,#00DDEB)!important;
  	      	border: 0!important;
             	border-radius: 8px!important;
              	box-shadow: rgba(151, 65, 252, 0.2) 0 15px 30px -5px!important;
              	box-sizing: border-box!important;
	      	color: #e6e6e6!important;
	      	display: flex!important;
	      	font-family: Phantomsans, sans-serif!important;
	      	font-size: 20px;
	      	justify-content: center!important;
	      	line-height: 1em!important;
	      	max-width: 100%!important;
	      	min-width: 140px!important;
	      	padding: 3px!important;
	      	text-decoration: none!important;
	      	user-select: none!important;
	      	-webkit-user-select: none!important;
	      	touch-action: manipulation!important;
	      	white-space: nowrap!important;
	      	cursor: pointer!important;
	      	height: 30px!important;
	    }
	    .modal-content {
	        background: #121212!important;
	    }
	    .ed-menu-parent .ed-menu:not(.active) .ed-menu-image-wrapper>div:after {
	        background: transparent!important;
	    }
	    #container-menu {
	        background: linear-gradient(144deg,#AF40FF, #5B42F3 50%,#00DDEB)!important;
	    }
	    div.ed-menu {
	        background: linear-gradient(144deg,#AF40FF, #5B42F3 50%,#00DDEB)!important;
	    }
            div.container-principal {
	        background: #121212;
	    }
	    nav.navbar.navbar-expand-lg.navbar-light.double-padding {
	        background: #1e1e1e!important;
	    }
	    div#nom-etb {
	        color: #e6e6e6;
	    }
	    a#user-account-link.nav-link.text-famille {
	      	align-items: center!important;
	      	background-image: linear-gradient(144deg,#AF40FF, #5B42F3 50%,#00DDEB)!important;
  	      	border: 0!important;
             	border-radius: 8px!important;
              	box-shadow: rgba(151, 65, 252, 0.2) 0 15px 30px -5px!important;
              	box-sizing: border-box!important;
	      	color: #e6e6e6!important;
	      	display: flex!important;
	      	font-family: Phantomsans, sans-serif!important;
	      	font-size: 20px;
	      	justify-content: center!important;
	      	line-height: 1em!important;
	      	max-width: 100%!important;
	      	min-width: 140px!important;
	      	padding: 3px!important;
	      	text-decoration: none!important;
	      	user-select: none!important;
	      	-webkit-user-select: none!important;
	      	touch-action: manipulation!important;
	      	white-space: nowrap!important;
	      	cursor: pointer!important;
	      	height: 30px!important;
	    }
	    .page-accueil .padding-home {
	        color: #e6e6e6;
	    }
	    a.ng-star-inserted {
	        color: #e6e6e6;
	    }
	    .page-accueil .accueiluserauth .separator {
	        box-shadow: -5px 0 5px -4px #000000;
	    }
	    div#soldes.hidden-xs.card.ed-card.px-3.pb-3.ng-star-inserted {
	        background: #1e1e1e;
	        border: 0px;
	        border-radius: 15px;
	    }
	    #footer[_ngcontent-qqa-c165] ul[_ngcontent-qqa-c165] li[_ngcontent-qqa-c165] a[_ngcontent-qqa-c165] {
	        background: #1e1e1e!important;
	    }
        `);
    } else if (url.includes("https://www.ecoledirecte.com/Famille")) {
        /* -------------- */
        /* Add Custom CSS */
        /* -------------- */
	// alert("Famille");
        Add_Custom_Style(`
	    .page-questionnaires .alert-info {
		color: black;
	    }
	    h4 {
		background: #1e1e1e!important;
	    }
	    div.ng-star-inserted {
		color: white;
	    }
	    .cloud .btn-breadcrumb .btn.btn-link {
		background: #2d2d2d;
		border-radius: 15px
	    }
	    .dhx_cal_tab.active {
		background: #1e1e1e;
		border: 0;
		box-shadow: 0 0 5px black;
	    }
	    div#view-week.dhx_cal_tab.dhx_cal_tab_first.week_tab {
		background: #2d2d2d;
		border: 0;
		box-shadow: 0 0 5px black;
		color: white;
	    }
	    .dhx_cal_tab.active {
		background: #1e1e1e!important;
		border: 0!important;
		box-shadow: 0 0 5px blackimportant;
	    }
	    div#view-month.dhx_cal_tab.dhx_cal_tab_last.month_tab {
		background: #2d2d2d;
		border: 0;
		box-shadow: 0 0 5px black;
		color: white;
	    }
	    .dhx_cal_navline .dhx_cal_weekNumber {
		color: white;
	    }
	    .eleve-note .table.relevemoyenne>tbody>tr.groupematiere>td {
		background: #2d2d2d;
	    }
	    .table.ed-table thead tr th:not(.no-style) {
		background: #2d2d2d;
	    }
	    .nav.nav-pills li a {
		background: #2d2d2d;
	    }
  	    div.dhx_cal_next_button {
		box-shadow: 0 0 5px black;
		color: white;
		border: 0;
	    }
	    div.dhx_cal_prev_button {
	        box-shadow: 0 0 5px black;
		color: white;
		border: 0;
	    }
	    div#view-today.dhx_cal_today_button {
		background: #2d2d2d;
		color: white;
		border: 0;
		box-shadow: 0 0 5px black;
	    }
	    tr.ng-star-inserted {
		color: white;
	    }
	    button {
		background: transparent;
	    }
	    .row.compteurs-vs[_ngcontent-wst-c329] button[_ngcontent-wst-c329] {
		background: transparent;
	    }
	    div.card.text-center.viescolaire.absence {
		border-radius: 15px;
	    }	     
	    .dhx_cal_navline .dhx_cal_date {
		color: white;
	    }
	    .nav-tabs>li button>i:hover {
		background: transparent!important;
	    }
	    .nav-tabs>li.active:after {
		background-color: #2d2d2d;
	    }
	    a.nav-link.active {
		color: white!important;
		background: #1e1e1e!important;
	    }
	    ul.nav.nav-tabs {
		border-bottom: transparent;
	    }
	    tr.text-warning.ng-star-inserted {
		color: white!important;
	    }
	    td.ng-star-inserted {
		color: white;
	    }
	    div.resume {
		background: #1e1e1e!important;
	    }
	    div.resume {
		border-radius: 15px;
	    }
	    span.badge.alert-danger.ng-star-inserted {
		background: #5a5b5b;
		color: #c6e6e6;
	    }
	    .modal-content .footer {
		border-radius: 0 0 15px 15px;
	    }
	    div.card.ng-star-inserted {
		background: #2d2d2d;
		border-radius: 15px;
	    }
	    .bs-datepicker {
		border-radius: 15px;
	        box-shadow: 0 0 10px #000;
	    }
	    #encart-notes .note {
		color: white;
	    }
	    #encart-notes table .relevemoyenne {
		color: white;
	    }
	    #encart-notes table .coef {
		color: white;
	    }
	    #encart-notes table .discipline {
		color: white;
	    }
	    .text-danger {
		color: #cf6679!important;
	    }
	    .active .overlay {
		background: linear-gradient(rgba(13,79,147,0),rgb(141 64 250))
	    }
	    div.bs-datepicker-head {
		border-radius: 15px 15px 0 0;
	    }
	    .bs-datepicker-body {
		border-radius: 0 0 15px 15px!important;
	    }
	    button.btn.btn-primary-color.border.border-0.nav-link {
		background: #2d2d2d;
	    }
	    ul.cdt-eleve-onglets.nav.nav-tabs.flex-column.align-items-center {
		border-bottom: transparent;
	    }
	    .btn-secondary.active {
		background: #2d2d2d!important;
	    }
	    .btn-secondary {
		background: #1e1e1e;
		border: 0px;
	    }
	    .footer {
		background: #2d2d2d!important;
		border-radius: 0px 0px 15px 15px;
	    }
	    button.btn.btn-primary.border.border-0.nav-link {
		background: #2d2d2d;
	    }
	    #cdtnavigation-action .list-group-item:first-child {
		border-top: 1px solid #e6e6e6;
	    }
	    #cdtnavigation-action .list-group-item {
		color: #e6e6e6;
		border-bottom: 1px solid #e6e6e6;
	    }
	    .ed-card.with-epingle {
		border-radius: 15px;
		box-shadow: 0 0 10px black;
		background: #2d2d2d!important;
		border: 0px;
		color: #e6e6e6;
	    }
	    .ed-card>.card-header {
		border-radius: 15px 15px 0px 0px !important;
		background: #1e1e1e;
	    }
	    h3.all-devoirs {
		color: #e6e6e6;
	    }
	    div.col-lg-4.cdtnavigation.d-print-none {
	        border-radius: 15px;
		background: #2d2d2d!important;
		box-shadow: 0 0 15px black;
	    }
	    .container-bg {
	        border: 0px;
	        border-radius: 15px;
	        background: #1e1e1e;
	        box-shadow: 0 0 15px black;
		color: #e6e6e6;
	    }
	    .form-check.radio-custom-ed .btn {
	        color: #e6e6e6;
	    }
	    button[_ngcontent-hol-c178]:not(#show-password):not(.btn-link) {
	        align-items: center!important;
	      	background-image: linear-gradient(144deg,#AF40FF, #5B42F3 50%,#00DDEB)!important;
  	      	border: 0!important;
             	border-radius: 8px!important;
              	box-shadow: rgba(151, 65, 252, 0.2) 0 15px 30px -5px!important;
              	box-sizing: border-box!important;
	      	color: #e6e6e6!important;
	      	display: flex!important;
	      	font-family: Phantomsans, sans-serif!important;
	      	font-size: 20px;
	      	justify-content: center!important;
	      	line-height: 1em!important;
	      	max-width: 100%!important;
	      	min-width: 140px!important;
	      	padding: 3px!important;
	      	text-decoration: none!important;
	      	user-select: none!important;
	      	-webkit-user-select: none!important;
	      	touch-action: manipulation!important;
	      	white-space: nowrap!important;
	      	cursor: pointer!important;
	      	height: 30px!important;
	    }
	    .modal-content {
	        background: #121212!important;
	    }
	    .ed-menu-parent .ed-menu:not(.active) .ed-menu-image-wrapper>div:after {
	        background: transparent!important;
	    }
	    #container-menu {
	        background: linear-gradient(144deg,#AF40FF, #5B42F3 50%,#00DDEB)!important;
	    }
	    div.ed-menu {
	        background: linear-gradient(144deg,#AF40FF, #5B42F3 50%,#00DDEB)!important;
	    }
            div.container-principal {
	        background: #121212;
	    }
	    nav.navbar.navbar-expand-lg.navbar-light.double-padding {
	        background: #1e1e1e!important;
	    }
	    div#nom-etb {
	        color: #e6e6e6;
	    }
	    a#user-account-link.nav-link.text-famille {
	      	align-items: center!important;
	      	background-image: linear-gradient(144deg,#AF40FF, #5B42F3 50%,#00DDEB)!important;
  	      	border: 0!important;
             	border-radius: 8px!important;
              	box-shadow: rgba(151, 65, 252, 0.2) 0 15px 30px -5px!important;
              	box-sizing: border-box!important;
	      	color: #e6e6e6!important;
	      	display: flex!important;
	      	font-family: Phantomsans, sans-serif!important;
	      	font-size: 20px;
	      	justify-content: center!important;
	      	line-height: 1em!important;
	      	max-width: 100%!important;
	      	min-width: 140px!important;
	      	padding: 3px!important;
	      	text-decoration: none!important;
	      	user-select: none!important;
	      	-webkit-user-select: none!important;
	      	touch-action: manipulation!important;
	      	white-space: nowrap!important;
	      	cursor: pointer!important;
	      	height: 30px!important;
	    }
	    .page-accueil .padding-home {
	        color: #e6e6e6;
	    }
	    a.ng-star-inserted {
	        color: #e6e6e6;
	    }
	    .page-accueil .accueiluserauth .separator {
	        box-shadow: -5px 0 5px -4px #000000;
	    }
	    div#soldes.hidden-xs.card.ed-card.px-3.pb-3.ng-star-inserted {
	        background: #1e1e1e;
	        border: 0px;
	        border-radius: 15px;
	    }
	    #footer[_ngcontent-qqa-c165] ul[_ngcontent-qqa-c165] li[_ngcontent-qqa-c165] a[_ngcontent-qqa-c165] {
	        background: #1e1e1e!important;
	    }
        `);
    } else if (url.includes("https://www.ecoledirecte.com/1/14810/Messagerie")) {
        /* -------------- */
        /* Add Custom CSS */
        /* -------------- */
	// alert("Famille");
        Add_Custom_Style(`
	    .ed-menu-parent .ed-menu:not(.active) .ed-menu-image-wrapper>div:after {
	        background: transparent!important;
	    }
	    input#search-message.form-control-sm.ng-untouched.ng-pristine.ng-valid {
		background: #2d2d2d;
		border: 0;
	    }
	    .page-messagerie .inbox-nav li:hover {
		background: #1e1e1e;
	    }
	    li.active.ng-star-inserted {
		background: #2d2d2d!important;
	    }
	    p {
		color: white;
	    }
	    .page-messagerie .un-message.active:hover {
		background: #1e1e1e;
	    }
	    .page-messagerie .un-message:hover {
		background: #1e1e1e;
	    }
	    div.un-message.cliquable.active {
		background: #1e1e1e;
	    }
	    div.messages-listing.selected-message {
		background: transparent!important;
	    }
	    h3.pas-vide {
		background: #1e1e1e;
		border-radius: 15px;
	    }
	    form.ng-untouched.ng-pristine.ng-valid {
		background: #1e1e1e;
		box-shadow: 0 0 15px black;
		border-radius: 15px;
	    }
	    virtual-scroller.vertical.selfScroll.ng-star-inserted {
		background: #2d2d2d;
		border-radius: 0 0 15px 15px;
	    }
	    .page-messagerie .message-detail {
		background: #2d2d2d;
	    }
  	    div.dhx_cal_next_button {
		background: #2d2d2d!important;
		color: white;
		border: 0;
		box-shadow: 0 0 5px black;
	    }
	    div.dhx_cal_prev_button {
		background: #2d2d2d!important;
		color: white;
		border: 0;
		box-shadow: 0 0 5px black;
	    }
	    div#view-today.dhx_cal_today_button {
		background: #2d2d2d;
		color: white;
		border: 0;
		box-shadow: 0 0 5px black;
	    }
	    tr.ng-star-inserted {
		color: white;
	    }
	    button {
		background: transparent;
	    }
	    .row.compteurs-vs[_ngcontent-wst-c329] button[_ngcontent-wst-c329] {
		background: transparent;
	    }
	    div.card.text-center.viescolaire.absence {
		border-radius: 15px;
	    }	     
	    .dhx_cal_navline .dhx_cal_date {
		color: white;
	    }
	    .nav-tabs>li button>i:hover {
		background: transparent!important;
	    }
	    .nav-tabs>li.active:after {
		background-color: #2d2d2d;
	    }
	    a.nav-link.active {
		color: white!important;
		background: #1e1e1e!important;
	    }
	    ul.nav.nav-tabs {
		border-bottom: transparent;
	    }
	    tr.text-warning.ng-star-inserted {
		color: white!important;
	    }
	    td.ng-star-inserted {
		color: white;
	    }
	    div.resume {
		background: #1e1e1e!important;
	    }
	    div.resume {
		border-radius: 15px;
	    }
	    span.badge.alert-danger.ng-star-inserted {
		background: #5a5b5b;
		color: #c6e6e6;
	    }
	    .modal-content .footer {
		border-radius: 0 0 15px 15px;
	    }
	    div.card.ng-star-inserted {
		background: #2d2d2d;
		border-radius: 15px;
	    }
	    .bs-datepicker {
		border-radius: 15px;
	        box-shadow: 0 0 10px #000;
	    }
	    #encart-notes .note {
		color: white;
	    }
	    #encart-notes table .relevemoyenne {
		color: white;
	    }
	    #encart-notes table .coef {
		color: white;
	    }
	    #encart-notes table .discipline {
		color: white;
	    }
	    .text-danger {
		color: #cf6679!important;
	    }
	    .active .overlay {
		background: linear-gradient(rgba(13,79,147,0),rgb(141 64 250))
	    }
	    div.bs-datepicker-head {
		border-radius: 15px 15px 0 0;
	    }
	    .bs-datepicker-body {
		border-radius: 0 0 15px 15px!important;
	    }
	    button.btn.btn-primary-color.border.border-0.nav-link {
		background: #2d2d2d;
	    }
	    ul.cdt-eleve-onglets.nav.nav-tabs.flex-column.align-items-center {
		border-bottom: transparent;
	    }
	    .btn-secondary.active {
		background: #2d2d2d!important;
	    }
	    .btn-secondary {
		background: #1e1e1e;
		border: 0px;
	    }
	    .footer {
		background: #2d2d2d!important;
		border-radius: 0px 0px 15px 15px;
	    }
	    button.btn.btn-primary.border.border-0.nav-link {
		background: #2d2d2d;
	    }
	    #cdtnavigation-action .list-group-item:first-child {
		border-top: 1px solid #e6e6e6;
	    }
	    #cdtnavigation-action .list-group-item {
		color: #e6e6e6;
		border-bottom: 1px solid #e6e6e6;
	    }
	    .ed-card.with-epingle {
		border-radius: 15px;
		box-shadow: 0 0 10px black;
		background: #2d2d2d!important;
		border: 0px;
		color: #e6e6e6;
	    }
	    .ed-card>.card-header {
		border-radius: 15px 15px 0px 0px !important;
		background: #1e1e1e;
	    }
	    h3.all-devoirs {
		color: #e6e6e6;
	    }
	    div.col-lg-4.cdtnavigation.d-print-none {
	        border-radius: 15px;
		background: #2d2d2d!important;
		box-shadow: 0 0 15px black;
	    }
	    .container-bg {
	        border: 0px;
	        border-radius: 15px;
	        background: #1e1e1e;
	        box-shadow: 0 0 15px black;
		color: #e6e6e6;
	    }
	    .form-check.radio-custom-ed .btn {
	        color: #e6e6e6;
	    }
	    button[_ngcontent-hol-c178]:not(#show-password):not(.btn-link) {
	        align-items: center!important;
	      	background-image: linear-gradient(144deg,#AF40FF, #5B42F3 50%,#00DDEB)!important;
  	      	border: 0!important;
             	border-radius: 8px!important;
              	box-shadow: rgba(151, 65, 252, 0.2) 0 15px 30px -5px!important;
              	box-sizing: border-box!important;
	      	color: #e6e6e6!important;
	      	display: flex!important;
	      	font-family: Phantomsans, sans-serif!important;
	      	font-size: 20px;
	      	justify-content: center!important;
	      	line-height: 1em!important;
	      	max-width: 100%!important;
	      	min-width: 140px!important;
	      	padding: 3px!important;
	      	text-decoration: none!important;
	      	user-select: none!important;
	      	-webkit-user-select: none!important;
	      	touch-action: manipulation!important;
	      	white-space: nowrap!important;
	      	cursor: pointer!important;
	      	height: 30px!important;
	    }
	    .modal-content {
	        background: #121212!important;
	    }
	    .ed-menu-parent .ed-menu:not(.active) .ed-menu-image-wrapper>div:after {
	        background: transparent!important;
	    }
	    #container-menu {
	        background: linear-gradient(144deg,#AF40FF, #5B42F3 50%,#00DDEB)!important;
	    }
	    div.ed-menu {
	        background: linear-gradient(144deg,#AF40FF, #5B42F3 50%,#00DDEB)!important;
	    }
            div.container-principal {
	        background: #121212;
	    }
	    nav.navbar.navbar-expand-lg.navbar-light.double-padding {
	        background: #1e1e1e!important;
	    }
	    div#nom-etb {
	        color: #e6e6e6;
	    }
	    a#user-account-link.nav-link.text-famille {
	      	align-items: center!important;
	      	background-image: linear-gradient(144deg,#AF40FF, #5B42F3 50%,#00DDEB)!important;
  	      	border: 0!important;
             	border-radius: 8px!important;
              	box-shadow: rgba(151, 65, 252, 0.2) 0 15px 30px -5px!important;
              	box-sizing: border-box!important;
	      	color: #e6e6e6!important;
	      	display: flex!important;
	      	font-family: Phantomsans, sans-serif!important;
	      	font-size: 20px;
	      	justify-content: center!important;
	      	line-height: 1em!important;
	      	max-width: 100%!important;
	      	min-width: 140px!important;
	      	padding: 3px!important;
	      	text-decoration: none!important;
	      	user-select: none!important;
	      	-webkit-user-select: none!important;
	      	touch-action: manipulation!important;
	      	white-space: nowrap!important;
	      	cursor: pointer!important;
	      	height: 30px!important;
	    }
	    .page-accueil .padding-home {
	        color: #e6e6e6;
	    }
	    a.ng-star-inserted {
	        color: #e6e6e6;
	    }
	    .page-accueil .accueiluserauth .separator {
	        box-shadow: -5px 0 5px -4px #000000;
	    }
	    div#soldes.hidden-xs.card.ed-card.px-3.pb-3.ng-star-inserted {
	        background: #1e1e1e;
	        border: 0px;
	        border-radius: 15px;
	    }
	    #footer[_ngcontent-qqa-c165] ul[_ngcontent-qqa-c165] li[_ngcontent-qqa-c165] a[_ngcontent-qqa-c165] {
	        background: #1e1e1e!important;
	    }
        `);
    } else if (url.includes("https://www.ecoledirecte.com/Compte")) {
        /* -------------- */
        /* Add Custom CSS */
        /* -------------- */
	// alert("Famille");
        Add_Custom_Style(`
	    .ed-menu-parent .ed-menu:not(.active) .ed-menu-image-wrapper>div:after {
	        background: transparent!important;
	    }
	    h4 {
		background: #1e1e1e!important;
	    }
	    div.ng-star-inserted {
		color: white;
	    }
	    .cloud .btn-breadcrumb .btn.btn-link {
		background: #2d2d2d;
		border-radius: 15px
	    }
	    .dhx_cal_tab.active {
		background: #1e1e1e;
		border: 0;
		box-shadow: 0 0 5px black;
	    }
	    div#view-week.dhx_cal_tab.dhx_cal_tab_first.week_tab {
		background: #2d2d2d;
		border: 0;
		box-shadow: 0 0 5px black;
		color: white;
	    }
	    .dhx_cal_tab.active {
		background: #1e1e1e!important;
		border: 0!important;
		box-shadow: 0 0 5px blackimportant;
	    }
	    div#view-month.dhx_cal_tab.dhx_cal_tab_last.month_tab {
		background: #2d2d2d;
		border: 0;
		box-shadow: 0 0 5px black;
		color: white;
	    }
	    .dhx_cal_navline .dhx_cal_weekNumber {
		color: white;
	    }
	    .eleve-note .table.relevemoyenne>tbody>tr.groupematiere>td {
		background: #2d2d2d;
	    }
	    .table.ed-table thead tr th:not(.no-style) {
		background: #2d2d2d;
	    }
	    .nav.nav-pills li a {
		background: #2d2d2d;
	    }
  	    div.dhx_cal_next_button {
		background: #2d2d2d!important;
		color: white;
		border: 0;
		box-shadow: 0 0 5px black;
	    }
	    div.dhx_cal_prev_button {
		background: #2d2d2d!important;
		color: white;
		border: 0;
		box-shadow: 0 0 5px black;
	    }
	    div#view-today.dhx_cal_today_button {
		background: #2d2d2d;
		color: white;
		border: 0;
		box-shadow: 0 0 5px black;
	    }
	    tr.ng-star-inserted {
		color: white;
	    }
	    button {
		background: transparent;
	    }
	    .row.compteurs-vs[_ngcontent-wst-c329] button[_ngcontent-wst-c329] {
		background: transparent;
	    }
	    div.card.text-center.viescolaire.absence {
		border-radius: 15px;
	    }	     
	    .dhx_cal_navline .dhx_cal_date {
		color: white;
	    }
	    .nav-tabs>li button>i:hover {
		background: transparent!important;
	    }
	    .nav-tabs>li.active:after {
		background-color: #2d2d2d;
	    }
	    a.nav-link.active {
		color: white!important;
		background: #1e1e1e!important;
	    }
	    ul.nav.nav-tabs {
		border-bottom: transparent;
	    }
	    tr.text-warning.ng-star-inserted {
		color: white!important;
	    }
	    td.ng-star-inserted {
		color: white;
	    }
	    div.resume {
		background: #1e1e1e!important;
	    }
	    div.resume {
		border-radius: 15px;
	    }
	    span.badge.alert-danger.ng-star-inserted {
		background: #5a5b5b;
		color: #c6e6e6;
	    }
	    .modal-content .footer {
		border-radius: 0 0 15px 15px;
	    }
	    div.card.ng-star-inserted {
		background: #2d2d2d;
		border-radius: 15px;
	    }
	    .bs-datepicker {
		border-radius: 15px;
	        box-shadow: 0 0 10px #000;
	    }
	    #encart-notes .note {
		color: white;
	    }
	    #encart-notes table .relevemoyenne {
		color: white;
	    }
	    #encart-notes table .coef {
		color: white;
	    }
	    #encart-notes table .discipline {
		color: white;
	    }
	    .text-danger {
		color: #cf6679!important;
	    }
	    .active .overlay {
		background: linear-gradient(rgba(13,79,147,0),rgb(141 64 250))
	    }
	    div.bs-datepicker-head {
		border-radius: 15px 15px 0 0;
	    }
	    .bs-datepicker-body {
		border-radius: 0 0 15px 15px!important;
	    }
	    button.btn.btn-primary-color.border.border-0.nav-link {
		background: #2d2d2d;
	    }
	    ul.cdt-eleve-onglets.nav.nav-tabs.flex-column.align-items-center {
		border-bottom: transparent;
	    }
	    .btn-secondary.active {
		background: #2d2d2d!important;
	    }
	    .btn-secondary {
		background: #1e1e1e;
		border: 0px;
	    }
	    .footer {
		background: #2d2d2d!important;
		border-radius: 0px 0px 15px 15px;
	    }
	    button.btn.btn-primary.border.border-0.nav-link {
		background: #2d2d2d;
	    }
	    #cdtnavigation-action .list-group-item:first-child {
		border-top: 1px solid #e6e6e6;
	    }
	    #cdtnavigation-action .list-group-item {
		color: #e6e6e6;
		border-bottom: 1px solid #e6e6e6;
	    }
	    .ed-card.with-epingle {
		border-radius: 15px;
		box-shadow: 0 0 10px black;
		background: #2d2d2d!important;
		border: 0px;
		color: #e6e6e6;
	    }
	    .ed-card>.card-header {
		border-radius: 15px 15px 0px 0px !important;
		background: #1e1e1e;
	    }
	    h3.all-devoirs {
		color: #e6e6e6;
	    }
	    div.col-lg-4.cdtnavigation.d-print-none {
	        border-radius: 15px;
		background: #2d2d2d!important;
		box-shadow: 0 0 15px black;
	    }
	    .container-bg {
	        border: 0px;
	        border-radius: 15px;
	        background: #1e1e1e;
	        box-shadow: 0 0 15px black;
		color: #e6e6e6;
	    }
	    .form-check.radio-custom-ed .btn {
	        color: #e6e6e6;
	    }
	    button[_ngcontent-hol-c178]:not(#show-password):not(.btn-link) {
	        align-items: center!important;
	      	background-image: linear-gradient(144deg,#AF40FF, #5B42F3 50%,#00DDEB)!important;
  	      	border: 0!important;
             	border-radius: 8px!important;
              	box-shadow: rgba(151, 65, 252, 0.2) 0 15px 30px -5px!important;
              	box-sizing: border-box!important;
	      	color: #e6e6e6!important;
	      	display: flex!important;
	      	font-family: Phantomsans, sans-serif!important;
	      	font-size: 20px;
	      	justify-content: center!important;
	      	line-height: 1em!important;
	      	max-width: 100%!important;
	      	min-width: 140px!important;
	      	padding: 3px!important;
	      	text-decoration: none!important;
	      	user-select: none!important;
	      	-webkit-user-select: none!important;
	      	touch-action: manipulation!important;
	      	white-space: nowrap!important;
	      	cursor: pointer!important;
	      	height: 30px!important;
	    }
	    .modal-content {
	        background: #121212!important;
	    }
	    .ed-menu-parent .ed-menu:not(.active) .ed-menu-image-wrapper>div:after {
	        background: transparent!important;
	    }
	    #container-menu {
	        background: linear-gradient(144deg,#AF40FF, #5B42F3 50%,#00DDEB)!important;
	    }
	    div.ed-menu {
	        background: linear-gradient(144deg,#AF40FF, #5B42F3 50%,#00DDEB)!important;
	    }
            div.container-principal {
	        background: #121212;
	    }
	    nav.navbar.navbar-expand-lg.navbar-light.double-padding {
	        background: #1e1e1e!important;
	    }
	    div#nom-etb {
	        color: #e6e6e6;
	    }
	    a#user-account-link.nav-link.text-famille {
	      	align-items: center!important;
	      	background-image: linear-gradient(144deg,#AF40FF, #5B42F3 50%,#00DDEB)!important;
  	      	border: 0!important;
             	border-radius: 8px!important;
              	box-shadow: rgba(151, 65, 252, 0.2) 0 15px 30px -5px!important;
              	box-sizing: border-box!important;
	      	color: #e6e6e6!important;
	      	display: flex!important;
	      	font-family: Phantomsans, sans-serif!important;
	      	font-size: 20px;
	      	justify-content: center!important;
	      	line-height: 1em!important;
	      	max-width: 100%!important;
	      	min-width: 140px!important;
	      	padding: 3px!important;
	      	text-decoration: none!important;
	      	user-select: none!important;
	      	-webkit-user-select: none!important;
	      	touch-action: manipulation!important;
	      	white-space: nowrap!important;
	      	cursor: pointer!important;
	      	height: 30px!important;
	    }
	    .page-accueil .padding-home {
	        color: #e6e6e6;
	    }
	    a.ng-star-inserted {
	        color: #e6e6e6;
	    }
	    .page-accueil .accueiluserauth .separator {
	        box-shadow: -5px 0 5px -4px #000000;
	    }
	    div#soldes.hidden-xs.card.ed-card.px-3.pb-3.ng-star-inserted {
	        background: #1e1e1e;
	        border: 0px;
	        border-radius: 15px;
	    }
	    #footer[_ngcontent-qqa-c165] ul[_ngcontent-qqa-c165] li[_ngcontent-qqa-c165] a[_ngcontent-qqa-c165] {
	        background: #1e1e1e!important;
	    }
        `);
    } if (url.includes("https://www.ecoledirecte.com/login?cameFrom=%2FFamille")) {
        /* -------------- */
        /* Add Custom CSS */
        /* -------------- */
	// alert("Accueil");
        Add_Custom_Style(`
        div.container-principal {
	    background: url("https://4kwallpapers.com/images/walls/thumbs_3t/12661.jpg");
	    background-repeat: no-repeat;
	    background-size: cover;
	}
	div.col-lg-4.col-md-5.login-container {
	    padding: 0px 80px 80px 80px !important;
	}
	div.col-lg-8.col-md-7.info-container {
	    background: transparent;
	}
	a:link, button.btn.btn-link:link, .link:link {
	    color: #e6e6e6;
	}
	div.modal-body {
	    color: #e6e6e6;
	}
	h3.modal-title {
	    color: #e6e6e6;
	}
	.modal-content {
	    background-color: #1e1e1e;
	}
	.form-check-input {
	    background-color: #1e1e1e;
	}
	.login-container[_ngcontent-pgv-c176] header[_ngcontent-pgv-c176] h1[_ngcontent-pgv-c176] {
	    color: #e6e6e6;
	}
	button#pb-connexion.btn.btn-link {
	    background: #1e1e1e;
	    border-radius: 0px 0px 10px 10px;
	    color: #e6e6e6;
	}
	div#item-mentions {
	    color: #e6e6e6;
	}
	label.form-check-label {
	    color: #e6e6e6;
	}
	input#seSouvenirDeMoi.form-check-input.ng-untouched.ng-pristine.ng-valid {
	    background: #1e1e1e;
	}
        .col-lg-4.col-md-5.login-container {
            background: #121212!important;
        }
	.text-center {
	    color: #e6e6e6;
	}
	input#username.log.form-control.ng-pristine.ng-valid.ng-touched {
	    background: #1e1e1e;
	    border: 0px;
	    border-radius: 4px;
	}
	input#password.log.form-control.ng-pristine.ng-valid.ng-touched {
	    background: #1e1e1e;
	    border: 0px;
	    border-radius: 4px;	    
	}
	button#connexion.btn.btn-info.login {
	      align-items: center;
	      background-image: linear-gradient(144deg,#AF40FF, #5B42F3 50%,#00DDEB);
  	      border: 0;
              border-radius: 8px;
              box-shadow: rgba(151, 65, 252, 0.2) 0 15px 30px -5px;
              box-sizing: border-box;
	      color: #e6e6e6;
	      display: flex;
	      font-family: Phantomsans, sans-serif;
	      font-size: 20px;
	      justify-content: center;
	      line-height: 1em;
	      max-width: 100%;
	      min-width: 140px;
	      padding: 3px;
	      text-decoration: none;
	      user-select: none;
	      -webkit-user-select: none;
	      touch-action: manipulation;
	      white-space: nowrap;
	      cursor: pointer;
	      height: 50px;
	    }

	    .button-64:active,
	    .button-64:hover {
	      outline: 0;
	    }

	    .button-64 span {
	      background-color: rgb(5, 6, 45);
	      padding: 16px 24px;
	      border-radius: 6px;
	      width: 100%;
	      height: 100%;
	      transition: 300ms;
	    }

	    .button-64:hover span {
	      background: none;
	    }

	    @media (min-width: 768px) {
	      .button-64 {
  	      font-size: 24px;
	        min-width: 196px;
	      }
	    }
	}
        `);
    }


    // Ajoutez plus de conditions pour d'autres URL si nécessaire
}

// Définissez l'intervalle de vérification toutes les 2 secondes (ajustez selon vos besoins)
const interval = setInterval(checkAndApplyChanges, 100);

// Arrêtez l'intervalle si nécessaire (par exemple, lorsque l'extension est désactivée)
// clearInterval(interval);



