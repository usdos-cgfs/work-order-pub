(()=>{var ua=Object.defineProperty;var Ti=(s,e)=>{for(var t in e)ua(s,t,{get:e[t],enumerable:!0})};var pa=String.raw,xi=pa`
<div>
  <style>
    .search-group {
      display: none;
    }
    /* Testing Style HTML Elements */
    .elements-container {
      display: flex;
      column-gap: 20px;
    }
    .select-container {
      width: 150px;
    }

    /* Actual Elements */

    div.search-group {
      display: revert;
      position: relative;
      min-height: 1rem;
    }

    .search-input-group {
      display: flex;
      align-items: center;
      background-color: white;
      border: 1px solid lightgray;
      box-sizing: content-box;
      height: 1rem;
      padding: 1px 0px;
    }

    .search-input-group input {
      border: none;
      width: 100%;
      height: 1rem;
    }

    /* .caret {
      content: "";
      display: inline-block;
      border: 4px solid transparent;
      border-top-color: transparent;
      border-top-color: black;
      margin-left: 12px;
      margin-top: 4px;
    } */

    .caret-bg {
      background-image: url("#svg-caret-down");
      background-repeat: no-repeat;
      min-width: 1rem;
    }

    .search-input-group::after {
      aspect-ratio: 1 / 1;
      height: 1rem;
      content: "\276F";
      color: darkgray;
      font-size: 0.7rem;
      font-weight: bold;
      text-align: center;
      display: flex;
      justify-content: center;
      transition: transform 0.4s ease-in-out;
    }

    .search-group.active .search-input-group::after {
      transform: rotate(90deg);
    }

    .search-input-group .vertical-spacer {
      height: 85%;
      min-height: 0.8rem;
      border-left: 1px solid lightGray;
    }
    .search-input-group svg {
      color: lightGray;
      height: 85%;
      transition-duration: 0.5s;
    }

    .search-group.active .search-input-group svg {
      border: none;
      transform: rotate(180deg);
    }

    .hidden {
      display: none;
    }

    .secondary {
      font-style: italic;
    }

    .test-toggle {
      background-color: green;
    }

    .selected.item {
      display: flex;
      align-items: center;
      width: fit-content;
      color: #212529;
      font-weight: normal;
      font-size: 0.875rem;
      background-color: #f8f9fa;
      border-radius: 0.25rem;
      border: 1px solid #dee2e6;
      /* height: 1.5rem; */
      /* top right bottom left */
      /* padding: 0.1rem 0rem 0.1rem 0.5rem; */
      padding-left: 0.75rem;
      margin-bottom: 1px;
    }

    .selected.item div.remove {
      /* border-style: none;
  border-radius: 50%; */
      border-top-right-radius: 0.25rem;
      border-bottom-right-radius: 0.25rem;
      margin-left: 0.4rem;
      display: flex;
      align-items: center;
      justify-content: center;
      height: 100%;
      width: 1.5rem;
      color: rgb(108, 117, 125);
      aspect-ratio: 1/1;
    }

    .selected.item div.remove:hover {
      background-color: darkgrey;
      color: white;
    }

    .selected.item div.remove svg {
      height: 1.25rem;
      width: 1.25rem;
    }

    .filtered.item {
      background-color: white;
      padding: 0.1rem 1rem;
      font-weight: normal;
    }

    .filtered.item.even {
      background-color: rgb(233, 233, 233);
    }

    .filtered.item:hover {
      background-color: lightgray;
    }

    .filtered.item.active {
      background-color: lightblue;
    }

    #selected-items-text {
      display: flex;
      flex-wrap: wrap;
    }

    .filtered-items {
      list-style: none;
      padding-left: 0;
      margin-top: 3px;
      /* display: none; */
      position: absolute;
      min-width: 100%;
      max-height: 0px;
      overflow-y: auto;
      z-index: 1;
      border: 0px solid lightgray;
      box-sizing: border-box;
      transition: all 0.4s ease-in-out;
    }

    .filtered-items.active {
      /* display: block; */
      max-height: 200px;
      border: 1px solid lightgray;
    }
  </style>
  <div id="search-group" class="search-group" tabindex="-1">
    <div id="selected-items-text"></div>
    <div class="search-input-group" tabindex="-1">
      <input
        id="search-input"
        class="search-input"
        type="text"
        autocomplete="off"
      />
      <div class="vertical-spacer"></div>
    </div>
    <ul id="filtered-items-text" class="filtered-items"></ul>
  </div>
  <div id="icons" class="hidden" style="display: none">
    <div id="icon-close" style="display: none">
      <svg
        class="position-absolute top-50 start-50 translate-middle"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M6 18L18 6M6 6l12 12"
        ></path>
      </svg>
    </div>
    <div id="icon-caret-down">
      <svg
        id="svg-caret-down"
        width="24px"
        height="24px"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M6.1018 8C5.02785 8 4.45387 9.2649 5.16108 10.0731L10.6829 16.3838C11.3801 17.1806 12.6197 17.1806 13.3169 16.3838L18.8388 10.0731C19.5459 9.2649 18.972 8 17.898 8H6.1018Z"
          fill="#212121"
        />
      </svg>
    </div>
  </div>
</div>
`;customElements.define("search-select",class extends HTMLElement{constructor(){super();let s=xi;this.selectableItems=[],this.attachShadow({mode:"open"}),this.shadowRoot.innerHTML=s,this.searchGroupElement=this.shadowRoot.getElementById("search-group"),this.searchInputGroupElement=this.shadowRoot.querySelector(".search-input-group"),this.searchInputElement=this.shadowRoot.getElementById("search-input"),this.filteredItemsElement=this.shadowRoot.getElementById("filtered-items-text"),this.selectedItemsElement=this.shadowRoot.getElementById("selected-items-text"),this.options=this.querySelectorAll("option")}initializeFilteredItems=()=>{this.options=this.querySelectorAll("option"),this.filteredItemDivs=[...this.options].map((s,e)=>{let t=document.createElement("li");return t.classList.add("filtered","item"),t.classList.toggle("even",e%2),t.innerHTML=s.innerHTML,t.dataset.value=s.value,t}),this.filteredItemsElement.replaceChildren(...this.filteredItemDivs),this.updateFilteredItems(),this.updateSelectedItems(!0)};updateFilteredItems=()=>{let s=this.searchInputElement.value;this.filteredItemDivs.forEach(t=>{let i=t.innerText.toLowerCase().search(s.toLowerCase())>=0,o=!s||i;t.classList.toggle("hidden",!o)}),[...this.options].filter(t=>t.hasAttribute("selected")).map(t=>{this.filteredItemDivs.find(i=>i.dataset.value===t.value).classList.add("hidden")});var e=[...this.filteredItemsElement.querySelectorAll("li:not(.hidden)")].map((t,i)=>t.classList.toggle("even",i%2))};updateActiveFilteredItem=s=>{if(!this.filteredItemDivs.find(a=>!a.classList.contains("hidden")))return;let t=this.filteredItemDivs.findIndex(a=>a.classList.contains("active")),i=t+s,o;do i>=this.filteredItemDivs.length&&(i=0),o=this.filteredItemDivs.at(i),i+=s;while(o.classList.contains("hidden"));o.classList.add("active"),t>=0&&this.filteredItemDivs[t].classList.remove("active")};selectActiveFilteredItem=()=>{let s=this.filteredItemDivs.find(e=>e.classList.contains("active"));s&&(this.selectFilteredItem(s),this.updateActiveFilteredItem(1))};updateSelectedItems=(s=!1)=>{this.selectedOptions=[...this.options].filter(i=>i.hasAttribute("selected"));let e=this.shadowRoot.getElementById("icon-close").innerHTML,t=this.selectedOptions.map(i=>{let o=document.createElement("div");o.classList.add("selected","item"),o.dataset.value=i.value;let a=document.createElement("div");a.innerText=i.innerHTML;let d=document.createElement("div");return d.classList.add("remove"),d.innerHTML=e,o.appendChild(a),o.appendChild(d),o});this.selectedItemsElement.replaceChildren(...t),s||this.dispatchEvent(new Event("change"))};selectFilteredItem=s=>{[...this.options].find(e=>e.value===s.dataset.value).setAttribute("selected",""),this.updateSelectedItems(),this.updateFilteredItems()};removeSelectedItem=s=>{[...this.options].find(e=>e.value===s.dataset.value).removeAttribute("selected"),this.updateSelectedItems(),this.updateFilteredItems()};connectedCallback(){this.filteredItemsElement.classList.toggle("active",!1),this.initializeFilteredItems(),this.searchGroupElement.addEventListener("focusin",e=>{this.filteredItemsElement.classList.toggle("active",!0),this.searchGroupElement.classList.toggle("active",!0),clearTimeout(this.focusOutTimeout)}),this.searchGroupElement.addEventListener("focusout",e=>{this.focusOutTimeout=setTimeout(()=>{this.filteredItemsElement.classList.remove("active"),this.searchGroupElement.classList.remove("active")},0)}),this.searchInputElement.addEventListener("input",e=>{this.updateFilteredItems()}),this.searchInputElement.addEventListener("focusout",e=>{}),this.searchGroupElement.addEventListener("keydown",e=>{switch(e.code){case"Tab":this.filteredItemsElement.classList.remove("active");break;case"ArrowDown":this.updateActiveFilteredItem(1);break;case"ArrowUp":this.updateActiveFilteredItem(-1);break;case"Enter":this.handlingClick=!0,this.selectActiveFilteredItem();break;default:}}),this.filteredItemsElement.addEventListener("click",e=>{this.selectFilteredItem(e.target)}),this.selectedItemsElement.addEventListener("click",e=>{this.removeSelectedItem(e.target.closest("div.item"))});let s=(e,t)=>{for(let i of e)i.type==="childList"&&this.initializeFilteredItems()};this.mutationObserver=new MutationObserver(s),this.mutationObserver.observe(this,{childList:!0})}disconnectedCallback(){try{this.mutationObserver.disconnect()}catch{console.warn("cannot remove event listeners")}}});var ki=`<div\r
  style="display: none"\r
  data-bind="visible: BlockingTasks().length"\r
  class="position-fixed w-100 vh-100 top-0 start-0 active dimmer"\r
>\r
  <div\r
    class="d-flex flex-column justify-content-center w-100 h-100 align-items-center text-light"\r
  >\r
    <div class="spinner-border" role="status">\r
      <span class="visually-hidden">Loading...</span>\r
    </div>\r
    <ul class="list-unstyled" data-bind="foreach: BlockingTasks">\r
      <li data-bind="text: msg + '... ' + Status()"></li>\r
    </ul>\r
  </div>\r
</div>\r
\r
<div\r
  style="display: none; z-index: 1201"\r
  data-bind="visible: RunningTasks().length"\r
  class="position-fixed w-100 vh-100 top-0 start-0 pe-none"\r
>\r
  <div class="toast-container p-3 bottom-0 end-0">\r
    <div\r
      class="toast show align-items-center"\r
      role="alert"\r
      aria-live="assertive"\r
      aria-atomic="true"\r
    >\r
      <div class="d-flex">\r
        <div class="toast-body">\r
          <!-- ko foreach: RunningTasks -->\r
          <div data-bind="text: \`\${msg}... \${Status()}\`"></div>\r
          <!-- /ko -->\r
        </div>\r
        <button\r
          type="button"\r
          class="btn-close me-1 m-auto"\r
          data-bs-dismiss="toast"\r
          aria-label="Close"\r
        ></button>\r
      </div>\r
    </div>\r
  </div>\r
</div>\r
\r
<div class="container" data-bind="hidden: HasLoaded">\r
  <div class="d-flex flex-column align-items-center">\r
    <progress class="w-75 mb-3"></progress>\r
    <div class="w-75 alert alert-warning text-center">\r
      If the url you are viewing begins with\r
      <span class="fw-semibold text-body-secondary"\r
        >https://usdos.sharepoint.com<b>.mcas.ms</b></span\r
      >\r
      please copy and paste the following link into your browser:\r
      <div id="ms-mcas-bypass" class="input-group w-100">\r
        <input id="ms-mcas-bypass-link" class="form-control" disabled />\r
        <button\r
          id="ms-mcas-bypass-copy"\r
          type="button"\r
          class="btn btn-secondary"\r
        >\r
          copy\r
        </button>\r
      </div>\r
    </div>\r
  </div>\r
</div>\r
\r
<script>\r
  {\r
    let loc = window.location;\r
\r
    const link = loc.href.replace(".mcas.ms", "");\r
\r
    let cpyLink = document.getElementById("ms-mcas-bypass-link");\r
    cpyLink.value = link;\r
\r
    let cpybtn = document.getElementById("ms-mcas-bypass-copy");\r
    cpybtn.addEventListener("click", (e, element) => {\r
      debugger;\r
      try {\r
        navigator.clipboard.writeText(link);\r
        e.target.innerText = "copied";\r
        e.target.classList.remove("btn-secondary");\r
        e.target.classList.add("btn-success");\r
      } catch (e) {\r
        alert("Copy failed, please select text and copy using CTRL+V");\r
      }\r
    });\r
\r
    // a.click();\r
  }\r
<\/script>\r
\r
<div id="app" class="wo" style="display: none" data-bind="visible: HasLoaded">\r
  <div\r
    data-bind="component: {name: 'quick-info', \r
    params: { ShowActionOfficeFeatures, ToggleActionOfficeFeatures }}"\r
  ></div>\r
  <div class="d-flex justify-content-between">\r
    <div>\r
      <ul class="nav flex-column me-4" id="section-tabs" role="tablist">\r
        <!-- ko if: ShowActionOfficeFeatures -->\r
        <li class="nav-item" role="presentation">\r
          <button\r
            class="nav-link"\r
            id="office-requests-tab"\r
            data-bs-toggle="tab"\r
            data-bs-target="#office-requests"\r
            data-bind="click: TabClicked"\r
            type="button"\r
            role="tab"\r
            aria-controls="office-requests"\r
            aria-selected="true"\r
          >\r
            Team Requests\r
          </button>\r
        </li>\r
        <!-- /ko -->\r
        <li class="nav-item" role="presentation">\r
          <button\r
            class="nav-link"\r
            id="my-requests-tab"\r
            data-bs-toggle="tab"\r
            data-bs-target="#my-requests"\r
            data-bind="click: TabClicked"\r
            type="button"\r
            role="tab"\r
            aria-controls="my-requests"\r
            aria-selected="true"\r
          >\r
            My Requests\r
          </button>\r
        </li>\r
        <!-- ko if: false -->\r
        <li class="nav-item" role="presentation">\r
          <button\r
            class="nav-link position-relative"\r
            id="my-assignments-tab"\r
            data-bs-toggle="tab"\r
            data-bs-target="#my-assignments"\r
            data-bind="click: TabClicked"\r
            type="button"\r
            role="tab"\r
            aria-controls="my-assignments"\r
            aria-selected="true"\r
          >\r
            My Assignments\r
            <span\r
              class="badge text-bg-danger"\r
              data-bind="visible: MyActiveAssignments().length, text: MyActiveAssignments().length"\r
            ></span>\r
          </button>\r
        </li>\r
        <!-- /ko -->\r
        <li class="nav-item" role="presentation">\r
          <button\r
            class="nav-link"\r
            id="new-request-tab"\r
            data-bs-toggle="tab"\r
            data-bs-target="#new-request"\r
            data-bind="click: TabClicked"\r
            type="button"\r
            role="tab"\r
            aria-controls="new-request"\r
            aria-selected="true"\r
          >\r
            New Request\r
          </button>\r
        </li>\r
        <li class="nav-item" role="presentation">\r
          <button\r
            class="nav-link"\r
            id="request-detail-tab"\r
            data-bs-toggle="tab"\r
            data-bs-target="#request-detail"\r
            data-bind="click: TabClicked"\r
            type="button"\r
            role="tab"\r
            aria-controls="request-detail"\r
            aria-selected="false"\r
          >\r
            Detail View\r
          </button>\r
        </li>\r
      </ul>\r
    </div>\r
    <div class="tab-content flex-grow-1">\r
      <!-- ko if: ShowActionOfficeFeatures -->\r
      <div\r
        class="tab-pane"\r
        role="tabpanel"\r
        aria-labelledby="office-requests-tab"\r
        id="office-requests"\r
      >\r
        <div\r
          data-bind="template: {name: 'tmpl-office-requests-view', data: OfficeRequestsView}"\r
        ></div>\r
      </div>\r
      <!-- /ko -->\r
      <div\r
        class="tab-pane"\r
        role="tabpanel"\r
        aria-labelledby="my-requests-tab"\r
        id="my-requests"\r
      >\r
        <div\r
          data-bind="template: {name: 'tmpl-my-requests-view', data: MyRequestsView}"\r
        ></div>\r
      </div>\r
      <!-- ko if: false -->\r
      <div\r
        class="tab-pane"\r
        role="tabpanel"\r
        aria-labelledby="my-assignments-tab"\r
        id="my-assignments"\r
      >\r
        <div\r
          data-bind="template: {name: 'tmpl-my-assignments-view', data: MyAssignmentsView}"\r
        ></div>\r
      </div>\r
      <!-- /ko -->\r
      <div\r
        class="tab-pane"\r
        role="tabpanel"\r
        aria-labelledby="new-request"\r
        id="new-request"\r
      >\r
        <div\r
          data-bind="template: {name: 'tmpl-new-request-view', data: NewRequestView}"\r
        ></div>\r
      </div>\r
      <div\r
        id="request-detail"\r
        class="tab-pane"\r
        role="tabpanel"\r
        aria-labelledby="request-detail-tab"\r
        data-bind=""\r
      >\r
        <!-- ko ifnot: RequestDetailView.Request -->\r
        <div class="">\r
          <h2>Service Request Detail</h2>\r
          <div>Please create a new request, or open an existing request.</div>\r
        </div>\r
        <!-- /ko -->\r
        <!-- ko if: RequestDetailView.Request -->\r
        <div\r
          data-bind="template: {name: 'tmpl-request-detail', data: RequestDetailView}"\r
        ></div>\r
        <!-- /ko -->\r
      </div>\r
    </div>\r
  </div>\r
  <div id="service-type-templates"></div>\r
\r
  <div id="tmpl-views">\r
    <script type="text/html" id="tmpl-office-requests-view">\r
      <h2>Team Requests</h2>\r
      <div class="card bg-white">\r
        <div class="card-body">\r
          <div class="mb-3 d-flex">\r
            <div\r
              class="request-status-options me-3"\r
              id="section-office-requests-tabs"\r
              data-bind="foreach: StatusOptions"\r
            >\r
              <button\r
                class="text-nowrap"\r
                type="button"\r
                data-bind="text: $data,\r
              css: {'active': $parent.ActiveKey() == $data },\r
              click: ()=> $parent.ActiveKey($data)"\r
              ></button>\r
            </div>\r
            <button\r
              type="button"\r
              class="btn btn-outline-primary"\r
              data-bind="css: {'active': ActiveKey() == byServiceTypeKey },\r
            click: ()=> ActiveKey(byServiceTypeKey)"\r
            >\r
              By Service Type\r
            </button>\r
          </div>\r
          <div class="flex-grow-1">\r
            <div\r
              data-bind="component: {name: ActiveTableComponentName, params: ActiveTableParams}"\r
            ></div>\r
          </div>\r
        </div>\r
      </div>\r
    <\/script>\r
\r
    <script type="text/html" id="tmpl-my-requests-view">\r
      <h2>My Requests</h2>\r
      <div class="card bg-white">\r
        <div class="card-body">\r
          <div class="mb-3 d-flex">\r
            <div\r
              class="request-status-options me-3"\r
              id="section-my-requests-tabs"\r
              data-bind="foreach: StatusOptions"\r
            >\r
              <button\r
                class="text-nowrap"\r
                type="button"\r
                data-bind="text: $data,\r
              css: {'active': $parent.ActiveKey() == $data },\r
              click: ()=> $parent.ActiveKey($data)"\r
              ></button>\r
            </div>\r
            <button\r
              type="button"\r
              class="btn btn-outline-primary"\r
              data-bind="css: {'active': ActiveKey() == 'By Service Type' },\r
              click: ()=> ActiveKey('By Service Type')"\r
            >\r
              By Service Type\r
            </button>\r
          </div>\r
          <div class="flex-grow-1">\r
            <div\r
              data-bind="component: {name: ActiveTableComponentName, params: ActiveTableParams}"\r
            ></div>\r
          </div>\r
        </div>\r
      </div>\r
    <\/script>\r
\r
    <script type="text/html" id="tmpl-my-assignments-view">\r
      <h2>My Open Assignments</h2>\r
      <!-- ko if: IsLoading -->\r
      <progress class="w-100"></progress>\r
      <!-- /ko -->\r
      <!-- ko ifnot: IsLoading -->\r
      <my-assignments-table></my-assignments-table>\r
      <!-- /ko -->\r
    <\/script>\r
\r
    <script type="text/html" id="tmpl-new-request-view">\r
      <h2>Select the type of request you would like to open:</h2>\r
      <div id="new-request-container">\r
        <div\r
          class="card new-request-ops-container"\r
          data-bind="css: {'service-selected': SelectedServiceType}"\r
        >\r
          <div class="card-body">\r
            <div\r
              class="new-request-opts"\r
              data-bind="foreach: ActiveServiceTypes"\r
            >\r
              <div\r
                class="card new-request-opt"\r
                data-bind="click: $parent.selectServiceTypeHandler, \r
                css: {'active': $parent.SelectedServiceType()?.ID == ID}, \r
                attr: {title: 'New ' + Title + ' Request'}"\r
              >\r
                <div class="card-body">\r
                  <i class="fa fa-3x" data-bind="class: Icon"></i>\r
                  <h5 class="card-title" data-bind="text: Title"></h5>\r
                </div>\r
              </div>\r
            </div>\r
          </div>\r
        </div>\r
        <div\r
          id="new-request-detail"\r
          class="card"\r
          style="height: fit-content"\r
          data-bind="visible: SelectedServiceType"\r
        >\r
          <div class="card-body" data-bind="">\r
            <!-- ko if: SelectedServiceType -->\r
            <h5\r
              class="card-title"\r
              data-bind="text: SelectedServiceType().Title"\r
            ></h5>\r
            <hr />\r
            <b>Description:</b>\r
            <div\r
              data-bind="html: SelectedServiceType().Description"\r
              class="mb-2"\r
            ></div>\r
            <b>Attachments:</b>\r
            <div\r
              data-bind="html: formatAttachmentDescription()"\r
              class="mb-2"\r
            ></div>\r
            <div class="card-text" class="mb-2">\r
              <p>\r
                Once submitted, this request will be routed to the appropriate\r
                action office.\r
              </p>\r
            </div>\r
            <!-- /ko -->\r
            <div class="d-flex justify-content-end">\r
              <button\r
                type="button"\r
                class="btn btn-secondary me-2"\r
                data-bind="click: cancelCreateServiceType"\r
              >\r
                Cancel\r
              </button>\r
              <button\r
                type="button"\r
                class="btn btn-success"\r
                data-bind="click: confirmCreateServiceType, enable: SelectedServiceType"\r
              >\r
                Create\r
              </button>\r
            </div>\r
          </div>\r
        </div>\r
      </div>\r
    <\/script>\r
\r
    <script type="text/html" id="tmpl-request-detail">\r
      <!-- Report.RequestDetailView -->\r
      <!-- ko if: request.IsLoading -->\r
      <progress class="w-100"></progress>\r
      <!-- /ko -->\r
      <!-- ko ifnot: request.IsLoading -->\r
      <div class="">\r
        <h2>\r
          Service Request Detail:\r
          <span data-bind="text: request.RequestType.Title"></span>\r
        </h2>\r
        <div>\r
          <!-- ko if: request.Validation.WasValidated -->\r
          <!-- ko foreach: request.Validation.Errors.All -->\r
          <div\r
            class="alert alert-danger mb-2"\r
            data-bind="text: description"\r
          ></div>\r
          <!-- /ko -->\r
          <!-- /ko -->\r
          <div class="quick-actions-container">\r
            <div\r
              class=""\r
              data-bind="template: {name: 'tmpl-quick-actions-bar'}"\r
            ></div>\r
          </div>\r
          <div class="request-detail-components">\r
            <div class="">\r
              <div\r
                data-bind="component: {name: 'pipeline-component',\r
              params: {request: request}}"\r
              ></div>\r
            </div>\r
            <!-- ko if: DisplayMode() != DisplayModes.New && $root.Authorization.currentUserIsAdmin()-->\r
\r
            <div\r
              class="my-3"\r
              data-bind="template: {name: 'tmpl-assignments-component', data: request.Assignments}"\r
            ></div>\r
            <!-- /ko -->\r
            <div class="">\r
              <div class="card w-100" data-bind="">\r
                <div class="card-body">\r
                  <h3 class="card-title">Requestor Information</h3>\r
                  <div\r
                    data-bind="component: {name: HeaderComponentName, params: request }"\r
                  ></div>\r
                </div>\r
              </div>\r
            </div>\r
            <div class="card w-100 request-body" data-bind="using: Request">\r
              <div class="card-body">\r
                <div class="card-title d-flex justify-content-between">\r
                  <h3 class="mx-0" data-bind="text: RequestType.Title"></h3>\r
                  <!-- <i class="fa fa-sync pointer" data-bind="click: refreshEntity"></i> -->\r
                </div>\r
                <div class="detail-container">\r
                  <div class="detail">\r
                    <!-- ko if: RequestBodyBlob -->\r
                    <div\r
                      data-bind="component: {\r
                        name: RequestBodyBlob.components[DisplayMode().toLowerCase()],\r
                        params: RequestBodyBlob},\r
                        class: RequestBodyBlob.width"\r
                    ></div>\r
                    <!-- /ko -->\r
                    <div\r
                      class="col-12 pb-6"\r
                      data-bind="component: {name: RequestDescription.components[DisplayMode().toLowerCase()],\r
                        params: RequestDescription}"\r
                    ></div>\r
                  </div>\r
                  <div class="card attachments">\r
                    <div class="card-body d-flex flex-column">\r
                      <div class="d-flex justify-content-between">\r
                        <div>\r
                          <h5 class="">Attachments</h5>\r
                        </div>\r
                        <i\r
                          class="fa fa-sync pointer"\r
                          data-bind="click: Attachments.refresh"\r
                        ></i>\r
                      </div>\r
                      <!-- ko foreach: Attachments.Validation.Errors -->\r
                      <div\r
                        class="alert"\r
                        data-bind="text: description,\r
                        class: $parent.Validation.WasValidated() ? 'alert-danger' : 'alert-warning'"\r
                      ></div>\r
                      <!-- /ko -->\r
                      <!-- ko if: RequestType.AttachmentDescription -->\r
                      <div\r
                        data-bind="html: RequestType.AttachmentDescription"\r
                      ></div>\r
                      <!-- /ko -->\r
                      <!-- ko ifnot: RequestType.AttachmentDescription -->\r
                      <p class="fst-italic">\r
                        No attachment instructions provided.\r
                      </p>\r
                      <!-- /ko -->\r
                      <!-- ko if: Attachments.list.Active().length -->\r
                      <div>\r
                        <table class="table">\r
                          <thead>\r
                            <tr>\r
                              <th>Title</th>\r
                              <th>FileName</th>\r
                              <th>Actions</th>\r
                            </tr>\r
                          </thead>\r
                          <tbody data-bind="">\r
                            <!-- ko if: Attachments.AreLoading -->\r
                            <tr class="">\r
                              <td colspan="4" class="p-0">\r
                                <progress class="w-100"></progress>\r
                              </td>\r
                            </tr>\r
                            <!-- /ko -->\r
                            <!-- ko foreach: Attachments.list.Active -->\r
                            <tr>\r
                              <td>\r
                                <div data-bind="text: Title"></div>\r
                              </td>\r
                              <td>\r
                                <a\r
                                  target="_blank"\r
                                  data-bind="attr: { href: FileRef }, text: FileLeafRef"\r
                                ></a>\r
                              </td>\r
                              <td>\r
                                <i\r
                                  class="fas fa-search pointer"\r
                                  data-bind="click: $parent.Attachments.view"\r
                                ></i>\r
                                <!-- ko if: $parent.Attachments.userCanRemove($data) -->\r
                                <i\r
                                  class="fas fa-trash pointer"\r
                                  data-bind="click: $parent.Attachments.remove"\r
                                ></i>\r
                                <!-- /ko -->\r
                              </td>\r
                            </tr>\r
                            <!-- /ko -->\r
                          </tbody>\r
                        </table>\r
                      </div>\r
                      <!-- /ko -->\r
                      <div\r
                        data-bind="if: Attachments.userCanAttach"\r
                        class="new-attachments"\r
                      >\r
                        <div>\r
                          <label class="file-upload-field">\r
                            <div class="dropzone" data-bind="">\r
                              Drop Files or Click Here\r
                            </div>\r
                            <input\r
                              type="file"\r
                              style="display: none"\r
                              data-bind="files: Attachments.newAttachmentFiles"\r
                            />\r
                          </label>\r
                        </div>\r
                        <div\r
                          data-bind="if: Attachments.newAttachmentFiles().length"\r
                        >\r
                          <!-- Pending:\r
                          <ul\r
                            data-bind="foreach: Attachments.newAttachmentFiles"\r
                          >\r
                            <li>\r
                              <span data-bind="text: name"></span>\r
                              <i\r
                                title="Remove File"\r
                                data-bind="click: $parent.Attachments.removeFile"\r
                                class="fa-solid fa-xmark pointer"\r
                              ></i>\r
                            </li>\r
                          </ul> -->\r
                          <table class="table table-sm">\r
                            <thead>\r
                              <tr>\r
                                <th>Pending Upload</th>\r
                                <th>Action</th>\r
                              </tr>\r
                            </thead>\r
                            <tbody\r
                              data-bind="foreach: Attachments.newAttachmentFiles"\r
                            >\r
                              <tr>\r
                                <td data-bind="text: name"></td>\r
                                <td>\r
                                  <i\r
                                    title="Remove File"\r
                                    data-bind="click: $parent.Attachments.removeFile"\r
                                    class="fa-solid fa-xmark pointer"\r
                                  ></i>\r
                                </td>\r
                              </tr>\r
                            </tbody>\r
                          </table>\r
                        </div>\r
                        <div class="form-actions">\r
                          <button\r
                            type="button"\r
                            class="btn btn-primary"\r
                            data-bind="click: Attachments.addNew, enable: Attachments.newAttachmentFiles().length"\r
                          >\r
                            Upload\r
                          </button>\r
                        </div>\r
                      </div>\r
                    </div>\r
                  </div>\r
                </div>\r
              </div>\r
            </div>\r
            <div class="row">\r
              <!-- ko if: false -->\r
              <div class="col-4" data-bind="using: request">\r
                <div\r
                  class="card"\r
                  data-bind="css: {'border-danger': Validation.WasValidated() && Attachments.Validation.Errors().length}"\r
                >\r
                  <div class="card-body">\r
                    <div class="card-title">\r
                      <h3 class="mx-0">Attachments</h3>\r
                    </div>\r
                    <!-- ko foreach: Attachments.Validation.Errors -->\r
                    <div\r
                      class="alert"\r
                      data-bind="text: description,\r
                      class: $parent.Validation.WasValidated() ? 'alert-danger' : 'alert-warning'"\r
                    ></div>\r
                    <!-- /ko -->\r
                    <div\r
                      data-bind="html: RequestType.AttachmentDescription"\r
                    ></div>\r
                    <div>\r
                      <div class="d-flex justify-content-end">\r
                        <i\r
                          class="fa fa-sync pointer"\r
                          data-bind="click: Attachments.refresh"\r
                        ></i>\r
                      </div>\r
                      <table class="table">\r
                        <thead>\r
                          <tr>\r
                            <th>Title</th>\r
                            <th>FileName</th>\r
                            <th>Actions</th>\r
                          </tr>\r
                        </thead>\r
                        <tbody data-bind="">\r
                          <!-- ko if: Attachments.AreLoading -->\r
                          <tr class="">\r
                            <td colspan="4" class="p-0">\r
                              <progress class="w-100"></progress>\r
                            </td>\r
                          </tr>\r
                          <!-- /ko -->\r
                          <!-- ko foreach: Attachments.list.Active -->\r
                          <tr>\r
                            <td>\r
                              <div data-bind="text: Title"></div>\r
                            </td>\r
                            <td>\r
                              <a\r
                                target="_blank"\r
                                data-bind="attr: { href: FileRef }, text: FileLeafRef"\r
                              ></a>\r
                            </td>\r
                            <td>\r
                              <i\r
                                class="fas fa-search pointer"\r
                                data-bind="click: $parent.Attachments.view"\r
                              ></i>\r
                              <!-- ko if: $parent.Attachments.userCanRemove($data) -->\r
                              <i\r
                                class="fas fa-trash pointer"\r
                                data-bind="click: $parent.Attachments.remove"\r
                              ></i>\r
                              <!-- /ko -->\r
                            </td>\r
                          </tr>\r
                          <!-- /ko -->\r
                        </tbody>\r
                      </table>\r
                      <!-- ko if: Attachments.userCanAttach -->\r
                      <button\r
                        class="btn btn-primary"\r
                        data-bind="click: Attachments.addNew"\r
                      >\r
                        Upload\r
                      </button>\r
                      <!-- /ko -->\r
                    </div>\r
                  </div>\r
                </div>\r
              </div>\r
              <!-- /ko -->\r
              <!-- ko if: DisplayMode() != DisplayModes.New -->\r
              <div class="">\r
                <div class="card w-100" data-bind="using: request">\r
                  <div class="card-body">\r
                    <h3 class="card-title">Comments</h3>\r
                    <div class="alert alert-warning">\r
                      <strong>Note:</strong> Anyone with access to this record\r
                      is able to view all comments.\r
                    </div>\r
                    <div class="d-flex justify-content-end">\r
                      <i\r
                        class="fa fa-sync pointer"\r
                        data-bind="click: Comments.refresh"\r
                      ></i>\r
                    </div>\r
                    <table class="table">\r
                      <thead>\r
                        <tr>\r
                          <th>Created</th>\r
                          <th>Author</th>\r
                          <th>Notification Sent</th>\r
                          <th>Actions</th>\r
                        </tr>\r
                      </thead>\r
                      <tbody data-bind="">\r
                        <!-- ko if: Comments.AreLoading -->\r
                        <tr class="">\r
                          <td colspan="4" class="p-0">\r
                            <progress class="w-100"></progress>\r
                          </td>\r
                        </tr>\r
                        <!-- /ko -->\r
                        <!-- ko foreach: Comments.list.Active -->\r
                        <tr class="table-group-divider">\r
                          <td data-bind="text: Created.toLocaleString()"></td>\r
                          <td data-bind="text: Author.Title"></td>\r
                          <td data-bind="text: NotificationSent"></td>\r
                          <td>\r
                            <!-- ko if: $parent.Comments.userCanComment -->\r
                            <i\r
                              class="fa fa-envelope pointer"\r
                              data-bind="click: $parent.Comments.sendNotification,\r
                          attr: {title: NotificationSent ? 'Re-Send Email Notification' : 'Send Email Notification'}"\r
                            ></i>\r
                            <i\r
                              class="fa fa-trash pointer ms-1"\r
                              title="Remove Comment"\r
                              data-bind="click: $parent.Comments.remove"\r
                            ></i>\r
                            <!-- /ko -->\r
                          </td>\r
                        </tr>\r
                        <tr class="">\r
                          <td\r
                            colspan="4"\r
                            data-bind="html: Comment"\r
                            class="pb-4"\r
                          ></td>\r
                        </tr>\r
                        <!-- /ko -->\r
                      </tbody>\r
                    </table>\r
                    <!-- ko if: Comments.userCanComment -->\r
                    <div data-bind="using: $parent.newComment">\r
                      <div\r
                        class="mb-2"\r
                        data-bind="component: {name: input.components.edit, params: input}"\r
                      ></div>\r
                      <button class="btn btn-primary" data-bind="click: submit">\r
                        Submit Comment\r
                      </button>\r
                    </div>\r
                    <!-- /ko -->\r
                  </div>\r
                </div>\r
              </div>\r
              <!-- /ko -->\r
            </div>\r
            <!-- ko if: DisplayMode() != DisplayModes.New -->\r
            <div\r
              class=""\r
              data-bind="template: {name: 'tmpl-activity-log-component', data: request.Actions}"\r
            ></div>\r
            <!-- /ko -->\r
            <div>\r
              <!-- ko if: DisplayMode() == DisplayModes.New -->\r
              <button\r
                type="button"\r
                class="btn btn-success"\r
                data-bind="click: submitNewRequest, enable: !request.Validation.WasValidated() || request.Validation.IsValid()"\r
              >\r
                Submit Request\r
              </button>\r
              <!-- /ko -->\r
            </div>\r
          </div>\r
        </div>\r
      </div>\r
      <!-- /ko -->\r
      <div\r
        class="modal fade"\r
        id="modal-advance-request"\r
        data-bs-backdrop="static"\r
        data-bs-keyboard="false"\r
      >\r
        <div class="modal-dialog">\r
          <div class="modal-content">\r
            <div class="modal-header">\r
              <h1 class="mx-0 modal-title fs-5" id="staticBackdropLabel">\r
                Confirm Advance\r
              </h1>\r
              <button\r
                type="button"\r
                class="btn-close"\r
                data-bs-dismiss="modal"\r
                aria-label="Close"\r
              ></button>\r
            </div>\r
            <div class="modal-body">\r
              <!-- ko ifnot: request.Assignments.CurrentStage.list.InProgress().length -->\r
              This request is ready to advance.\r
              <!-- /ko -->\r
              <!-- ko if: request.Assignments.CurrentStage.list.InProgress().length -->\r
              This request still has\r
              <span\r
                data-bind="text: request.Assignments.CurrentStage.list.InProgress().length"\r
              ></span>\r
              open assignments.\r
              <table class="table table-sm">\r
                <thead>\r
                  <tr>\r
                    <th>Assignee</th>\r
                    <th>Role</th>\r
                    <th>Stage</th>\r
                  </tr>\r
                </thead>\r
                <tbody\r
                  data-bind="foreach: request.Assignments.CurrentStage.list.InProgress"\r
                >\r
                  <tr>\r
                    <td data-bind="text: Assignee?.Title"></td>\r
                    <td data-bind="text: Role"></td>\r
                    <td data-bind="text: PipelineStage?.Title"></td>\r
                  </tr>\r
                </tbody>\r
              </table>\r
              <!-- /ko -->\r
            </div>\r
            <div class="modal-footer">\r
              <button\r
                type="button"\r
                class="btn btn-secondary"\r
                data-bs-dismiss="modal"\r
              >\r
                Cancel\r
              </button>\r
              <button\r
                type="button"\r
                class="btn btn-primary"\r
                data-bind="click: confirmAdvanceHandler"\r
              >\r
                Advance\r
              </button>\r
            </div>\r
          </div>\r
        </div>\r
      </div>\r
    <\/script>\r
\r
    <script type="text/html" id="tmpl-quick-actions-bar">\r
      <div class="quick-actions-bar card">\r
        <div class="status-container">\r
          <div\r
            class="badge"\r
            data-bind="text: request.State.InternalStatus, \r
            class: request.State.InternalStatusClass, \r
            attr: {title: request.State.InternalStatus}"\r
          ></div>\r
        </div>\r
        <h6 class="">\r
          Request ID <br />\r
          <span data-bind="text: request.ObservableTitle"></span>\r
        </h6>\r
\r
        <h6 class="">\r
          Loaded Date and Time <br />\r
          <span data-bind="text: request.LoadedAt()?.toLocaleString()"></span>\r
        </h6>\r
        <!-- ko if: $root.Authorization.currentUserIsAdmin -->\r
        <a\r
          class=""\r
          target="_blank"\r
          rel="noopener noreferrer"\r
          data-bind="attr: {href: request.getFolderUrl()}"\r
        >\r
          <i class="fa fa-folder" data-bind=""></i\r
        ></a>\r
        <!-- /ko -->\r
        <i\r
          class="fa fa-sync pointer me-3"\r
          title="Refresh this request"\r
          data-bind="click: refreshAll"\r
        ></i>\r
\r
        <div class="actions" role="group">\r
          <!-- ko if: DisplayMode() == DisplayModes.New -->\r
          <button\r
            type="button"\r
            class="btn btn-success ms-3"\r
            data-bind="click: submitNewRequest, enable: !request.Validation.WasValidated() || request.Validation.IsValid()"\r
          >\r
            Submit <span class="fa fa-chevron-right"></span>\r
          </button>\r
          <!-- /ko -->\r
          <!-- ko if: request.Authorization.currentUserCanAdvance -->\r
          <!-- ko if: showPause -->\r
          <div class="dropdown-centered" data-bind="">\r
            <button\r
              type="button"\r
              class="btn btn-secondary toggle-status dropdown-toggle action"\r
              data-bs-toggle="dropdown"\r
              title="Pause Request"\r
            >\r
              <i class="fa-solid fa-pause fa-xl"></i>\r
            </button>\r
            <div class="dropdown-menu p-1">\r
              <label class="">\r
                <input\r
                  placeholder="Reason..."\r
                  class="form-select"\r
                  list="pause-reason-options"\r
                  data-bind="textInput: pauseReason"\r
                />\r
                <datalist\r
                  id="pause-reason-options"\r
                  data-bind="foreach: pauseOptions"\r
                >\r
                  <option\r
                    data-bind="text: value, attr: {value: value}"\r
                  ></option>\r
                </datalist>\r
              </label>\r
              <button\r
                type="button"\r
                class="btn btn-success"\r
                data-bind="click: clickPause, enable: pauseReason"\r
              >\r
                Submit\r
              </button>\r
            </div>\r
          </div>\r
          <!-- /ko -->\r
          <!-- ko if: showResume -->\r
          <button\r
            type="button"\r
            title="Resume Request"\r
            class="btn btn-secondary toggle-status action"\r
            data-bind="click: clickResume"\r
          >\r
            <i class="fa-solid fa-play fa-xl"></i>\r
          </button>\r
          <!-- /ko -->\r
          <!-- ko if: ShowCloseArea  -->\r
          <button\r
            title="Cancel Request"\r
            class="btn btn-danger action"\r
            data-bind="click: promptCancel"\r
          >\r
            <i class="fa-solid fa-ban fa-xl"></i>\r
          </button>\r
          <!-- /ko -->\r
          <!-- ko if: request.Pipeline.getNextStage -->\r
          <button\r
            title="Advance to next stage"\r
            type="button"\r
            class="btn btn-success action"\r
            data-bind="click: nextStageHandler, enable: request.Assignments.CurrentStage.Validation.IsValid"\r
          >\r
            Next Stage <span class="fa fa-chevron-right"></span>\r
          </button>\r
          <button\r
            title="Close Request as Fulfilled"\r
            class="btn btn-success action"\r
            data-bind="click: promptFulfill"\r
          >\r
            <i class="fa-solid fa-angles-right fa-lg"></i>\r
          </button>\r
          <!-- /ko -->\r
          <!-- ko ifnot: request.Pipeline.getNextStage -->\r
          <button\r
            title="Close and finalize"\r
            type="button"\r
            class="btn btn-success action"\r
            data-bind="click: promptClose, enable: request.Assignments.CurrentStage.Validation.IsValid"\r
          >\r
            Close and Finalize\r
          </button>\r
          <!-- /ko -->\r
          <!-- /ko -->\r
        </div>\r
      </div>\r
    <\/script>\r
\r
    <script type="text/html" id="tmpl-request-pipeline-actions">\r
      <!-- ko using: CurrentStage -->\r
      <!-- ko if: AssignmentComponents().length -->\r
      <div class="border border-top-0 rounded-bottom">\r
        <div class="p-3">\r
          <div data-bind="foreach: Validation.Errors">\r
            <div\r
              class="alert alert-warning"\r
              role="alert"\r
              data-bind="text: description"\r
            ></div>\r
          </div>\r
          <div class="">\r
            <!-- ko foreach: AssignmentComponents -->\r
            <div\r
              data-bind="component: {name: actionComponentName, params: $data }"\r
            ></div>\r
            <!-- /ko -->\r
          </div>\r
        </div>\r
      </div>\r
      <!-- /ko -->\r
      <!-- /ko -->\r
    <\/script>\r
\r
    <script type="text/html" id="tmpl-assignments-component">\r
      <div class="card">\r
        <div class="card-body accordion-item">\r
          <div\r
            class="card-title d-flex justify-content-between align-items-center accordion-header"\r
          >\r
            <h3\r
              class="mx-0 px-2 flex-grow-1 pointer accordion-title collapsed d-flex align-items-center justify-content-between"\r
              data-bs-toggle="collapse"\r
              data-bs-target="#routing-body"\r
            >\r
              Routing and Assignment\r
              <i class="indicator fa fa-caret-down"></i>\r
            </h3>\r
          </div>\r
          <div id="routing-body" class="accordion-collapse collapse">\r
            <div class="d-flex justify-content-end align-items-center">\r
              <!-- ko if: $root.Authorization.currentUserIsAdmin -->\r
              <a target="_blank" data-bind="attr: {href: getFolderUrl() }">\r
                <i class="fa fa-folder" data-bind=""></i\r
              ></a>\r
              <button\r
                type="button"\r
                style="min-width: 0;"\r
                class="btn btn-link ms-2 px-0"\r
                data-bind="click: () => createStageAssignments()"\r
              >\r
                <i class="fa-solid fa-arrow-down-up-lock"></i>\r
              </button>\r
              <!-- /ko -->\r
              <i class="fa fa-sync pointer ms-2" data-bind="click: refresh"></i>\r
            </div>\r
            <div class="position-relative">\r
              <table class="table">\r
                <thead>\r
                  <tr>\r
                    <th>Stage</th>\r
                    <th>Assignee</th>\r
                    <th>Request Org</th>\r
                    <th>Role</th>\r
                    <th>Status</th>\r
                    <th>Action</th>\r
                  </tr>\r
                </thead>\r
                <tbody>\r
                  <!-- ko if: AreLoading -->\r
                  <tr class="">\r
                    <td colspan="5" class="p-0">\r
                      <progress class="w-100"></progress>\r
                    </td>\r
                  </tr>\r
                  <!-- /ko -->\r
                  <!-- ko foreach: list.All -->\r
                  <tr>\r
                    <td data-bind="text: PipelineStage?.Title"></td>\r
                    <td data-bind="text: Assignee?.Title"></td>\r
                    <td data-bind="text: RequestOrg?.Title"></td>\r
                    <td data-bind="text: Role"></td>\r
                    <td data-bind="text: Status"></td>\r
                    <td>\r
                      <!-- ko if: $parent.userCanAssign -->\r
                      <i\r
                        class="fas fa-search pointer"\r
                        data-bind="click: $parent.view"\r
                      ></i>\r
                      <i\r
                        class="fa fa-trash pointer"\r
                        data-bind="click: $parent.remove"\r
                      ></i>\r
                      <!-- /ko -->\r
                    </td>\r
                  </tr>\r
                  <!-- /ko -->\r
                </tbody>\r
              </table>\r
            </div>\r
            <!-- ko if: userCanAssign -->\r
            <div\r
              data-bind="component: { name: 'new-assignment', params: {addAssignment: addNew } }"\r
            ></div>\r
            <!-- /ko -->\r
          </div>\r
        </div>\r
      </div>\r
    <\/script>\r
\r
    <script type="text/html" id="tmpl-activity-log-component">\r
      <div>\r
        <button\r
          type="button"\r
          class="btn btn-link"\r
          data-bind="click: showDialog"\r
        >\r
          Approvals and Actions Log\r
        </button>\r
      </div>\r
      <dialog id="dialog-action-log" class="card">\r
        <div class="card-body ">\r
          <div\r
            class="card-title d-flex justify-content-between align-items-center"\r
          >\r
            <div>\r
              <h3>Approvals and Actions Log</h3>\r
            </div>\r
            <div class="d-flex justify-content-end">\r
              <i class="fa fa-sync pointer me-2" data-bind="click: refresh"></i>\r
              <i\r
                class="fa-solid fa-xmark pointer"\r
                data-bind="click: closeDialog"\r
              ></i>\r
            </div>\r
          </div>\r
          <div id="actions-body" class="">\r
            <div>\r
              <table class="table">\r
                <thead>\r
                  <tr>\r
                    <th>Stage</th>\r
                    <th>Action Taker</th>\r
                    <th>Action Type</th>\r
                    <th>Description</th>\r
                    <th>Date</th>\r
                  </tr>\r
                </thead>\r
                <tbody>\r
                  <!-- ko if: AreLoading -->\r
                  <tr class="">\r
                    <td colspan="5" class="p-0">\r
                      <progress class="w-100"></progress>\r
                    </td>\r
                  </tr>\r
                  <!-- /ko -->\r
                  <!-- ko foreach: list.All -->\r
                  <tr>\r
                    <td data-bind="if: PipelineStage">\r
                      <span\r
                        class=""\r
                        data-bind="text: 'Step ' + PipelineStage?.Step + ': ' + PipelineStage?.Title"\r
                      >\r
                      </span>\r
                    </td>\r
                    <td data-bind="text: Author?.Title"></td>\r
                    <td data-bind="text: ActionType"></td>\r
                    <td data-bind="html: Description"></td>\r
                    <td data-bind="text: Created.toLocaleString()"></td>\r
                  </tr>\r
                  <!-- /ko -->\r
                </tbody>\r
              </table>\r
            </div>\r
          </div>\r
          <div class="d-flex justify-content-end">\r
            <button\r
              type="button"\r
              class="btn btn-danger"\r
              data-bind="click: closeDialog"\r
            >\r
              Close\r
            </button>\r
          </div>\r
        </div>\r
      </dialog>\r
    <\/script>\r
  </div>\r
\r
  <div id="tmpl-other">\r
    <!-- <script type="text/html" id="tmpl-activity-toast">\r
      <div\r
        class="toast show"\r
        role="alert"\r
        aria-live="assertive"\r
        aria-atomic="true"\r
      >\r
        <div class="toast-header">\r
          <strong class="me-auto">Bootstrap</strong>\r
          <small class="text-body-secondary">just now</small>\r
          <button\r
            type="button"\r
            class="btn-close"\r
            data-bs-dismiss="toast"\r
            aria-label="Close"\r
          ></button>\r
        </div>\r
        <div class="toast-body" data-bind="text: activity">\r
          See? Just like this.\r
        </div>\r
      </div>\r
    <\/script> -->\r
  </div>\r
</div>\r
`;var jt={};Ti(jt,{ApprovalActions:()=>$e,AssignModule:()=>es,BaseComponent:()=>M,ClosedRequestsTableModule:()=>pi,ConstrainedEntityEditModule:()=>Ae,ConstrainedEntityViewModule:()=>ke,MyAssignmentsModule:()=>fi,NewAssignmentModule:()=>Si,OpenOfficeRequestsTableModule:()=>ui,OpenRequestsTableModule:()=>ci,PendingRequestIngestsModule:()=>ri,PipelineModule:()=>yi,QuickInfoModule:()=>wi,RequestHeaderEditModule:()=>bi,RequestHeaderViewModule:()=>gi,RequestsByServiceTypeModule:()=>mi,RequestsByServiceTypeTableModule:()=>hi,ResolverModule:()=>je,TaskToastModule:()=>Ai,html:()=>T});var Re=class{constructor(e,t,i){this.source=e,this.type=t,this.description=i}};var K=class s{constructor({Id:e,ID:t,Title:i,LoginName:o=null,IsGroup:a=null,IsEnsured:d=!1}){this.ID=t??e,this.Title=i,this.LookupValue=i,this.LoginName=o!=""?o:null,this.IsGroup=a,this.IsEnsured=d}ID=null;Title=null;LoginName=null;LookupValue=null;getKey=()=>this.LoginName??this.Title;static Create=function(e){return!e||!e.ID&&!(e.Title||e.LookupValue)?null:new s({...e,Title:e.Title??e.LookupValue})}};var Kt={ActionOffice:"Action Office",RequestingOffice:"Requesting Office",Department:"Department",Budget:"Budget PMO"},ee=class s{constructor({ID:e,Title:t}){this.ID=e,this.Title=t,this.LookupValue=t}UserGroup;Everyone;FieldMap={UserGroup:{get:()=>this.UserGroup,set:e=>this.UserGroup=K.Create(e)}};static Create=function(e){return e?.ID?ge().find(t=>t.ID==e.ID):null};static FindInStore=function(e){return e?.ID?ge().find(t=>t.ID==e.ID):null};static Views={All:["ID","Title","UserGroup","ContactInfo","OrgType","BreakAccess","PreferredEmail","Everyone"]};static ListDef={name:"ConfigRequestOrgs",title:"ConfigRequestOrgs",fields:s.Views.All}},ge=ko.observableArray([]);var Ge=class{constructor(e){e?.ID&&(this.ID=e.ID),e?.Title&&(this.Title=e.Title)}ObservableID=ko.observable();ObservableTitle=ko.observable();get ID(){return this.ObservableID()}set ID(e){this.ObservableID(e)}get Title(){return this.ObservableTitle()}set Title(e){this.ObservableTitle(e)}};var E={InProgress:"In Progress",Completed:"Completed",Approved:"Approved",Rejected:"Rejected",Cancelled:"Cancelled"},Le={ActionResolver:"Action Resolver",Approver:"Approver",Assigner:"Assigner",Viewer:"Viewer",Subscriber:"Subscriber"},ha={"Action Resolver":"resolver-actions",Approver:"approver-actions",Assigner:"assigner-actions"},At={source:"current-stage-active-assignments",type:"current-stage",description:"Please complete all assignments"},de=class s extends Ge{constructor({ID:e,Title:t,Assignee:i,RequestOrg:o,PipelineStage:a,IsActive:d=!0,Role:m,CustomComponent:b=null}){super({ID:e,Title:t}),this.Assignee=i,this.RequestOrg=o,this.PipelineStage=a,this.IsActive=d,this.Role=m,this.CustomComponent=b}Role;Errors=ko.observableArray();getComponentName=()=>this.CustomComponent??ha[this.Role];getComponent=({request:e})=>({request:e,assignment:this,addAssignment:e.Assignments.addNew,completeAssignment:e.Assignments.complete,errors:this.Errors,actionComponentName:this.getComponentName()});userIsDirectlyAssigned=e=>this.Assignee?.ID==e.ID||e.isInGroup(this.Assignee);userIsInRequestOrg=e=>e.isInRequestOrg(this.RequestOrg);isActionable=()=>[Le.ActionResolver,Le.Approver,Le.Assigner].includes(this.Role);isUserActionable=e=>(e||(e=window.WorkOrder.App.CurrentUser()),this.isActionable()?this.userIsDirectlyAssigned(e)||this.userIsInRequestOrg(e):!1);isExpanded=ko.observable(!0);toggleExpanded=()=>this.isExpanded(!this.isExpanded());static CreateFromObject=function(e){e.RequestOrg=ee.FindInStore(e.RequestOrg);let t=new s;return Object.assign(t,e),t};static Views={All:["ID","Title","Assignee","Role","Status","RequestOrg","IsActive","Comment","CompletionDate","ActionTaker","PipelineStage","CustomComponent","Request"],Dashboard:["Role","Assignee","Status","Request"]};static ListDef={name:"Assignments",title:"Assignments",fields:s.Views.All}};window.console=window.console||{log:function(){}};var N=window.sal||{};N.globalConfig=N.globalConfig||{};N.site=N.site||{};window.DEBUG=!0;function qi(s){return{ID:s.get_id(),Title:s.get_title(),LoginName:s.get_loginName(),IsEnsured:!0,IsGroup:!0,oGroup:s}}function Zt(){let s=N.globalConfig.defaultGroups,e={};return Object.keys(s).forEach(t=>{e[t]=qi(s[t])}),e}var Xt={};async function Fi(s){if(Xt[s]?.Users?.constructor==Array)return Xt[s].Users;let e=`/web/sitegroups/GetByName('${s}')?$expand=Users`,i=(await ce(e)).d;return i.Users=i.Users?.results,Xt[s]=i,i.Users}var Ii=_spPageContextInfo.webAbsoluteUrl=="/"?"":_spPageContextInfo.webAbsoluteUrl;async function Di(){N.globalConfig.siteGroups=[],console.log("we are initing sal"),N.globalConfig.siteUrl=_spPageContextInfo.webServerRelativeUrl=="/"?"":_spPageContextInfo.webServerRelativeUrl,N.globalConfig.listServices=N.globalConfig.siteUrl+"/_vti_bin/ListData.svc/";var s=SP.ClientContext.get_current(),e=s.get_web();N.globalConfig.defaultGroups={owners:e.get_associatedOwnerGroup(),members:e.get_associatedMemberGroup(),visitors:e.get_associatedVisitorGroup()},s.load(N.globalConfig.defaultGroups.owners),s.load(N.globalConfig.defaultGroups.members),s.load(N.globalConfig.defaultGroups.visitors);var t=e.get_currentUser();s.load(t);var i=e.get_siteGroups();s.load(i),N.globalConfig.roles=[];var o=s.get_web().get_roleDefinitions();return s.load(o),new Promise((a,d)=>{s.executeQueryAsync(function(){N.globalConfig.currentUser=t,N.globalConfig.siteGroups=fa(i);for(var m=o.getEnumerator();m.moveNext();){var b=m.get_current();N.globalConfig.roles.push(b.get_name())}N.config=new N.NewAppConfig,N.utilities=new N.NewUtilities,a()},function(m,b){alert("Error initializing SAL: "+b.get_message()),console.error("Error initializing SAL: "+b.get_message(),b),d()})})}N.NewAppConfig=function(){var s={};s.roles={FullControl:"Full Control",Design:"Design",Edit:"Edit",Contribute:"Contribute",RestrictedContribute:"Restricted Contribute",InitialCreate:"Initial Create",Read:"Read",RestrictedRead:"Restricted Read",LimitedAccess:"Limited Access"},s.fulfillsRole=function(i,o){let a=Object.values(s.roles);return!a.includes(i)||!a.includes(o)?!1:a.indexOf(i)<=a.indexOf(o)},s.validate=function(){Object.keys(s.roles).forEach(function(i){var o=s.roles[i];N.globalConfig.roles.includes(o)?console.log(o):console.error(o+" is not in the global roles list")})};var e={groups:{Owners:"workorder Owners",Members:"workorder Members",Visitors:"workorder Visitors",RestrictedReaders:"Restricted Readers"}},t={siteRoles:s,siteGroups:e};return t};async function Pi(s=_spPageContextInfo.userId){let e="/sp.userprofiles.peoplemanager/getmyproperties",t=`/Web/GetUserById(${s})/?$expand=Groups`,i=(await ce(t)).d,o=(await ce(e))?.d.UserProfileProperties.results;function a(d,m){return d.find(b=>b.Key==m)?.Value}return{ID:s,Title:i.Title,LoginName:i.LoginName,WorkPhone:a(o,"WorkPhone"),EMail:a(o,"WorkEmail"),IsEnsured:!0,IsGroup:!1,Groups:i.Groups?.results?.map(d=>({...d,ID:d.Id,IsGroup:!0,IsEnsured:!0})),Department:a(o,"Department")}}N.NewUtilities=function(){function s(d,m,b){b=b===void 0?null:b;var x=new SP.ClientContext.get_current,O=x.get_web(),_=new SP.GroupCreationInformation;_.set_title(d),this.oGroup=oWebsite.get_siteGroups().add(_),oGroup.set_owner(oWebsite.get_associatedOwnerGroup()),oGroup.update();var J=SP.RoleDefinitionBindingCollection.newObject(clientContext);this.oRoleDefinitions=[],m.forEach(function(U){var ae=oWebsite.get_roleDefinitions().getByName(U);this.oRoleDefinitions.push(ae),J.add(ae)});var ye=oWebsite.get_roleAssignments();ye.add(oGroup,J);function Z(){var U=oGroup.get_title()+" created and assigned to "+oRoleDefinitions.forEach(function(ae){ae+""});b&&b(oGroup.get_id()),console.log(U)}function oe(U,ae){alert(groupnName+" - Create group failed. "+ae.get_message()+`
`+ae.get_stackTrace())}clientContext.load(oGroup,"Title");var he={groupName:d,oGroup,oRoleDefinition,callback:b};clientContext.executeQueryAsync(Function.createDelegate(he,Z),Function.createDelegate(he,oe))}function e(d,m){var b=new SP.ClientContext.get_current,x=b.get_web(),O=x.ensureUser(d),_=O.get_groups();function J(){for(var Z=new Array,oe=new String,he=_.getEnumerator();he.moveNext();){var U=he.get_current(),ae={};ae.ID=U.get_id(),ae.Title=U.get_title(),oe+=`
Group ID: `+U.get_id()+", Title : "+U.get_title(),Z.push(ae)}console.log(oe.toString()),m(Z)}function ye(Z,oe){console.error(" Everyone - Query Everyone group failed. "+oe.get_message()+`
`+oe.get_stackTrace())}b.load(O),b.load(_),data={everyone:O,oGroups:_,callback:m},b.executeQueryAsync(Function.createDelegate(data,J),Function.createDelegate(data,ye))}function t(d,m){var b=new SP.ClientContext.get_current,x=d.get_users();function O(){for(var ye=[],Z=x.getEnumerator();Z.moveNext();){var oe={},he=Z.get_current();oe.title=he.get_title(),oe.loginName=he.get_loginName(),ye.push(oe)}m(ye)}function _(ye,Z){}var J={oUsers:x,callback:m};b.load(x),b.executeQueryAsync(Function.createDelegate(J,O),Function.createDelegate(J,_))}function i(d,m,b,x){var O=new SP.ClientContext.get_current,_=O.get_web(),J=_.getFolderByServerRelativeUrl(d);O.load(J,"Files"),O.executeQueryAsync(function(){console.log("Got the source folder right here!");for(var ye=J.get_files(),Z=ye.getEnumerator(),oe=[];Z.moveNext();){var he=Z.get_current(),U=m+"/"+he.get_name();oe.push(U),he.copyTo(U,!0)}console.log(oe),O.executeQueryAsync(function(){console.log("Files moved successfully!"),b()},function(ae,tt){console.log("error: ")+tt.get_message()})},function(ye,Z){console.log("Sorry, something messed up: "+Z.get_message())})}function o(d,m){return new Promise((b,x)=>{i(d,m,b,x)})}var a={copyFiles:i,copyFilesAsync:o,createSiteGroup:s,getUserGroups:e,getUsersWithGroup:t};return a};async function st(s){return new Promise((e,t)=>{var i=N.globalConfig.siteGroups.find(function(x){return x.LoginName==s});if(i){e(i);return}var o=new SP.ClientContext.get_current,a=o.get_web().ensureUser(s);function d(x,O){let _={ID:a.get_id(),Title:a.get_title(),LoginName:a.get_loginName(),IsEnsured:!0,IsGroup:!1};e(_)}function m(x,O){console.error("Failed to ensure user :"+O.get_message()+`
`+O.get_stackTrace()),t(O)}let b={oUser:a,resolve:e,reject:t};o.load(a),o.executeQueryAsync(Function.createDelegate(b,d),Function.createDelegate(b,m))})}function fa(s){for(var e=new Array,t=s.getEnumerator();t.moveNext();){var i=t.get_current();e.push(qi(i))}return e}N.getSPSiteGroupByName=function(s){var e=null;return this.globalConfig.siteGroups!=null&&(e=this.globalConfig.siteGroups.find(function(t){return t.Title==s})),e};function Ni(s){var e=this;e.config={def:s};async function t(){if(!e.config.fieldSchema){let n=`/web/lists/GetByTitle('${e.config.def.title}')/Fields`,r=await ce(n);e.config.fieldSchema=r.d.results}}t();function i(n,r){return new Promise((c,u)=>{o(n,c,r)})}function o(n,r,c){c=c===void 0?!1:c;var u=new Array,f=new Array,C=new SP.ClientContext.get_current,g=C.get_web(),p=g.get_lists().getByTitle(e.config.def.title);n.forEach(function(A){var R=N.getSPSiteGroupByName(A[0]);R?f.push([R,A[1]]):u.push([C.get_web().ensureUser(A[0]),A[1]])});function q(){console.log("Successfully found item");var A=new SP.ClientContext.get_current,R=A.get_web();c?(p.resetRoleInheritance(),p.breakRoleInheritance(!1,!1),p.get_roleAssignments().getByPrincipal(N.globalConfig.currentUser).deleteObject()):p.breakRoleInheritance(!1,!1),this.resolvedGroups.forEach(function(G){var j=SP.RoleDefinitionBindingCollection.newObject(A);j.add(R.get_roleDefinitions().getByName(G[1])),p.get_roleAssignments().add(G[0],j)}),this.users.forEach(function(G){var j=SP.RoleDefinitionBindingCollection.newObject(A);j.add(R.get_roleDefinitions().getByName(G[1])),p.get_roleAssignments().add(G[0],j)});var S={oList:p,callback:r};function D(){console.log("Successfully set permissions"),r(p)}function L(G,j){console.error("Failed to update permissions on List: "+this.oList.get_title()+j.get_message()+`
`,j.get_stackTrace())}A.load(p),A.executeQueryAsync(Function.createDelegate(S,D),Function.createDelegate(S,L))}function v(A,R){console.error("Failed to find List: "+this.oList.get_title+R.get_message(),R.get_stackTrace())}var w={oList:p,users:u,resolvedGroups:f,callback:r};C.load(p),u.map(function(A){C.load(A[0])}),C.executeQueryAsync(Function.createDelegate(w,q),Function.createDelegate(w,v))}function a(n){return n&&(Array.isArray(n)?n.map(r=>d(r)).join(";#"):d(n))}function d(n){return n.ID?`${n.ID};#${n.LookupValue??""}`:n.LookupValue?n.LookupValue:n.constructor.getName()=="Date"?n.toISOString():n}function m(n,r=null){return new Promise((c,u)=>{let f=new SP.ClientContext.get_current,g=f.get_web().get_lists().getByTitle(e.config.def.title),p=new SP.ListItemCreationInformation;if(r){var q=N.globalConfig.siteUrl+"/Lists/"+e.config.def.name+"/"+r;p.set_folderUrl(q)}let v=g.addItem(p),w=["ID","Author","Created","Editor","Modified"];Object.keys(n).filter(D=>!w.includes(D)).forEach(D=>{v.set_item(D,a(n[D]))}),v.update();function A(){c(v.get_id())}function R(D,L){console.error("Create Item Failed - List: "+e.config.def.name),console.error("ValuePairs",n),console.error(D,L),u(D)}let S={entity:n,oListItem:v,resolve:c,reject:u};f.load(v),f.executeQueryAsync(Function.createDelegate(S,A),Function.createDelegate(S,R))})}function b(n){if(!n)return n;let r={};switch(n.constructor.getName()){case"SP.FieldUserValue":r.LoginName=n.get_email();case"SP.FieldLookupValue":r.ID=n.get_lookupId(),r.LookupValue=n.get_lookupValue(),r.Title=n.get_lookupValue();break;default:r=n}return r}function x(n,r,c){var u=new SP.CamlQuery.createAllItemsQuery;u.set_viewXml(n);var f=new SP.ClientContext.get_current,C=f.get_web(),g=C.get_lists().getByTitle(e.config.def.title),p=g.getItems(u);function q(){var A=this,R=A.collListItem.getEnumerator();let S=[];for(;R.moveNext();){var D=R.get_current(),L={};r.forEach(G=>{var j=D.get_item(G);L[G]=Array.isArray(j)?j.map(fe=>b(fe)):b(j)}),S.push(L)}c(S)}function v(A,R){console.log("unsuccessful read",A),alert("Request on list "+e.config.def.name+` failed, producing the following error: 
 `+R.get_message()+`
StackTrack: 
 `+R.get_stackTrace())}var w={collListItem:p,callback:c,fields:r,camlQuery:u};f.load(p,`Include(${r.join(", ")})`),f.executeQueryAsync(Function.createDelegate(w,q),Function.createDelegate(w,v))}function O({fields:n=null,caml:r=null}){if(!r)var r='<View Scope="RecursiveAll"><Query><Where><Eq><FieldRef Name="FSObjType"/><Value Type="int">0</Value></Eq></Where></Query></View>';return new Promise((c,u)=>{x(r,n,c)})}function _(n,r){return new Promise((c,u)=>{try{U(n,r,c)}catch(f){u(f)}})}async function J(n,r){let[c,u]=await Z(r),f=`/web/lists/GetByTitle('${e.config.def.title}')/items(${n})?$Select=${c}&$expand=${u}`;return(await ce(f)).d}async function ye(){if(!e.config.fieldSchema){let n=`/web/lists/GetByTitle('${e.config.def.title}')/Fields`,r=await ce(n);e.config.fieldSchema=r.d.results}return e.config.fieldSchema}async function Z(n){let r=[],c=[],u=await ye();return n.map(f=>{if(f.includes("/")){r.push(f),c.push(f.split("/")[0]);return}let C=u.find(g=>g.StaticName==f);if(!C){alert(`Field '${f}' not found on list ${e.config.def.name}`);return}switch(C.TypeAsString){case"UserMulti":case"User":case"LookupMulti":case"Lookup":let g=f+"/ID",p=f+"/Title";r.push(g),r.push(p),c.push(f);break;case"Choice":default:r.push(f)}}),[r,c]}async function oe(n,{orderByColumn:r=null,sortAsc:c},{count:u=null},f,C){let[g,p]=await Z(f),q=r?`$orderby=${r} ${c?"asc":"desc"}`:"",v=[];n.forEach(j=>v.push(`${j.column} ${j.op??"eq"} '${j.value}'`)),C||v.push("FSObjType eq '0'");let w="$filter=("+v.join(") and (")+")",A="$select="+g,R="$expand="+p,S=u?`$top=${u}`:"",D=`/web/lists/GetByTitle('${e.config.def.title}')/items?${A}&${R}&${q}&${w}&${S}`,L=await ce(D);return{results:L?.d?.results,_next:L?.d?.__next}}async function he(n){let r=await ce(n._next);return{results:r?.d?.results,_next:r?.d?.__next}}function U(n,r,c){var u=new SP.ClientContext.get_current,f=u.get_web(),C=f.get_lists().getByTitle(e.config.def.title),g=C.getItemById(n);function p(){let w={};r.forEach(A=>{var R=g.get_item(A);w[A]=Array.isArray(R)?R.map(S=>b(S)):b(R)}),c(w)}function q(w,A){console.error("SAL: findById - List: "+e.config.def.name),console.error("Fields",this),console.error(w,A)}var v={oListItem:g,callback:c,fields:r};u.load(g),u.executeQueryAsync(Function.createDelegate(v,p),Function.createDelegate(v,q))}function ae(n){return n?.ID?new Promise((r,c)=>{let u=new SP.ClientContext.get_current,g=u.get_web().get_lists().getByTitle(e.config.def.title).getItemById(n.ID),p=["ID","Author","Created","Editor","Modified"];Object.keys(n).filter(A=>!p.includes(A)).forEach(A=>{g.set_item(A,a(n[A]))}),g.update();function q(){console.log("Successfully updated "+this.oListItem.get_item("Title")),r()}function v(A,R){console.error("Update Failed - List: "+e.config.def.name),console.error("Item Id",this.oListItem.get_id()??"N/A"),console.error(n),console.error(A,R),c(R)}let w={oListItem:g,entity:n,resolve:r,reject:c};u.load(g),u.executeQueryAsync(Function.createDelegate(w,q),Function.createDelegate(w,v))}):!1}function tt(n,r){var c=new SP.ClientContext.get_current,u=c.get_web(),f=u.get_lists().getByTitle(e.config.def.title),C={callback:r};f.getItemById(n).deleteObject();function p(v,w){r()}function q(v,w){console.error("sal.SPList.deleteListItem: Request on list "+e.config.def.name+` failed, producing the following error: 
 `+w.get_message()+`
StackTrack: 
 `+w.get_stackTrace())}c.executeQueryAsync(Function.createDelegate(C,p),Function.createDelegate(C,q))}function zt(n){return new Promise((r,c)=>tt(n,r))}function _o(n,r,c){return new Promise((u,f)=>{Bo(n,r,u,c)})}function Bo(n,r,c,u){u=u===void 0?!1:u;let f=[],C=[],g=new SP.ClientContext.get_current,v=g.get_web().get_lists().getByTitle(e.config.def.title).getItemById(n);r.forEach(function(S){let D=N.getSPSiteGroupByName(S[0]);D?.oGroup?C.push([D.oGroup,S[1]]):f.push([g.get_web().ensureUser(S[0]),S[1]])});function w(){console.log("Successfully found item");let S=new SP.ClientContext.get_current,D=S.get_web();u?(v.resetRoleInheritance(),v.breakRoleInheritance(!1,!1),v.get_roleAssignments().getByPrincipal(N.globalConfig.currentUser).deleteObject()):v.breakRoleInheritance(!1,!1),this.resolvedGroups.forEach(function(fe){let ne=SP.RoleDefinitionBindingCollection.newObject(S);ne.add(D.get_roleDefinitions().getByName(fe[1])),v.get_roleAssignments().add(fe[0],ne)}),this.users.forEach(function(fe){let ne=SP.RoleDefinitionBindingCollection.newObject(S);ne.add(D.get_roleDefinitions().getByName(fe[1])),v.get_roleAssignments().add(fe[0],ne)});var L={oListItem:v,callback:c};function G(){console.log("Successfully set permissions"),c(v)}function j(fe,ne){console.error("Failed to update permissions on item: "+this.oListItem.get_lookupValue()+ne.get_message()+`
`+ne.get_stackTrace(),!1)}S.load(v),S.executeQueryAsync(Function.createDelegate(L,G),Function.createDelegate(L,j))}function A(S,D){console.error("Failed to update permissions on item: "+this.title+D.get_message()+`
`+D.get_stackTrace(),!1)}var R={id:n,oListItem:v,users:f,resolvedGroups:C,callback:c};g.load(v),f.map(function(S){g.load(S[0])}),g.executeQueryAsync(Function.createDelegate(R,w),Function.createDelegate(R,A))}function Uo(n){return new Promise((r,c)=>{var u=new SP.ClientContext.get_current,f=u.get_web(),C=f.get_lists().getByTitle(e.config.def.title),g=C.getItemById(n),p=g.get_roleAssignments();function q(){for(var A=new SP.ClientContext.get_current,R=A.get_web(),S=[],D=this.roles.getEnumerator();D.moveNext();){var L=D.get_current(),G=L.get_member();A.load(G),S.push(G)}A.executeQueryAsync(function(j,fe){var ne=S.map(function(Ce){return{ID:Ce.get_id(),Title:Ce.get_title(),LoginName:Ce.get_loginName()}});r(ne)},function(j,fe){alert("Request failed. "+fe.get_message()+`
`+fe.get_stackTrace()),c(fe)})}function v(A,R){console.error("Failed to get permissions on item: "+R.get_message()+`
`+R.get_stackTrace(),!1),c(R)}let w={id:n,oListItem:g,roles:p,resolve:r,reject:c};u.load(g),u.load(p),u.executeQueryAsync(Function.createDelegate(w,q),Function.createDelegate(w,v))})}function Oe(n){let r=e.config.def.isLib?"/"+e.config.def.name+"/":"/Lists/"+e.config.def.name+"/";return N.globalConfig.siteUrl+r+n}function Go(n){return e.config.def.isLib?new Promise((r,c)=>Ko(n,r)):new Promise((r,c)=>zo(n,r))}async function $o(n){try{let c=(await Qo(n)).map(u=>[u.LoginName,N.config.siteRoles.roles.RestrictedRead]);await Jt(n,c,!0)}catch(r){console.warn(r)}}async function jo(n,r){let c=Oe(n),u=N.globalConfig.siteUrl+`/_api/web/GetFolderByServerRelativeUrl('${c}')/ListItemAllFields/RoleAssignments?$expand=Member,Member/Users,RoleDefinitionBindings`,f=await fetch(u,{method:"GET",headers:{Accept:"application/json; odata=verbose"}});if(!f.ok){if(f.status==404)return;console.error(f)}let C=await f.json(),g=C?.d?.results;if(!g){console.warn("No results found",C);return}let p=r.filter(q=>{let v=q[0],w=q[1];return!g.find(R=>R.Member.LoginName!=v&&!R.Member.Users?.results.find(S=>S.LoginName==v)?!1:!!R.RoleDefinitionBindings.results?.find(S=>N.config.siteRoles.fulfillsRole(S.Name,w)))});console.log("Adding missing permissions",p),p.length&&await Jt(n,p,!1)}function Ho(n,r){return new Promise((c,u)=>{let f=new SP.ClientContext.get_current,g=f.get_web().get_lists().getByTitle(e.config.def.title),p=Oe(n),q=SP.CamlQuery.createAllItemsQuery();q.set_folderServerRelativeUrl(p);let v=g.getItems(q);f.load(v,`Include(${r.join(", ")})`),f.executeQueryAsync(function(){let w=[];for(var A=v.getEnumerator();A.moveNext();){var R=A.get_current(),S={};r.forEach(D=>{var L=R.get_item(D);S[D]=Array.isArray(L)?L.map(G=>b(G)):b(L)}),S.oListItem=R,w.push(S)}c(w)},function(w,A){console.warn("Unable load list folder contents:"),console.error(w),console.error(A),u(A)})})}async function Qo(n){return new Promise(async(r,c)=>{let u=await Wo(n);if(!u){c("Folder item does not exist");return}let f=u.get_roleAssignments(),C=new SP.ClientContext.get_current;C.load(u),C.load(f),C.executeQueryAsync(function(){let g=new SP.ClientContext.get_current;console.log(u);let p=[],q=[],v=f.getEnumerator();for(;v.moveNext();){let w=v.get_current(),A=w.get_member(),R=w.get_roleDefinitionBindings();g.load(R),g.load(A),p.push({principal:A,bindings:R})}g.executeQueryAsync(function(w,A){let R=p.map(function({principal:S,bindings:D}){let L=[],G=D.getEnumerator();for(;G.moveNext();){let j=G.get_current();L.push(j.get_name())}return{ID:S.get_id(),Title:S.get_title(),LoginName:S.get_loginName(),Roles:L}});r(R)},function(w,A){console.warn("Unable load folder principals permissions:"),console.error(w),console.error(A),c(A)})},function(g,p){console.warn("Unable load folder permissions:"),console.error(g),console.error(p),c(p)})})}async function Wo(n){return new Promise((r,c)=>{let u=new SP.ClientContext.get_current,C=u.get_web().get_lists().getByTitle(e.config.def.title),g=SP.CamlQuery.createAllItemsQuery();var q='<View Scope="RecursiveAll"><Query><Where><And><Eq><FieldRef Name="FSObjType"/><Value Type="int">1</Value></Eq><Eq><FieldRef Name="FileRef"/><Value Type="Text">'+Oe(n)+"</Value></Eq></And></Where></Query><RowLimit>1</RowLimit></View>";g.set_viewXml(q);let v=C.getItems(g);async function w(){let S=[];for(var D=v.getEnumerator();D.moveNext();){let G=D.get_current();S.push(G)}S||(console.warn("folder not found"),r(S)),S.length>1&&(console.warn("Multiple folders found!"),r(S));let L=S[0];r(L)}function A(S,D){console.warn("Unable load list folder contents:"),console.error(S),console.error(D),c(D)}let R={allFolders:v,resolve:r,reject:c};u.load(v),u.executeQueryAsync(Function.createDelegate(R,w),Function.createDelegate(R,A))})}function zo(n,r){var c=n.split("/"),u=0,f=function(C,g,p,q){var v=g[p];p++;var w=g.slice(0,p).join("/");Jo(w,function(A){p>=g.length?q(A.get_id()):f(w,g,p,q)},function(){e.createListFolder(v,function(A){p>=g.length?q(A):f(w,g,p,q)},C)})};f("",c,u,r)}e.createListFolder=function(n,r,c){c=c===void 0?"":c;let u=new SP.ClientContext.get_current,C=u.get_web().get_lists().getByTitle(e.config.def.title),g="",p=new SP.ListItemCreationInformation;p.set_underlyingObjectType(SP.FileSystemObjectType.folder),p.set_leafName(n),c&&(g=N.globalConfig.siteUrl+"/Lists/"+e.config.def.name+"/"+c,p.set_folderUrl(g));let q=C.addItem(p);q.set_item("Title",n),q.update();function v(R,S){r(this.newItem.get_id())}function w(R,S){alert("Request on list "+e.config.def.name+` failed, producing the following error: 
`+S.get_message()+`
StackTrack: 
`+S.get_stackTrace())}let A={folderName:n,callback:r,newItem:q};u.load(q),u.executeQueryAsync(Function.createDelegate(A,v),Function.createDelegate(A,w))};function Jo(n,r,c){var u=N.globalConfig.siteUrl+"/Lists/"+e.config.def.name+"/"+n,f=SP.ClientContext.get_current(),C=f.get_web().getFolderByServerRelativeUrl(u);C.get_listItemAllFields();var g={folder:C,path:n,onExists:r,onNonExists:c};f.load(C,"Exists","Name");function p(){if(C.get_exists()){let A=function(){r(w)},R=function(S,D){console.error("Failed to find folder at "+n,D)};console.log("Folder "+C.get_name()+" exists in "+e.config.def.name);var v=new SP.ClientContext.get_current,w=C.get_listItemAllFields();g={folderItem:w,path:n,onExists:r},v.load(w),v.executeQueryAsync(Function.createDelegate(g,A),Function.createDelegate(g,R))}else console.warn("Folder exists but is hidden (security-trimmed) for us.")}function q(v,w){w.get_errorTypeName()==="System.IO.FileNotFoundException"?(console.log("SAL.SPList.ensureListFolder:           Folder "+n+" does not exist in "+e.config.def.name),c()):console.error("Error: "+w.get_message())}f.executeQueryAsync(Function.createDelegate(g,p),Function.createDelegate(g,q))}function Ko(n,r){let f=new SP.ClientContext.get_current().get_web().get_lists().getByTitle(e.config.def.title);var C=function(g,p,q){var v=g.get_context(),w=p.split("/"),A=w[0],R=g.get_folders().add(A);v.load(R),v.executeQueryAsync(function(){if(w.length>1){var S=w.slice(1,w.length).join("/");C(R,S,q)}else q(R)},function(S,D){console.error("error creating new folder"),console.error(S),console.error(error)})};C(f.get_rootFolder(),n,r)}function Jt(n,r,c){return new Promise((u,f)=>{Xo(n,r,u,c)})}function Xo(n,r,c,u){u=u===void 0?!1:u;var f=[],C=[];let g=Oe(n),p=new SP.ClientContext.get_current,v=p.get_web().getFolderByServerRelativeUrl(g);r.forEach(function(S){var D=N.getSPSiteGroupByName(S[0]);D?.oGroup?C.push([D.oGroup,S[1]]):f.push([p.get_web().ensureUser(S[0]),S[1]])});function w(){var S=new SP.ClientContext.get_current,D=S.get_web(),L=this.folder.get_listItemAllFields();u?(L.resetRoleInheritance(),L.breakRoleInheritance(!1,!1),L.get_roleAssignments().getByPrincipal(N.globalConfig.currentUser).deleteObject()):L.breakRoleInheritance(!1,!1),this.resolvedGroups.forEach(function(ne){var Ce=SP.RoleDefinitionBindingCollection.newObject(S);Ce.add(D.get_roleDefinitions().getByName(ne[1])),L.get_roleAssignments().add(ne[0],Ce)}),this.users.forEach(function(ne){var Ce=SP.RoleDefinitionBindingCollection.newObject(S);Ce.add(D.get_roleDefinitions().getByName(ne[1])),L.get_roleAssignments().add(ne[0],Ce)});var G={folderItem:L,callback:c};function j(){console.log("Successfully set permissions"),this.callback(L)}function fe(ne,Ce){console.error("Failed to update permissions on item: "+Ce.get_message(),Ce)}S.load(L),S.executeQueryAsync(Function.createDelegate(G,j),Function.createDelegate(G,fe))}function A(S,D){console.error("Something went wrong setting perms on library folder",D)}var R={folder:v,users:f,callback:c,resolvedGroups:C,valuePairs:r,reset:u};f.map(function(S){p.load(S[0])}),p.load(v),p.executeQueryAsync(Function.createDelegate(R,w),Function.createDelegate(R,A))}function Yo(n){let c=`/web/GetFolderByServerRelativeUrl('${Oe(n)}')`;return ce(c,"POST",{"If-Match":"*","X-HTTP-Method":"DELETE"})}function Zo(n,r,c,u){var f="";c.id&&(f=c.id);let C=SP.UI.$create_DialogOptions();var g=e.config.def.isLib?"/"+e.config.def.name+"/":"/Lists/"+e.config.def.name+"/",p="";c.rootFolder&&(p=N.globalConfig.siteUrl+g+c.rootFolder);var q=e.config.def.isLib?"/"+e.config.def.name+"/Forms/":"/Lists/"+e.config.def.name+"/";Object.assign(C,{title:r,dialogReturnValueCallback:u,args:JSON.stringify(c),url:N.globalConfig.siteUrl+q+n+"?ID="+f+"&Source="+location.pathname+"&RootFolder="+p}),SP.UI.ModalDialog.showModalDialog(C)}function ea(n,r,c){return new Promise((u,f)=>{let C=new SP.ClientContext.get_current,p=C.get_web().get_lists().getByTitle(e.config.def.title);C.load(p),C.executeQueryAsync(function(){var q=N.globalConfig.siteUrl=="/"?"":N.globalConfig.siteUrl;let v=SP.UI.$create_DialogOptions();Object.assign(v,{title:r,dialogReturnValueCallback:u,args:JSON.stringify(c),url:q+"/_layouts/Upload.aspx?List="+p.get_id().toString()+"&RootFolder="+q+"/"+e.config.def.name+"/"+encodeURI(n)+"&Source="+location.pathname+"&args="+encodeURI(JSON.stringify(c))}),SP.UI.ModalDialog.showModalDialog(v)},function(q,v){console.error("Error showing file modal: "),console.error(q),console.error(v)})})}let Ri=10485760,Ya={start:"startupload",continue:"continueupload",finish:"finishupload"};async function ta(n,r,c,u){let f=n,C=Ri,g=n.size,p=parseInt((g/C).toString(),10)+(g%C===0?1:0),q=r+"/"+c,v=ga(),w;u({currentBlock:0,totalBlocks:p}),w=await sa(v,n.slice(0,C),q,r);for(let R=2;R<p;R++)u({currentBlock:R,totalBlocks:p}),w=await ia(v,n.slice(w,w+C),w,q);u({currentBlock:p-1,totalBlocks:p});let A=await oa(v,n.slice(w),w,q);return u({currentBlock:p,totalBlocks:p}),A}async function sa(n,r,c,u){let f=`/web/getFolderByServerRelativeUrl(@folder)/files/getByUrlOrAddStub(@file)/StartUpload(guid'${n}')?&@folder='${u}'&@file='${c}'`,p=await ce(f,"POST",{"Content-Type":"application/octet-stream"},{body:r});if(!p){console.error("Error starting upload!");return}return parseFloat(p.d.StartUpload)}async function ia(n,r,c,u){let f=`/web/getFileByServerRelativeUrl(@file)/ContinueUpload(uploadId=guid'${n}',fileOffset=${c})?&@file='${u}'`,p=await ce(f,"POST",{"Content-Type":"application/octet-stream"},{body:r});if(!p){console.error("Error starting upload!");return}return parseFloat(p.d.ContinueUpload)}async function oa(n,r,c,u){let f=`/web/getFileByServerRelativeUrl(@file)/FinishUpload(uploadId=guid'${n}',fileOffset=${c})?&@file='${u}'`,p=await ce(f,"POST",{"Content-Type":"application/octet-stream"},{body:r});if(!p){console.error("Error starting upload!");return}return p}async function aa(n,r,c){return await fetch(_spPageContextInfo.webServerRelativeUrl+`/_api/web/GetFolderByServerRelativeUrl('${r}')/Files/add(url='${c}',overwrite=true)`,{method:"POST",credentials:"same-origin",body:n,headers:{Accept:"application/json; odata=verbose","Content-Type":"application/json;odata=nometadata","X-RequestDigest":document.getElementById("__REQUESTDIGEST").value}}).then(u=>{if(!u.ok){console.error("Error Uploading File",u);return}return u.json()})}async function na(n,r,c,u,f=null){f||(f=()=>{});let C=Oe(c),g=null;if(n.size>Ri){let v=()=>ta(n,C,r,f);g=await ba.addJob(v)}else f({currentBlock:0,totalBlocks:1}),g=await aa(n,C,r),f({currentBlock:1,totalBlocks:1});await ra(g.d,u),await ca(C+"/"+r,"");let p=g.d.ListItemAllFields.__deferred.uri+"?$select=ID";return(await ce(p)).d.ID}async function ra(n,r){var c=await fetch(n.ListItemAllFields.__deferred.uri,{method:"POST",credentials:"same-origin",body:JSON.stringify(r),headers:{Accept:"application/json; odata=nometadata","Content-Type":"application/json;odata=nometadata","X-RequestDigest":document.getElementById("__REQUESTDIGEST").value,"X-HTTP-Method":"MERGE","If-Match":"*"}}).then(u=>{if(!u.ok){console.error("Error Updating File",u);return}return u});return c}function la(n,r,c,u){let f=Oe(n),C=Oe(r);var g=new SP.ClientContext.get_current,p=g.get_web(),q=p.getFolderByServerRelativeUrl(f);g.load(q,"Files"),g.executeQueryAsync(function(){for(var v=q.get_files(),w=v.getEnumerator(),A=[];w.moveNext();){var R=w.get_current(),S=C+"/"+R.get_name();A.push(S),R.copyTo(S,!0)}console.log(A),g.executeQueryAsync(function(){console.log("Files moved successfully!"),c()},function(D,L){console.log("error: ")+L.get_message()})},function(v,w){console.error("Unable to copy files: ",w.get_message()),console.error(v),console.error(w),u(w)})}function da(n,r){return new Promise((c,u)=>{la(n,r,c,u)})}async function Za(){let n=await ce(`/web/lists/GetByTitle('${e.config.def.title}')`)}function ca(n,r){let c=`/web/GetFileByServerRelativeUrl('${n}')/CheckIn(comment='${r}',checkintype=0)`;return ce(c,"POST")}return{findByIdAsync:_,getById:J,findByColumnValueAsync:oe,loadNextPage:he,getListItemsAsync:O,createListItemAsync:m,updateListItemAsync:ae,deleteListItemAsync:zt,setItemPermissionsAsync:_o,getItemPermissionsAsync:Uo,getFolderContentsAsync:Ho,upsertFolderPathAsync:Go,deleteFolderByPathAsync:Yo,getServerRelativeFolderPath:Oe,setFolderReadonlyAsync:$o,setFolderPermissionsAsync:Jt,ensureFolderPermissionsAsync:jo,uploadFileToFolderAndUpdateMetadata:na,uploadNewDocumentAsync:ea,copyFilesAsync:da,showModal:Zo}}async function ce(s,e="GET",t={},i={}){let o=s.startsWith("http")?s:N.globalConfig.siteUrl+"/_api"+s,a=await fetch(o,{method:e,headers:{Accept:"application/json; odata=verbose","X-RequestDigest":document.getElementById("__REQUESTDIGEST").value,...t},...i});if(!a.ok){if(a.status==404)return;console.error(a)}try{return await a.json()}catch{return}}window.spFetch=ce;function ga(){if(crypto.randomUUID)return crypto.randomUUID();let s=Date.now();return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(e){let t=(s+Math.random()*16)%16|0;return s=Math.floor(s/16),(e==="x"?t:t&3|8).toString(16)})}var Yt=class{constructor(e){this.maxConcurrency=e,this.runningJobs=0,this.queue=[]}addJob(e){return new Promise((t,i)=>{let o=async()=>{try{let a=await e();t(a)}catch(a){i(a)}finally{this.runningJobs--,this.processQueue()}};this.queue.push(o),this.processQueue()})}processQueue(){for(;this.runningJobs<this.maxConcurrency&&this.queue.length>0;){let e=this.queue.shift();this.runningJobs++,e()}}},ba=new Yt(5);var X={FullControl:"Full Control",Design:"Design",Edit:"Edit",Contribute:"Contribute",Read:"Read",LimitedAccess:"Limited Access",RestrictedRead:"Restricted Read",RestrictedContribute:"Restricted Contribute",InitialCreate:"Initial Create"},ya={RestrictedReaders:new K({ID:null,Title:"Restricted Readers"})},We={Admin:"Admin",ActionOffice:"ActionOffice"},Se={ActionResolver:{LookupValue:"Action Resolver",description:"Confirms completion of an action.",isAssignable:!0,permissions:X.RestrictedContribute,initialStatus:E.InProgress},Assigner:{LookupValue:"Assigner",description:"Can create additional assignments.",isAssignable:!0,permissions:X.RestrictedContribute,initialStatus:E.InProgress},Approver:{LookupValue:"Approver",description:"Approves or Rejects the request.",isAssignable:!0,permissions:X.RestrictedContribute,initialStatus:E.InProgress},Viewer:{LookupValue:"Viewer",description:"Has view only access to the request.",isAssignable:!0,permissions:X.RestrictedRead},Subscriber:{LookupValue:"Subscriber",description:"Has view only access to the request and recieves notifications",isAssignable:!0,permissions:X.RestrictedRead}},Rt={"Pending Assignment":Se.Assigner,"Pending Approval":Se.Approver,"Pending Action":Se.ActionResolver,"Pending Resolution":Se.ActionResolver,Notification:Se.Subscriber},I=ko.observable(),Ct=class s extends K{constructor({ID:e,Title:t,LoginName:i=null,LookupValue:o=null,WorkPhone:a=null,EMail:d=null,IsGroup:m=null,IsEnsured:b=!1,Groups:x=null,Department:O=null}){super({ID:e,Title:t,LookupValue:o,LoginName:i,IsGroup:m,IsEnsured:b}),this.WorkPhone=a,this.EMail=d,this.OfficeSymbol=O??"CGFS/EX",this.Groups=x}OfficeSymbol;Groups=[];isInGroup(e){return e?.ID?this.getGroupIds().includes(e.ID):!1}getGroupIds(){return this.Groups.map(e=>e.ID)}isInRequestOrg=e=>this.RequestOrgs().find(t=>t.ID==e.ID);RequestOrgs=ko.pureComputed(()=>{let e=this.getGroupIds();return ge().filter(t=>t.Everyone||e.includes(t.UserGroup?.ID))});RequestingOffices=ko.pureComputed(()=>this.RequestOrgs().filter(e=>e.OrgType==Kt.RequestingOffice));ActionOffices=ko.pureComputed(()=>this.RequestOrgs().filter(e=>e.OrgType==Kt.ActionOffice));IsActionOffice=ko.pureComputed(()=>this.ActionOffices().length);IsSiteOwner=ko.pureComputed(()=>this.isInGroup(Zt().owners));hasSystemRole=e=>{let t=this.IsSiteOwner();switch(e){case We.Admin:return t;case We.ActionOffice:return t||this.ActionOffices().length;default:}};static Create=async function(){let e=await Pi();return new s(e)}};function Oi(s){let e=Zt(),t=s.RequestorInfo.Requestor(),i=s.Author.Value(),o=s.RequestorInfo.Office(),a=[[new K(e.owners),X.FullControl],[ya.RestrictedReaders,X.RestrictedRead],[t,X.RestrictedContribute],[i,X.RestrictedContribute]];return o&&!o.BreakAccess&&a.push([o.UserGroup,X.RestrictedContribute]),s.Pipeline.Stages()?.forEach(d=>{let m=ee.FindInStore(d.RequestOrg);if(m&&a.push([m.UserGroup,X.RestrictedContribute]),d.AssignmentFunction&&ze[d.AssignmentFunction])try{ze[d.AssignmentFunction](s,d).forEach(x=>{let O=x.Assignee;O&&O.Title&&a.push([O,X.RestrictedContribute])})}catch{console.warn("Error creating stage assignments",d)}}),a}async function Li(s){let e=await Fi(s);return e?e.map(t=>new K(t)):[]}var ze={TestFunc:function(){return request.RequestorInfo.Requestor()},ch_overtimeGovManager:function(s,e){let t=s.RequestBodyBlob?.Value()?.GovManager.get();if(!t)throw new Error("Could not find stage Assignee");return[new de({Assignee:t,RequestOrg:e.RequestOrg,PipelineStage:e,IsActive:!0,Role:Se.ActionResolver,CustomComponent:"GovManagerActions"})]},ch_overtimeAPM:function(s,e){let t=s.RequestBodyBlob?.Value()?.FieldMap.APM.get();if(!t)throw new Error("Could not find stage Assignee");return[new de({Assignee:t,RequestOrg:e.RequestOrg,PipelineStage:e,IsActive:!0,Role:Se.ActionResolver,CustomComponent:"APMActions"})]},getGTM:function(s,e){let t=s.RequestBodyBlob?.Value()?.FieldMap.GTM.get();if(!t)throw new Error("Could not find stage Assignee");return[new de({Assignee:t,RequestOrg:e.RequestOrg,PipelineStage:e,IsActive:!0,Role:Se.Approver})]},getCOR:function(s,e){let t=s.RequestBodyBlob?.Value()?.FieldMap.COR.get();if(!t)throw new Error("Could not find stage Assignee");return[new de({Assignee:t,RequestOrg:e.RequestOrg,PipelineStage:e,IsActive:!0,Role:Se.Approver})]},getSupervisor:function(s,e){return[new de({Assignee:Ei(s,"Supervisor"),RequestOrg:e.RequestOrg,PipelineStage:e,IsActive:!0,Role:Se.Approver})]},getWildcard:function(s,e,t){return[new de({Assignee:Ei(s,t),RequestOrg:e.RequestOrg,PipelineStage:e,IsActive:!0,Role:Se.Approver,CustomComponent:e.ActionComponentName})]}};function Ei(s,e){let t=s.RequestBodyBlob?.Value()?.FieldMap[e]?.get();if(!t)throw new Error(`Could not find assignee field on current request: ${e}`);return t}var T=String.raw,M=class{constructor(){}static name="base-component";static template=T`<div>No Component Registered!</div>`};var Vi=T`
  <!-- ko if: assignment.Status == assignmentStates.InProgress -->
  <div
    class="m-1 card"
    data-bind="css: {'text-bg-success': assignment.Status == assignmentStates.Approved }"
  >
    <div class="card-body">
      <h6>Your approval has been requested:</h6>
      <div class="d-flex justify-content-between">
        <div>
          <div>
            Assignee: <span data-bind="text: assignment.Assignee?.Title"></span>
          </div>
          <div>
            Request Org:
            <span data-bind="text: assignment.RequestOrg?.Title"></span>
          </div>
        </div>
        <div class="d-flex justify-content-start">
          <button class="btn btn-success" data-bind="click: approveHandler">
            Approve
          </button>
          <button class="ms-3 btn btn-danger" data-bind="click: showReject">
            Reject
          </button>
        </div>
      </div>
    </div>
  </div>
  <!-- /ko -->
  <!-- ko if: assignment.Status == assignmentStates.Approved -->
  <div class="alert alert-success">
    <strong>Thank you for approving!</strong>
    <button class="btn btn-link" data-bind="click: showReject">
      Reject Instead
    </button>
  </div>
  <!-- /ko -->
  <!-- ko if: assignment.Status == assignmentStates.Rejected -->
  <div class="alert alert-danger">
    <strong>This request has been rejected</strong>
  </div>
  <!-- /ko -->
  <dialog class="" data-bind="attr: {id: rejectModalId}">
    <div class="d-flex flex-column justify-content-between h-100">
      <h4>Please Provide a Rejection Reason:</h4>
      <div class="alert alert-warning mb-3">
        Note: Rejecting this request will close the record! Closed requests
        cannot be re-opened!
      </div>
      <textarea
        class="form-control mb-3 flex-grow-1"
        data-bind="textInput: RejectReason"
      ></textarea>
      <div class="d-flex justify-content-center">
        <button
          type="button"
          class="btn btn-danger me-2"
          data-bind="click: reject, enable: RejectReason"
        >
          Reject
        </button>
        <button
          type="button"
          class="btn btn-secondary"
          data-bind="click: cancelReject"
        >
          Cancel
        </button>
      </div>
    </div>
  </dialog>
`;var $e=class extends M{constructor(e){super(),this.assignment=e.assignment,this.completeAssignment=e.completeAssignment}assignmentStates=E;approve=async()=>{this.completeAssignment(this.assignment,E.Approved)};approveHandler=async()=>{if(console.log("approved"),this.assignment.userIsDirectlyAssigned(I())){this.approve();return}if(this.assignment.userIsInRequestOrg(I())){confirm(`This approval is assigned to ${this.assignment.Assignee.Title}. Do you want to approve on their behalf? `)&&this.approve();return}alert("You are not authorized to approve this request!")};rejectModalId=ko.pureComputed(()=>"reject-modal-"+this.assignment.ID);RejectReason=ko.observable();reject=async()=>{console.log("reject"),this.assignment.Comment=this.RejectReason(),this.completeAssignment(this.assignment,E.Rejected),document.getElementById(this.rejectModalId()).close()};showReject=()=>{let e=document.getElementById(this.rejectModalId());if(this.assignment.userIsDirectlyAssigned(I())){e.showModal();return}if(this.assignment.userIsInRequestOrg(I())){confirm(`This approval is assigned to ${this.assignment.Assignee.Title}. Do you want to reject on their behalf? `)&&e.showModal();return}alert("You are not authorized to reject this request!")};cancelReject=()=>{document.getElementById(this.rejectModalId()).close()};undo=async()=>{};static name="approver-actions";static template=Vi};var Mi=T`
  <div class="card m-1">
    <div class="card-body">
      <div>
        <h6>You have been designated as an action office assigner:</h6>
      </div>
      <div>
        Assignee: <span data-bind="text: assignment.Assignee?.Title"></span>
      </div>
      <div>
        Request Org:
        <span data-bind="text: assignment.RequestOrg?.Title"></span>
      </div>
      <!-- ko if: assignment.Status == assignmentStates.Completed -->
      <div class="badge text-bg-success">Complete!</div>
      <!-- <div>Assignments:</div>
    <table class="table table-sm">
      <thead>
        <tr>
          <th>Assignee</th>
          <th>Role</th>
          <th>Stage</th>
        </tr>
      </thead>
      <tbody data-bind="foreach: NewAssignments">
        <tr>
          <td data-bind="text: Assignee?.Title"></td>
          <td data-bind="text: Role"></td>
          <td data-bind="text: PipelineStage?.Title"></td>
        </tr>
      </tbody>
    </table> -->
      <div>Add another assignment:</div>
      <!-- /ko -->
      <div
        data-bind="component: { name: 'new-assignment', params: newAssignmentParams }"
      ></div>
    </div>
  </div>
`;var es=class extends M{constructor({request:e,assignment:t,addAssignment:i,completeAssignment:o}){super(),this.allAssignments=e.Assignments.list.All,this.assignment=t,this.addAssignment=i,this.completeAssignment=o,this.NextStage=e.Pipeline.getNextStage()}assignmentStates=E;NewAssignments=ko.pureComputed(()=>this.allAssignments().filter(e=>e.PipelineStage.ID==this.NextStage?.ID));newAssignmentParams=ko.pureComputed(()=>({addAssignment:async e=>{e.RequestOrg=this.assignment.RequestOrg,this.addAssignment(e),this.completeAssignment(this.assignment,E.Completed)},stage:this.NextStage}));static name="assigner-actions";static template=Mi};var _i=T`
  <!-- ko if: assignment.Status != assignmentStates.Completed -->
  <div class="card m-1">
    <div class="card-body">
      <div>
        <h6>You have been designated as an action office resolver:</h6>
      </div>
      <div class="d-flex justify-content-between">
        <div>
          <div>
            Assignee: <span data-bind="text: assignment.Assignee?.Title"></span>
          </div>
          <div>
            Request Org:
            <span data-bind="text: assignment.RequestOrg?.Title"></span>
          </div>
        </div>
        <div>
          <p>Please confirm you have completed any necessary actions!</p>
          <div class="d-flex justify-content-start">
            <button
              class="ms-3 btn btn-success"
              data-bind="click: completeHandler"
            >
              Confirm
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- /ko -->
  <!-- ko if: assignment.Status == assignmentStates.Completed -->
  <div class="alert alert-success">
    <strong>Thank you for confirming!</strong>
  </div>
  <!-- /ko -->
`;var je=class extends M{constructor(e){super(),console.log("hello from resolver module",e),this.assignment=e.assignment,this.completeAssignment=e.completeAssignment}assignmentStates=E;complete=async()=>{console.log("complete"),this.completeAssignment(this.assignment,E.Completed)};completeHandler=()=>{console.log("approved");let e=this.assignment;if(e.userIsDirectlyAssigned(I())){this.complete();return}if(e.userIsInRequestOrg(I())){confirm(`This assignment is assigned to ${e.Assignee.Title}. Do you want to complete on their behalf? `)&&this.complete();return}alert("You are not authorized to approve this request!")};static name="resolver-actions";static template=_i};var _e={view:"default-constrained-view",edit:"default-constrained-edit",new:"default-constrained-edit"},ve=class extends Ge{constructor(e){super(e)}toJSON=()=>{let e={};return Object.keys(this.FieldMap).map(t=>e[t]=this.FieldMap[t]?.get()),e};fromJSON(e){window.DEBUG&&console.log("Setting constrained entity from JSON",e),Object.keys(e).map(t=>this.FieldMap[t]?.set(e[t]))}FormFields=ko.pureComputed(()=>Object.values(this.FieldMap).filter(e=>e?.Visible()));FormFieldKeys=ko.pureComputed(()=>Object.keys(this.FieldMap).filter(e=>this.FieldMap[e]?.Visible()));validate=(e=!0)=>(Object.values(this.FieldMap).map(t=>t?.validate&&t.validate(e)),this.ShowErrors(e),this.Errors());ShowErrors=ko.observable(!1);Errors=ko.pureComputed(()=>Object.values(this.FieldMap).filter(e=>e?.Errors&&e.Errors()).flatMap(e=>e.Errors()));IsValid=ko.pureComputed(()=>!this.Errors().length);components=_e};var Bi=T`
  <div>
    <div class="row mb-2 form-fields" data-bind="foreach: FormFields">
      <div
        class="col pb-3 form-field-component"
        data-bind="component: {
        name: components.edit, params: $data}, 
        class: width"
      ></div>
    </div>
  </div>
`;var Ui=T`
  <div>
    <div class="row row-cols-1 row-cols-md-2" data-bind="foreach: FormFields">
      <div
        class="col pb-2"
        data-bind="component: {name: components.view, params: $data}, class: width"
      ></div>
    </div>
  </div>
`;var Tt=class extends M{constructor({Entity:e}){super(),Object.assign(this,e)}},ke=class extends Tt{constructor(e){super(e)}static name=_e.view;static template=Ui},Ae=class extends Tt{constructor(e){super(e)}static name=_e.edit;static template=Bi};var Te={PendingAssignment:"Pending Assignment",PendingApproval:"Pending Approval",PendingAction:"Pending Action",PendingResolution:"Pending Resolution",Notification:"Notification",Closed:"Closed"},qe=class s{constructor({ID:e,Title:t}){this.ID=e,this.Title=t,this.LookupValue=t}static Create=function({ID:e,LookupValue:t}){return new s({ID:e,Title:t})};static FindInStore=function(e){return!e||!e.ID?null:Je().find(t=>t.ID==e.ID)};static GetCompletedStage=function(){return Je().find(e=>e.ActionType==Te.Closed)};static Views={All:["ID","Title","ServiceType","Step","ActionType","ActionTargetStage","Assignee","WildCardAssignee","RequestOrg","AssignmentFunction","ActionComponentName"]};static ListDef={name:"ConfigPipelines",title:"ConfigPipelines",fields:s.Views.All}},Je=ko.observableArray();var B={Paused:"Paused",Resumed:"Resumed",Assigned:"Assigned",Unassigned:"Unassigned",Created:"Created",Advanced:"Advanced",Approved:"Approved",Completed:"Completed",Rejected:"Rejected",Closed:"Closed"},Ke=class{constructor(){}PipelineStage;FieldMap={PipelineStage:{get:()=>this.PipelineStage,set:e=>{this.PipelineStage=qe.FindInStore(e)}}};static Views={All:["ID","Title","PipelineStage","ActionType","Description","Author","Created"]};static ListDef={name:"Actions",title:"Actions",fields:this.Views.All}};var Be=class{constructor(){}static Views={All:["ID","Title","IsActive","Request","FileLeafRef","FileRef","Author","Created"]};static ListDef={name:"Attachments",title:"Attachments",fields:this.Views.All,isLib:!0}};var Xe=class{constructor(){}static Views={All:["ID","Title","Comment","NotificationSent","Author","IsActive","Created"]};static ListDef={name:"Comments",title:"Comments",fields:this.Views.All}};var kt=ko.observable(),xt=class s{static Views={All:["ID","Title","Date","Repeating"]};static ListDef={name:"ConfigHolidays",title:"ConfigHolidays",fields:s.Views.All}};var qt=class{constructor(){}static Views={All:["ID","Title","To","ToString","CC","CCString","BCC","Body","Sent","DateSent","Request","DateToSend"]};static ListDef={name:"Notifications",title:"Notifications",fields:this.Views.All}};var F={draft:"Draft",open:"Open",paused:"Paused",fulfilled:"Completed",cancelled:"Cancelled",rejected:"Rejected"},Ue={inProgress:"In Progress",waitingOnCustomer:"Waiting on Customer",researching:"Researching"};var De={MyRequests:"my-requests-tab",NewRequest:"new-request-tab",RequestDetail:"request-detail-tab"},it="/sites/CGFS/Style Library/apps/wo/src",Gi=_spPageContextInfo.webTitle;var ft={};Ti(ft,{Access:()=>ss,AccessFletc:()=>as,BaseServiceDetail:()=>y,CH_Access:()=>is,CH_Conference:()=>ns,CH_Equip_Repair:()=>ls,CH_Furniture:()=>ds,CH_HR_Training:()=>cs,CH_Mobile:()=>us,CH_Notice:()=>ps,CH_Overtime:()=>ht,CH_Reconfig:()=>ms,CH_Supplies:()=>hs,CH_Telework:()=>fs,CH_Transport:()=>gs,CH_Voicemail:()=>bs,CashMgmtRequest:()=>vs,CashierOperationsRequest:()=>ws,CollectionsRequest:()=>As,ContractorSupplement:()=>Ee,DVCSetup:()=>ys,DiplomaticPassportVisa:()=>$s,FPCodesRequest:()=>Ss,FPTravelRequest:()=>Cs,FiscalIrregularities:()=>Qs,ITHardware:()=>Rs,ITSoftware:()=>Ws,Ironkey:()=>Ts,Locksmith:()=>xs,Mobile:()=>ks,MotorPool:()=>qs,Overtime:()=>Fs,Presentation:()=>Ds,PropertySpace:()=>Ks,Requisition:()=>Ps,SDMAdminRequest:()=>Es,Telework:()=>Ls,TemplateRequest:()=>ei,TierIRequest:()=>Os,getApmOrg:()=>Ot,getCorOrg:()=>Vs,getGtmOrg:()=>Lt});var te=class{constructor({displayName:e,instructions:t=null,isRequired:i=!1,width:o,Visible:a=ko.pureComputed(()=>!0)}){this.displayName=e,this.instructions=t,this.isRequired=i,this.Visible=a,this.width=o?"col-md-"+o:"col-md-6",this.addFieldRequirement(va(this))}Value=ko.observable();get=()=>this.Value();set=e=>this.Value(e);toString=ko.pureComputed(()=>this.Value());toJSON=()=>this.Value();fromJSON=e=>this.Value(e);validate=(e=!0)=>(this.ShowErrors(e),this.Errors());_fieldValidationRequirements=ko.observableArray();Errors=ko.pureComputed(()=>this.Visible()?this._fieldValidationRequirements().filter(t=>t.requirement()).map(t=>t.error):[]);addFieldRequirement=e=>this._fieldValidationRequirements.push(e);IsValid=ko.pureComputed(()=>!this.Errors().length);ShowErrors=ko.observable(!1);ValidationClass=ko.pureComputed(()=>{if(this.ShowErrors())return this.Errors().length?"is-invalid":"is-valid"})};function va(s){return{requirement:ko.pureComputed(()=>{if(!ko.unwrap(s.isRequired))return!1;let t=ko.unwrap(s.Value);return t?.constructor==Array?!t.length:t==null}),error:new Re("text-field","required-field",`${ko.utils.unwrapObservable(s.displayName)} is required!`)}}var H=String.raw;function se(s){ko.components.register(s.edit,{template:s.editTemplate,viewModel:s}),ko.components.register(s.view,{template:s.viewTemplate,viewModel:s})}var Y=class{constructor(e){Object.assign(this,e)}_id;getUniqueId=()=>(this._id||(this._id="field-"+Math.floor(Math.random()*1e4)),this._id);Errors=ko.pureComputed(()=>this.ShowErrors()?this.isRequired?this.Value()?[]:[new ValidationError("text-field","required-field",this.displayName+" is required!")]:[]:[]);ShowErrors=ko.observable(!1);ValidationClass=ko.pureComputed(()=>{if(this.ShowErrors())return this.Errors().length?"is-invalid":"is-valid"});static viewTemplate=H`
    <div class="fw-semibold" data-bind="text: displayName"></div>
    <div data-bind="text: toString()"></div>
  `;static editTemplate=H`<div>Uh oh!</div>`};var wa=H`
  <h5>
    <span data-bind="text: displayName"></span
    ><span data-bind="if: isRequired" class="fw-bold text-danger">*</span>:
  </h5>
  <!-- ko ifnot: entityType -->
  <div class="alert alert-danger">Missing entity type</div>
  <!-- /ko -->
  <!-- ko if: entityType -->
  <!-- ko ifnot: multiple -->
  <div
    data-bind="component: {name: Value()?.components.edit, params: {Entity: Value()}}"
  ></div>
  <!-- /ko -->
  <!-- ko if: multiple -->
  <table class="table">
    <thead>
      <tr data-bind="">
        <!-- ko foreach: Cols -->
        <th data-bind="text: displayName"></th>
        <!-- /ko -->
        <th>Actions</th>
      </tr>
    </thead>
    <tbody data-bind="">
      <!-- ko foreach: {data: Value, as: 'row'} -->
      <tr data-bind="">
        <!-- ko foreach: {data: row.FormFields, as: 'col'} -->
        <td data-bind="text: col.toString"></td>
        <!-- /ko -->
        <td>
          <i
            title="remove item"
            class="fa-solid fa-trash pointer"
            data-bind="click: $parent.remove.bind(row)"
          ></i>
        </td>
      </tr>
      <!-- /ko -->
      <tr>
        <!-- ko foreach: NewItem()?.FormFields -->
        <td>
          <div
            data-bind="component: {name: components.edit, params: $data}"
          ></div>
        </td>
        <!-- /ko -->
        <td class="align-bottom">
          <button
            title="add and new"
            type="button"
            data-bind="click: submit"
            class="btn btn-success"
          >
            Add +
          </button>
        </td>
      </tr>
    </tbody>
  </table>
  <!-- /ko -->
  <!-- /ko -->
`,Sa=H`
  <h5>
    <span data-bind="text: displayName"></span
    ><span data-bind="if: isRequired" class="fw-bold text-danger">*</span>:
  </h5>
  <!-- ko ifnot: entityType -->
  <div class="alert alert-danger">Missing entity type</div>
  <!-- /ko -->
  <!-- ko if: entityType -->
  <!-- ko ifnot: multiple -->
  <!-- ko if: Value -->
  <div
    data-bind="component: {name: Value().components.view, params: {Entity: Value()}}"
  ></div>
  <!-- /ko -->
  <!-- /ko -->
  <!-- ko if: multiple -->
  <table class="table">
    <thead>
      <tr data-bind="">
        <!-- ko foreach: Cols -->
        <th data-bind="text: displayName"></th>
        <!-- /ko -->
      </tr>
    </thead>
    <tbody data-bind="">
      <!-- ko foreach: {data: Value, as: 'row'} -->
      <tr data-bind="">
        <!-- ko foreach: {data: row.FormFields, as: 'col'} -->
        <td data-bind="text: col.toString()"></td>
        <!-- /ko -->
      </tr>
      <!-- /ko -->
    </tbody>
  </table>
  <!-- /ko -->
  <!-- /ko -->
`,ot=class extends Y{constructor(e){super(e)}static viewTemplate=Sa;static editTemplate=wa;static view="blob-view";static edit="blob-edit";static new="blob-edit"};se(ot);var Aa=H`
  <div class="form-check form-switch">
    <label class="form-check-label"
      ><span class="fw-semibold" data-bind="text: displayName"></span>
      <input
        class="form-check-input"
        type="checkbox"
        role="switch"
        data-bind="checked: Value"
      />
      <!-- ko if: instructions -->
      <div
        class="fw-lighter fst-italic text-secondary"
        data-bind="html: instructions"
      ></div>
      <!-- /ko -->
    </label>
  </div>
`,Ca=H`
  <div class="form-check form-switch">
    <label class="form-check-label"
      ><span class="fw-semibold" data-bind="text: displayName"></span>
      <input
        class="form-check-input"
        type="checkbox"
        role="switch"
        data-bind="checked: Value"
        disabled
      />
    </label>
  </div>
`,at=class extends Y{constructor(e){super(e)}static viewTemplate=Ca;static editTemplate=Aa;static view="checkbox-view";static edit="checkbox-edit";static new="checkbox-edit"};se(at);var Ra=H`
  <label class="fw-semibold"
    ><span data-bind="text: displayName"></span
    ><span data-bind="if: isRequired" class="fw-bold text-danger">*</span>:
    <input
      class="form-control"
      data-bind="value: inputBinding, class: ValidationClass, attr: {'type': type}"
    />
    <!-- ko if: instructions -->
    <div
      class="fw-lighter fst-italic text-secondary"
      data-bind="html: instructions"
    ></div>
    <!-- /ko -->
  </label>
  <!-- ko if: ShowErrors -->
  <!-- ko foreach: Errors -->
  <div class="fw-semibold text-danger" data-bind="text: description"></div>
  <!-- /ko -->
  <!-- /ko -->
`,nt=class extends Y{constructor(e){super(e)}static editTemplate=Ra;static view="date-view";static edit="date-edit";static new="date-edit"};se(nt);var Ta=H`
  <label class="fw-semibold"
    ><span data-bind="text: displayName"></span
    ><span data-bind="if: isRequired" class="fw-bold text-danger">*</span>:
    <!-- ko if: isSearch -->
    <div data-bind="text: toString()"></div>
    <input class="form-control" data-bind="" />
    <!-- /ko -->
    <!-- ko ifnot: isSearch -->
    <!-- ko if: multiple -->
    <select
      class="form-select"
      name=""
      id=""
      multiple="true"
      data-bind="options: Options, 
  optionsCaption: 'Select...', 
  selectedOptions: Value,
  optionsText: optionsText,
  class: ValidationClass"
    ></select>
    <div class="fst-italic fw-light">Hold ctrl to select multiple.</div>
    <!-- /ko -->
    <!-- ko ifnot: multiple -->
    <select
      class="form-select"
      name=""
      id=""
      data-bind="options: Options, 
    optionsCaption: 'Select...', 
    value: Value,
    optionsText: optionsText,
    class: ValidationClass"
    ></select>
    <!-- /ko -->
    <!-- /ko -->
    <!-- ko if: instructions -->
    <div
      class="fw-lighter fst-italic text-secondary"
      data-bind="html: instructions"
    ></div>
    <!-- /ko -->
  </label>
  <!-- ko if: ShowErrors -->
  <!-- ko foreach: Errors -->
  <div class="fw-semibold text-danger" data-bind="text: description"></div>
  <!-- /ko -->
  <!-- /ko -->
`,rt=class extends Y{constructor(e){super(e)}static editTemplate=Ta;static view="lookup-view";static edit="lookup-edit";static new="lookup-edit"};se(rt);var xa=H`
  <label class="fw-semibold w-100"
    ><span data-bind="text: displayName"></span
    ><span data-bind="if: isRequired" class="fw-bold text-danger">*</span>:
    <!-- ko ifnot: spGroupId -->
    <div
      data-bind="attr: {id: getUniqueId()}, 
      people: Value, 
      pickerOptions: pickerOptions,
      class: ValidationClass"
    ></div>
    <!-- /ko -->
    <!-- ko if: ShowUserSelect -->
    <select
      class="form-select"
      name=""
      id=""
      data-bind="options: userOpts, 
        optionsCaption: 'Select...', 
        optionsText: 'Title',
        value: ValueFunc,
        class: ValidationClass"
    ></select>
    <!-- /ko -->
    <!-- ko if: instructions -->
    <div
      class="fw-lighter fst-italic text-secondary"
      data-bind="html: instructions"
    ></div>
    <!-- /ko -->
  </label>
  <!-- ko if: ShowErrors -->
  <!-- ko foreach: Errors -->
  <div class="fw-semibold text-danger" data-bind="text: description"></div>
  <!-- /ko -->
  <!-- /ko -->
`,ka=H`
  <div class="fw-semibold" data-bind="text: displayName"></div>
  <!-- ko if: toString -->
  <!-- ko ifnot: multiple -->
  <div
    data-bind="text: toString, 
      attr: {title: Value()?.LoginName}"
  ></div>
  <!-- /ko -->
  <!-- ko if: multiple -->
  <ul data-bind="foreach: Value">
    <li data-bind="attr: {title: LoginName}, text: Title"></li>
  </ul>
  <!-- /ko -->
  <!-- /ko -->
  <!-- ko ifnot: toString -->
  <div class="fst-italic">Not provided.</div>
  <!-- /ko -->
`,lt=class extends Y{constructor(e){super(e)}ValueFunc=ko.pureComputed({read:()=>this.Value()?ko.unwrap(this.userOpts).find(t=>t.ID==this.Value().ID):void 0,write:e=>{ko.unwrap(this.userOpts)&&this.Value(e)}});ShowUserSelect=ko.pureComputed(()=>this.spGroupName?ko.unwrap(this.userOpts).length:!1);static viewTemplate=ka;static editTemplate=xa;static view="people-view";static edit="people-edit";static new="people-edit"};se(lt);var qa=H`
  <label class="fw-semibold"
    ><span data-bind="text: displayName"></span
    ><span data-bind="if: isRequired" class="fw-bold text-danger">*</span>:
  </label>
  <div class="row row-cols-auto" data-bind="foreach: GetSelectedOptions">
    <div class="col pb-1">
      <div class="input-group input-group-sm">
        <div
          class="input-group-text"
          data-bind="text: $parent.optionsText($data)"
        ></div>
        <button
          type="button"
          class="btn btn-sm btn-outline-secondary"
          style="min-width: 1.5rem"
          data-bind="click: $parent.removeSelection"
        >
          <svg
            class="position-absolute top-50 start-50 translate-middle"
            style="width: 1rem; height: 1rem"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            ></path>
          </svg>
        </button>
      </div>
    </div>
  </div>
  <div
    tabindex="-1"
    data-bind="event: {
  focusin: setInputGroupFocus,
  focusout: removeInputGroupFocus,
  }"
    class="position-relative"
  >
    <input
      placehold="Search to select..."
      class="form-control form-control-sm"
      data-bind="textInput: FilterText"
    />
    <div
      data-bind="foreach: FilteredOptions, visible: InputGroupFocused"
      class="list-group overflow-y-scroll position-absolute w-100"
      style="max-height: 200px"
    >
      <button
        type="button"
        class="list-group-item list-group-item-action z-3"
        data-bind="click: $parent.addSelection, 
      text: $parent.optionsText($data)"
      ></button>
    </div>
  </div>
  <!-- ko if: instructions -->
  <div
    class="fw-lighter fst-italic text-secondary"
    data-bind="html: instructions"
  ></div>
  <!-- /ko -->
  <!-- ko if: ShowErrors -->
  <!-- ko foreach: Errors -->
  <div class="fw-semibold text-danger" data-bind="text: description"></div>
  <!-- /ko -->
  <!-- /ko -->
`,ts=class extends Y{constructor(e){super(e),this.Options=e.Options,this.Value=e.Value,this.optionsText=e.optionsText??(t=>t),this.multiple=e.multiple,this.OptionsCaption=e.OptionsCaption??"Select..."}GetSelectedOptions=ko.pureComputed(()=>this.multiple?this.Value():this.Value()?[this.Value()]:[]);InputGroupFocused=ko.observable();setFocus=()=>this.InputGroupFocused(!0);FilterText=ko.observable();FilteredOptions=ko.pureComputed(()=>this.Options().filter(e=>this.GetSelectedOptions().indexOf(e)>=0?!1:this.FilterText()?this.optionsText(e).toLowerCase().includes(this.FilterText().toLowerCase()):!0));addSelection=(e,t)=>{console.log("selected",e),t.target.nextElementSibling&&t.target.nextElementSibling.focus(),this.multiple?this.Value.push(e):this.Value(e)};removeSelection=e=>this.multiple?this.Value.remove(e):this.Value(null);setInputGroupFocus=()=>{this.InputGroupFocused(!0),clearTimeout(this.focusOutTimeout)};removeInputGroupFocus=(e,t)=>{this.focusOutTimeout=window.setTimeout(()=>{this.InputGroupFocused(!1)},0)};static editTemplate=qa;static view="search-select-view";static edit="search-select-edit";static new="search-select-new"};se(ts);var Fa=H`
  <label class="fw-semibold"
    ><span data-bind="text: displayName"></span
    ><span data-bind="if: isRequired" class="fw-bold text-danger">*</span>:
    <!-- ko if: multiple -->
    <select
      class="form-select"
      name=""
      id=""
      multiple="true"
      data-bind="options: Options, 
  optionsCaption: 'Select...', 
  selectedOptions: Value,
  class: ValidationClass"
    ></select>
    <div class="fst-italic fw-light">Hold ctrl to select multiple.</div>
    <!-- /ko -->
    <!-- ko ifnot: multiple -->
    <select
      class="form-select"
      name=""
      id=""
      data-bind="options: Options, 
    optionsCaption: 'Select...', 
    value: Value,
    class: ValidationClass"
    ></select>
    <!-- /ko -->
    <!-- ko if: instructions -->
    <div
      class="fw-lighter fst-italic text-secondary"
      data-bind="html: instructions"
    ></div>
    <!-- /ko -->
  </label>
  <!-- ko if: ShowErrors -->
  <!-- ko foreach: Errors -->
  <div class="fw-semibold text-danger" data-bind="text: description"></div>
  <!-- /ko -->
  <!-- /ko -->
`,dt=class extends Y{constructor(e){super(e)}static editTemplate=Fa;static view="select-view";static edit="select-edit";static new="select-edit"};se(dt);var Ia=H`
  <div class="component field">
    <!-- ko if: isRichText -->
    <label class="fw-semibold"
      ><span data-bind="text: displayName"></span
      ><span data-bind="if: isRequired" class="fw-bold text-danger">*</span
      >:</label
    >
    <!-- ko if: instructions -->
    <div
      class="fw-lighter fst-italic text-secondary"
      data-bind="html: instructions"
    ></div>
    <!-- /ko -->
    <div
      class="richtext-field"
      data-bind="childrenComplete: childrenHaveLoaded"
    >
      <!-- Create the editor container -->
      <div
        class="form-control"
        data-bind="attr: {'id': getUniqueId()}, class: ValidationClass"
        style="height: 150px"
      >
        <div data-bind="html: Value"></div>
      </div>
    </div>
    <!-- /ko -->
    <!-- ko ifnot: isRichText -->
    <label class="fw-semibold"
      ><span data-bind="text: displayName"></span
      ><span data-bind="if: isRequired" class="fw-bold text-danger">*</span>:
      <!-- ko if: instructions -->
      <div
        class="fw-lighter fst-italic text-secondary"
        data-bind="html: instructions"
      ></div>
      <!-- /ko -->
      <textarea
        name=""
        id=""
        cols="30"
        rows="10"
        class="form-control"
        data-bind="textInput: Value, class: ValidationClass, attr: attr"
      ></textarea>
    </label>
    <!-- /ko -->
    <!-- ko if: ShowErrors -->
    <!-- ko foreach: Errors -->
    <div class="fw-semibold text-danger" data-bind="text: description"></div>
    <!-- /ko -->
    <!-- /ko -->
  </div>
`,Da=H`
  <div class="fw-semibold" data-bind="text: displayName"></div>
  <!-- ko if: Value -->
  <!-- ko if: isRichText -->
  <div data-bind="html: Value"></div>
  <!-- /ko -->
  <!-- ko ifnot: isRichText -->
  <div data-bind="text: Value"></div>
  <!-- /ko -->
  <!-- /ko -->
  <!-- ko ifnot: Value -->
  <div class="fst-italic">Not provided.</div>
  <!-- /ko -->
`,ct=class extends Y{constructor(e){super(e)}childrenHaveLoaded=e=>{this.initializeEditor()};getToolbarId=()=>"toolbar-"+this.getUniqueId();initializeEditor(){let e=[["bold","italic","underline","strike"],["link"],["blockquote","code-block"],[{header:1},{header:2}],[{list:"ordered"},{list:"bullet"}],[{script:"sub"},{script:"super"}],[{indent:"-1"},{indent:"+1"}],[{direction:"rtl"}],[{size:["small",!1,"large","huge"]}],[{header:[1,2,3,4,5,6,!1]}],[{color:[]},{background:[]}],[{font:[]}],[{align:[]}],["clean"]];var t=new Quill("#"+this.getUniqueId(),{modules:{toolbar:e},theme:"snow"});let i=this.Value;i.subscribe(o=>{o==""&&t.setText("")}),t.on("text-change",function(o,a,d){i(t.root.textContent?t.root.innerHTML:"")})}static viewTemplate=Da;static editTemplate=Ia;static view="text-area-view";static edit="text-area-edit";static new="text-area-edit"};se(ct);var Pa=H`
  <label class="fw-semibold"
    ><span data-bind="text: displayName"></span
    ><span data-bind="if: isRequired" class="fw-bold text-danger">*</span>:
    <input
      class="form-control"
      data-bind="textInput: Value, class: ValidationClass, attr: attr"
    />
    <!-- ko if: instructions -->
    <div
      class="fw-lighter fst-italic text-secondary"
      data-bind="html: instructions"
    ></div>
    <!-- /ko -->
  </label>
  <!-- ko if: ShowErrors -->
  <!-- ko foreach: Errors -->
  <div class="fw-semibold text-danger" data-bind="text: description"></div>
  <!-- /ko -->
  <!-- /ko -->
`,ut=class extends Y{constructor(e){super(e)}static editTemplate=Pa;static view="text-view";static edit="text-edit";static new="text-edit"};se(ut);var Pe=class s extends te{constructor(e){super(e),this.entityType=e.entityType,this.multiple=e.multiple,this.multiple&&(this.Value=ko.observableArray()),ko.isObservable(this.entityType)&&this.entityType.subscribe(this.updateEntityTypeHandler),this.updateEntityTypeHandler(ko.unwrap(this.entityType))}toString=ko.pureComputed(()=>`${this.Value()?.length??"0"} items`);toJSON=ko.pureComputed(()=>this.multiple?this.Value().map(e=>e.toJSON()):this.Value()?.toJSON());fromJSON=e=>{if(e){if(!this.multiple){this.Value()?.fromJSON(e);return}this.Value.removeAll(),e.map(t=>{let i=new this.entityConstructor;i.fromJSON(t),this.Value.push(i)})}};get=()=>JSON.stringify(this.toJSON());blob;set=e=>{window.DEBUG&&console.log(e),this.blob=e,e?.constructor!=s&&this.fromJSON(JSON.parse(e))};get entityConstructor(){return ko.utils.unwrapObservable(this.entityType)}Cols=ko.pureComputed(()=>ko.unwrap(this.entityType)?new this.entityConstructor().FormFields():[]);NewItem=ko.observable();submit=()=>{(this.NewItem()?.validate()).length||(this.Value.push(this.NewItem()),this.NewItem(new this.entityConstructor))};add=e=>this.Value.push(e);remove=e=>this.Value.remove(e);updateEntityTypeHandler=e=>{e&&(this.multiple?this.NewItem(new this.entityConstructor):this.Value(new this.entityConstructor),this.blob&&this.fromJSON(JSON.parse(this.blob)))};applyValueToTypedValues=()=>{if(!this.Value()||!this.TypedValue())return;if(!this.multiple){Fe(this.Value(),this.TypedValue());return}let e=this.Value()?.map(t=>{let i=new this.entityConstructor;return Fe(t,i),i});this.TypedValues(e)};components=ot};var Ie=class extends te{constructor(e){super(e)}components=at};var V={date:"date",datetime:"datetime-local"},P=class extends te{constructor(e){super(e),this.type=e.type??V.date}toString=ko.pureComputed(()=>{switch(this.type){case V.date:return this.toLocaleDateString();case V.datetime:return this.toLocaleString();default:return""}});toSortableDateString=()=>this.Value()?.format("yyyy-MM-dd");toLocaleDateString=()=>this.Value()?.toLocaleDateString();toLocaleString=()=>this.Value()?.toLocaleString();toInputDateString=()=>{let e=this.Value();return[e.getUTCFullYear().toString().padStart(4,"0"),(e.getUTCMonth()+1).toString().padStart(2,"0"),e.getUTCDate().toString().padStart(2,"0")].join("-")};toInputDateTimeString=()=>this.Value().format("yyyy-MM-ddThh:mm");get=ko.pureComputed(()=>!this.Value()||isNaN(this.Value().valueOf())?null:this.Value().toISOString());set=e=>{if(!e)return null;e.constructor.getName()!="Date"&&(e=new Date(e)),e.getTimezoneOffset(),this.Value(e)};inputBinding=ko.pureComputed({read:()=>{if(!this.Value())return null;switch(this.type){case V.date:return this.toInputDateString();case V.datetime:return this.toInputDateTimeString();default:return null}},write:e=>{e&&this.Value(new Date(e))}});components=nt};var Ve=class extends te{constructor({displayName:e,type:t,isRequired:i=!1,Visible:o,Options:a=null,optionsText:d=null,multiple:m=!1,lookupCol:b=null}){super({Visible:o,displayName:e,isRequired:i}),a?this.Options=a:this.isSearch=!0,this.multiple=m,this.Value=m?ko.observableArray():ko.observable(),this.entityType=t,this.entitySet=Ne.Set(t),this.lookupCol=b??"Title",this.optionsText=d??(x=>x[this.lookupCol])}isSearch=!1;Options=ko.observableArray();IsLoading=ko.observable(!1);HasLoaded=ko.observable(!1);refresh=async()=>{if(this.Value()){if(this.IsLoading(!0),!this.multiple){await this.entitySet.LoadEntity(this.Value()),this.IsLoading(!1),this.HasLoaded(!0);return}await Promise.all(this.Value().map(async e=>await this.entitySet.LoadEntity(e))),this.IsLoading(!1),this.HasLoaded(!0)}};ensure=async()=>{if(!this.HasLoaded()){if(this.IsLoading())return new Promise((e,t)=>{let i=this.IsLoading.subscribe(o=>{o||(i.dispose(),e())})});await this.refresh()}};toString=ko.pureComputed(()=>this.Value()?this.multiple?this.Value().map(e=>$i(e,this.lookupCol)).join(", "):$i(this.Value(),this.lookupCol):"");get=()=>{if(!this.Value())return;if(this.multiple)return this.Value().map(t=>({ID:t.ID,LookupValue:t.LookupValue,Title:t.Title}));let e=this.Value();return{ID:e.ID,LookupValue:e.LookupValue,Title:e.Title}};set=e=>{if(!e){this.Value(e);return}if(this.multiple){let t=Array.isArray(e)?e:e.results??e.split("#;");this.Value(t.map(i=>this.findOrCreateNewEntity(i)));return}this.Value(this.findOrCreateNewEntity(e)),e&&!this.toString()&&this.ensure()};findOrCreateNewEntity=e=>{if(this.entityType.FindInStore){let t=this.entityType.FindInStore(e);if(t)return t;console.warn(`Could not find entity in store: ${this.entityType.name}`,e)}return this.entityType.Create?this.entityType.Create(e):new this.entityType(e)};components=rt};function $i(s,e){if(s.FieldMap&&s.FieldMap[e]){let t=s.FieldMap[e];return typeof t=="function"?t():t.toString&&typeof t.toString=="function"?t.toString():t.get&&typeof t.get=="function"?t.get():t.obs?t.obs():t}return s[e]??""}var pt=(s,e)=>s.Title>e.Title?1:s.Title<e.Title?-1:0,ji=s=>(e,t)=>e[s]>t[s]?1:e[s]<t[s]?-1:0,Hi=()=>{let s=new Date;return s.format("yyMMdd")+"-"+s.getTime()%1e5};var k=class extends te{constructor(e){super(e),this.spGroupName=e.spGroupName??null,this.multiple=e.multiple??!1,this.Value=this.multiple?ko.observableArray():ko.observable(),ko.isObservable(this.spGroupName)&&this.spGroupName.subscribe(this.spGroupNameChangedHandler),ko.unwrap(this.spGroupName)&&this.spGroupNameChangedHandler(ko.unwrap(this.spGroupName))}spGroupId=ko.observable();userOpts=ko.observableArray();expandUsers=ko.observable(!1);spGroupNameChangedHandler=async e=>{e||(this.userOpts.removeAll(),this.spGroupId(null));let t=await st(e);this.spGroupId(t.ID);let i=await Li(e);this.userOpts(i.sort(pt))};pickerOptions=ko.pureComputed(()=>{let e=ko.unwrap(this.spGroupId),t={AllowMultipleValues:this.multiple};return e&&(t.SharePointGroupID=e),t});toString=ko.pureComputed(()=>this.multiple?this.Value()?.map(e=>e.Title):this.Value()?.Title);set=e=>{if(!this.multiple){this.Value(K.Create(e));return}if(!e){this.Value.removeAll();return}let t=e.results??e;if(!t.length){this.Value.removeAll();return}this.Value(t.map(i=>K.Create(i)))};components=lt};var h=class extends te{constructor({displayName:e,isRequired:t=!1,Visible:i,options:o,multiple:a=!1,optionsText:d}){super({Visible:i,displayName:e,isRequired:t}),this.Options(o),this.multiple=a,this.Value=a?ko.observableArray():ko.observable(),this.optionsText=d}toString=ko.pureComputed(()=>this.multiple?this.Value().join(", "):this.Value());get=()=>this.Value();set=e=>{if(e&&this.multiple){Array.isArray(e)?this.Value(e):this.Value(e.results??e.split(";#"));return}this.Value(e)};Options=ko.observableArray();components=dt};var W=class extends te{constructor(e){super(e),this.isRichText=e.isRichText,this.attr=e.attr??{}}components=ct};var l=class extends te{constructor(e){super(e),this.attr=e.attr??{}}components=ut};var Ft={pending:"Pending",aging:"Aging",completed:"Completed"},mt=class{constructor({msg:e,blocking:t}){this.msg=e,this.blocking=t,this.Status(Ft.pending),this.timeout=this.setTimeout()}msg;blocking;Status=ko.observable();timeout;timeoutPeriod=5e3;setTimeout=()=>window.setTimeout(()=>{console.warn("this task is aging:",this),this.Status(Ft.aging)},this.timeoutPeriod);resetTimeout=()=>{window.clearTimeout(this.timeout),this.timeout=this.setTimeout()};markComplete=()=>{window.clearTimeout(this.timeout),this.Status(Ft.completed)};IsBlocking=ko.pureComputed(()=>this.blocking&&this.Status()!=Ft.completed)},It=class extends mt{constructor({msg:e,blocking:t}){super({msg:e,blocking:t})}timeoutPeriod=8e3;updateProgress=({percentDone:e})=>{this.Status(`${parseInt(e*100)}%`)}};var y=class extends ve{constructor(e){super(e),e?.Request&&(this.Request=e.Request)}Request;FieldMap={...this.FieldMap,Request:this.Request}};var ss=class s extends y{constructor(e){super(e)}accessTypeOpts=["Normal work day","24/7","FLETC","Other"];employeeTypeOpts=["CGFS Government","CGFS Contractor","Other"];AccessType=new h({isRequired:!0,displayName:"Access Type",options:this.accessTypeOpts});EmployeeType=new h({isRequired:!0,displayName:"Employee Type",options:this.employeeTypeOpts});FullName=new l({displayName:"Full Name",isRequired:!0});BadgeNum=new l({displayName:"Badge Num",isRequired:!0});ExpirationDate=new P({displayName:"Expiration Date",isRequired:!0});Locations=new l({displayName:"Locations",isRequired:!0});FieldMap={...this.FieldMap,AccessType:this.AccessType,EmployeeType:this.EmployeeType,FullName:this.FullName,BadgeNum:this.BadgeNum,ExpirationDate:this.ExpirationDate,Locations:this.Locations};static Views={All:["ID","Title","AccessType","EmployeeType","FullName","BadgeNum","ExpirationDate","Locations","Request"]};static ListDef={name:"st_access",title:"st_access",isServiceType:!0,fields:s.Views.All};static uid="access"};var is=class s extends y{constructor(e){super(e)}accessTypeOpts=["Normal work day","24/7","Permanant","Temporary"];employeeTypeOpts=["CGFS Government","CGFS Contractor","Other"];AccessDates=new Pe({displayName:"Access Dates",entityType:os,multiple:!0,width:12,isRequired:!0});AccessType=new h({isRequired:!0,displayName:"Access Type",options:this.accessTypeOpts});BadgeNum=new l({displayName:"Badge Num",isRequired:!0});EmployeeType=new h({isRequired:!0,displayName:"Employee Type",options:this.employeeTypeOpts});Supervisor=new k({displayName:"Supervisor",isRequired:!0});FieldMap={...this.FieldMap,AccessDates:this.AccessDates,AccessType:this.AccessType,BadgeNum:this.BadgeNum,EmployeeType:this.EmployeeType,FullName:this.FullName,Locations:this.Locations,Supervisor:this.Supervisor};static Views={All:["ID","Title","AccessType","AccessDates","BadgeNum","EmployeeType","FullName","Locations","Supervisor","Request"]};static ListDef={name:"st_ch_access",title:"st_ch_access",isServiceType:!0,fields:s.Views.All};static uid="ch_access"},os=class extends ve{FieldMap={StartDate:new P({displayName:"Start Date",type:V.date,isRequired:!0}),EndDate:new P({displayName:"End Date",type:V.date,isRequired:!0})}};var Na=T`
  <!-- ko if: assignment.Status != assignmentStates.Completed -->
  <div class="card m-1">
    <div class="card-body">
      <div>
        <h6>You have been designated as an action office resolver:</h6>
      </div>
      <div class="d-flex justify-content-between">
        <div>
          <div>
            Assignee: <span data-bind="text: assignment.Assignee?.Title"></span>
          </div>
          <div>
            Request Org:
            <span data-bind="text: assignment.RequestOrg?.Title"></span>
          </div>
        </div>
        <div>
          <p>
            Please click generate and send the email, then click confirm to
            proceed!
          </p>
          <div class="d-flex justify-content-start">
            <a
              target="_blank"
              class="btn btn-link"
              data-bind="attr: {href: linkGenerateEmail}"
              title="Generate email for Access Control"
            >
              Generate
            </a>

            <button
              class="ms-3 btn btn-success"
              title="Confirm email has been sent"
              data-bind="click: completeHandler"
            >
              Confirm
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- /ko -->
  <!-- ko if: assignment.Status == assignmentStates.Completed -->
  <div class="alert alert-success">
    <strong>Thank you for confirming!</strong>
  </div>
  <!-- /ko -->
`,Dt=class extends je{constructor(e){super(e),this.request=e.request,this.serviceType=e.request.RequestBodyBlob?.Value()}linkGenerateEmail=ko.pureComputed(()=>{let e="New FLETC Access Request",t="backlundpf@state.gov",i="",o=`A new access request has been submitted:
Full Name: 	${this.serviceType.FieldMap.FullName.toString()}Employee Type: 	${this.serviceType.FieldMap.EmployeeType.toString()}`;return`https://outlook.office.com/mail/deeplink/compose?to=${t}&cc=${i}&subject=${e}&body=${o}`});static name="generate-access-control-email";static template=Na};z(Dt);var as=class s extends y{constructor(e){super(e)}FieldMap={...this.FieldMap,Supervisor:new k({displayName:"Supervisor",isRequired:!0}),EmployeeType:new h({displayName:"Employee Type",options:["Direct Hire","Contractor","Visitor"],isRequired:!0}),FullName:new l({displayName:"Full Name",isRequired:!0})};static Views={All:["ID","Title","Supervisor","EmployeeType","FullName"]};static ListDef={name:"st_ch_access_fletc",title:"st_ch_access_fletc",fields:s.Views.All};static uid="ch_accessFletc"};var ns=class extends y{constructor(e){super(e)}FieldMap={...this.FieldMap,ConferenceDates:new Pe({displayName:"Conference Dates",entityType:rs,multiple:!0,width:12,isRequired:!0}),AVNeeds:new W({displayName:"A/V Needs",isRequired:!0}),ConferenceRoom:new h({displayName:"Conference Room",options:["Bldg. F Auditorium (Side A & B)","Bldg. F Auditorium (Side A Only)","Bldg. F Auditorium (Side B Only)","Bldg. F Dining Rooms"],isRequired:!0})};static uid="ch_conference"},rs=class extends ve{FieldMap={StartDate:new P({displayName:"Start Date",type:V.datetime,isRequired:!0}),EndDate:new P({displayName:"End Date",type:V.datetime,isRequired:!0})}};var ls=class s extends y{constructor(e){super(e)}FieldMap={...this.FieldMap,Location:new l({displayName:"Location",isRequired:!0}),RepairType:new h({isRequired:!0,displayName:"Type",options:["Copier","Fax Machine","Appliance","Furniture","Other"]})};static Views={All:["ID","Title","Location","RepairType"]};static ListDef={name:"st_ch_equip_repair",title:"st_ch_equip_repair",fields:s.Views.All};static uid="ch_equip_repair"};var ds=class s extends y{constructor(e){super(e)}FieldMap={...this.FieldMap,Location:new l({isRequired:!0,displayName:"Location"}),FurnitureType:new h({isRequired:!0,displayName:"Type",options:["Desk Adjustment","Chair Adjustment","Filing Cabinet","Other"]}),Supervisor:new k({displayName:"Supervisor",isRequired:!0})};static Views={All:["ID","Title","Location","FurnitureType","Supervisor"]};static ListDef={name:"st_ch_furniture",title:"st_ch_furniture",fields:s.Views.All};static uid="ch_furniture"};var cs=class s extends y{constructor(e){super(e)}FieldMap={...this.FieldMap,EmployeeType:new h({displayName:"Employee Type",options:["Direct Hire","Contractor"],isRequired:!0}),CourseTitle:new l({displayName:"Course Title",isRequired:!0}),CourseNumber:new l({displayName:"Course Number"}),Vendor:new l({displayName:"Training Provider/Vendor",isRequired:!0}),Date1:new P({displayName:"Course Date",isRequired:!0}),Cost:new l({displayName:"Training Cost"}),HiringManager:new k({displayName:"Hiring Manager",isRequired:!0})};static Views={All:["ID","Title","EmployeeType","CourseTitle","CourseNumber","Vendor","Date1","Cost","HiringManager"]};static ListDef={name:"st_ch_hr_training",title:"st_ch_hr_training",fields:s.Views.All};static uid="ch_hr_training"};var us=class s extends y{constructor(e){super(e)}FieldMap={...this.FieldMap,Supervisor:new k({displayName:"Supervisor",isRequired:!0}),PhoneNum:new l({displayName:"Phone Number"}),ServiceType:new h({displayName:"Service Type",options:["New Temporary (include dates in Justification)","Replacement/Upgrade","Return/Deactivation","Other"],isRequired:!0}),Serial:new l({displayName:"Serial Number"}),Carrier:new l({displayName:"Carrier",isRequired:!1})};static Views={All:["ID","Title","Supervisor","PhoneNum","ServiceType","Serial","Carrier"]};static ListDef={name:"st_ch_mobile",title:"st_ch_mobile",fields:s.Views.All};static uid="ch_mobile"};var ps=class s extends y{constructor(e){super(e)}FieldMap={...this.FieldMap,DistributionGroup:new h({displayName:"Distribution Group",options:["All CGFS CHS [Direct hires/contractors]","All CHS Bureaus + Passport Center [Direct hires/contractors]","GS 15 managing director distro list","Supervisors CHS"],isRequired:!0}),NoticeDates:new W({displayName:"Notification Dates",instructions:"*Please also include reminder dates.",isRequired:!0})};static Views={All:["ID","Title","DistributionGroup","NoticeDates"]};static ListDef={name:"st_ch_notice",title:"st_ch_notice",fields:s.Views.All};static uid="ch_notice"};var ms=class s extends y{constructor(e){super(e)}FieldMap={...this.FieldMap,ReconfigType:new h({displayName:"Service Type",options:["Office Furniture","Construction","Electrical Cabling","Other"],isRequired:!0}),Location:new l({displayName:"Location",isRequired:!0}),Supervisor:new k({displayName:"Supervisor",isRequired:!0})};static Views={All:["ID","Title","Location","ReconfigType","Supervisor"]};static ListDef={name:"st_ch_reconfig",title:"st_ch_reconfig",fields:s.Views.All};static uid="ch_reconfig"};var hs=class s extends y{constructor(e){super(e)}FieldMap={...this.FieldMap,Vendor:new l({displayName:"Supplies Requested",isRequired:!0}),ItemNum:new l({displayName:"Item/Product Num"}),Quantity:new l({displayName:"Quantity",isRequired:!0})};static Views={All:["ID","Title","Vendor","ItemNum","Quantity"]};static ListDef={name:"st_ch_supplies",title:"st_ch_supplies",fields:s.Views.All};static uid="ch_supplies"};var fs=class s extends y{constructor(e){super(e)}departmentOptions=requestOrgStore().filter(e=>e.OrgType==OrgTypes.Department).map(e=>e.Title);FieldMap={...this.FieldMap,FullName:new k({displayName:"Contractor",isRequired:!0}),ManagerDept:new k({displayName:"Dept Manager"}),ManagerTask:new k({displayName:"Task Manager",isRequired:!0}),Department:new h({displayName:"Department",options:this.departmentOptions,isRequired:!0}),RequisitionOrder:new l({displayName:"Requisition Number/Task Order",isRequired:!0}),LaborCategory:new l({displayName:"Labor Category (LCAT)",isRequired:!0}),ContractorType:new h({displayName:"Contractor Type",options:["SCA","Non-SCA"],isRequired:!0}),TeleworkType:new h({displayName:"Telework Type",options:["Core","Situational"],isRequired:!0}),MaxEligibility:new h({displayName:"Max Eligibility",options:["80%","60%","40%","20%","None"],isRequired:!0})};static Views={All:["ID","Title","FullName","ManagerDept","ManagerTask","Department","RequisitionOrder","LaborCategory","ContractorType","TeleworkType","MaxEligibility"]};static ListDef={name:"st_ch_telework",title:"st_ch_telework",fields:s.Views.All};static uid="ch_telework"};var gs=class s extends y{constructor(e){super(e)}FieldMap={...this.FieldMap,InvoiceNum:new l({displayName:"Invoice Num",isRequired:!0}),InvoiceAmount:new l({displayName:"Invoice Amount",isRequired:!0}),InvoiceDate:new P({displayName:"Invoice Date",isRequired:!0}),InvoiceReceivedDate:new P({displayName:"Invoice Received Date",isRequired:!0}),Vendor:new l({displayName:"Vendor",isRequired:!0})};static Views={All:["ID","Title","InvoiceNum","InvoiceAmount","InvoiceDate","InvoiceReceivedDate","Vendor"]};static ListDef={name:"st_ch_transport",title:"st_ch_transport",fields:s.Views.All};static uid="ch_transport"};var bs=class s extends y{constructor(e){super(e)}FieldMap={...this.FieldMap,Employee:new k({displayName:"Employee Name",isRequired:!0}),Phone:new l({displayName:"Phone Number",isRequired:!0}),Location:new l({displayName:"Location"})};static Views={All:["ID","Title","Employee","Phone","Location"]};static ListDef={name:"st_ch_voicemail",title:"st_ch_voicemail",fields:s.Views.All};static uid="ch_voicemail"};var Ee=class s extends y{constructor(e){super(e),window.DEBUG&&console.log("new contractor supplement",e)}ContractorTypeOptsArr=["SCA","Non-SCA"];TaskOrderNumber=new l({displayName:"Task Order Number",isRequired:!0});RequisitionNumber=new l({displayName:"Requisition Number",isRequired:!0});LaborCategory=new l({displayName:"Labor Category",isRequired:!0});ContractorType=new h({displayName:"Contractor Type",options:["SCA","Non-SCA"],isRequired:!0});Contractor=new k({displayName:"Contractor",isRequired:!0,Visible:ko.observable(!1)});FieldMap={...this.FieldMap,TaskOrderNumber:this.TaskOrderNumber,RequisitionNumber:this.RequisitionNumber,LaborCategory:this.LaborCategory,ContractorType:this.ContractorType,Contractor:this.Contractor};static Views={All:["ID","Title","TaskOrderNumber","LaborCategory","RequisitionNumber","ContractorType","Request","Contractor"],APMUpdate:["TaskOrderNumber","LaborCategory","ContractorType","RequisitionNumber"]};static ListDef={name:"st_ch_overtime_supplement",title:"st_ch_overtime_supplement",fields:s.Views.All};static uid="contractor_supplement"};var ys=class s extends y{constructor(e){super(e)}FieldMap={...this.FieldMap,DateOfDVC:new P({displayName:"Date of DVC",isRequired:!0}),Location:new l({displayName:"Location",isRequired:!0}),Duration:new l({displayName:"Duration",isRequired:!0}),FarEndPOC:new l({displayName:"Far End POC",isRequired:!0}),ConnectionType:new h({displayName:"Connection Type",options:["OpenNet","ISDN","IP"],isRequired:!0}),CallType:new h({displayName:"Call Type",options:["Incoming","Outgoing"],isRequired:!0}),DVCDialInNum:new l({displayName:"DVC Dial-in Number",isRequired:!0})};static Views={All:["ID","Title","DateOfDVC","Location","Duration","FarEndPOC","ConnectionType","CallType","DVCDialInNum"]};static ListDef={name:"st_dvc_setup",title:"st_dvc_setup",fields:s.Views.All};static uid="dvc_setup"};var vs=class s extends y{constructor(e){super(e)}FieldMap={...this.FieldMap,Subcategory:new h({displayName:"Subcategory",options:["Accommodation Exchange","Annual Cash Waivers","Debt Collection","Fiscal Irregularities","One-Time Cash Waivers","Proceeds of Sale","Suspense Deposits Abroad"],isRequired:!0})};static Views={All:["ID","Title","Subcategory"]};static ListDef={name:"st_fp_cash_mgmt",title:"st_fp_cash_mgmt",fields:s.Views.All};static uid="fp_cash_mgmt"};var ws=class s extends y{constructor(e){super(e)}Subcategory=new h({displayName:"Subcategory",options:["Annual Cash Waivers","Class B Cashiering","Occasional Money Holders","One-Time Cash Waivers","United States Treasury Checks"],isRequired:!0});MRN=new l({displayName:"MRN"});FieldMap={...this.FieldMap,Subcategory:this.Subcategory,MRN:this.MRN};fromEmail=e=>Ea(this,e);static Views={All:["ID","Title","Subcategory"]};static ListDef={name:"st_fp_cash_mgmt",title:"st_fp_cash_mgmt",fields:s.Views.All};static uid="fp_cashier_operations"};function Ea(s,e){s.FieldMap.Subcategory.set("Annual Cash Waivers");let t=document.createElement("div");t.innerHTML=e;let i=t.querySelectorAll("tr");for(let o of i){if(!o.innerText?.includes("MRN:"))continue;console.log(o);let d=o.querySelector("td:nth-child(2) a").innerText;s.FieldMap.MRN.set(d)}}var Ss=class s extends y{constructor(e){super(e)}FieldMap={...this.FieldMap,Subcategory:new h({displayName:"Subcategory",options:["Allotment and Allowance Codes","Domestic Organization Structure and Codes","Function Classification Codes","Fund Symbols","Object Classification Codes","Overseas Organization Classification Codes","Revenue Source Codes"],isRequired:!0})};static Views={All:["ID","Title","Subcategory"]};static ListDef={name:"st_fp_codes",title:"st_fp_codes",fields:s.Views.All};static uid="fp_codes"};var As=class s extends y{constructor(e){super(e)}FieldMap={...this.FieldMap,Subcategory:new h({displayName:"Subcategory",options:["Debt Collection","Proceeds of Sale","Suspense Deposits Abroad (SDA)"],isRequired:!0})};static Views={All:["ID","Title","Subcategory"]};static ListDef={name:"st_fp_collections",title:"st_fp_collections",fields:s.Views.All};static uid="fp_collections"};var Cs=class s extends y{constructor(e){super(e)}FieldMap={...this.FieldMap,Subcategory:new h({displayName:"Subcategory",options:["Advances","Claims","Gifts of Travel","Mileage Rates (general topic)","Travel Card Program"],isRequired:!0})};static Views={All:["ID","Title","Subcategory"]};static ListDef={name:"st_fp_travel",title:"st_fp_travel",fields:s.Views.All};static uid="fp_travel"};var Rs=class s extends y{constructor(e){super(e)}FieldMap={...this.FieldMap,Name:new l({displayName:"Hardware Name",isRequired:!0}),Quantity:new l({displayName:"Quantity",isRequired:!0}),POCName:new l({displayName:"POC",isRequired:!0}),Cost:new l({displayName:"Cost",isRequired:!0}),RequestType:new h({displayName:"Request Type",options:["New","Maintenance Renewal"],isRequired:!0}),PurchaseFrequency:new h({displayName:"Purchase Frequency",options:["One Time","Recurring"],isRequired:!0}),ApprovedPurchase:new h({displayName:"Approved Purchase",options:["Yes","No"],isRequired:!0}),FundingSource:new h({displayName:"Funding Source",options:["Project","Contract","Other"],isRequired:!0})};static Views={All:["ID","Title","Name","Quantity","POCName","Cost","RequestType","PurchaseFrequency","ApprovedPurchase","FundingSource"]};static ListDef={name:"st_IT_hardware",title:"st_IT_hardware",fields:s.Views.All};static uid="it_hardware"};var Ts=class s extends y{constructor(e){super(e)}FieldMap={...this.FieldMap,UserName:new k({displayName:"User Name",isRequired:!0}),EmployeeType:new h({displayName:"Employee Type",options:["Direct Hire","Contractor"],isRequired:!0}),RequestType:new h({displayName:"Request Type",options:["New","Replacement"],isRequired:!0}),Supervisor:new k({displayName:"COR/Supervisor",isRequired:!0})};static Views={All:["ID","Title","UserName","EmployeeType","RequestType","Supervisor"]};static ListDef={name:"st_ironkey",title:"st_ironkey",fields:s.Views.All};static uid="ironkey"};var xs=class s extends y{constructor(e){super(e)}FieldMap={...this.FieldMap,Location:new l({displayName:"Location",isRequired:!0}),LockType:new l({displayName:"Lock Type",isRequired:!0})};static Views={All:["ID","Title"]};static ListDef={name:"st_locksmith",title:"st_locksmith",fields:s.Views.All};static uid="locksmith"};var ks=class s extends y{constructor(e){super(e)}FieldMap={...this.FieldMap,User:new k({displayName:"User Name",isRequired:!0}),EmployeeType:new h({displayName:"Employee Type",options:["FTE","Contractor"],isRequired:!0}),RequestType:new h({displayName:"Request Type",options:["New","Broken/Lost/Stolen","Accessories"],isRequired:!0}),PlanType:new h({displayName:"Plan Type",options:["Domestic","Global"],isRequired:!0})};static Views={All:["ID","Title","User","EmployeeType","RequestType","PlanType"]};static ListDef={name:"st_mobile_phone",title:"st_mobile_phone",fields:s.Views.All};static uid="mobile"};var qs=class s extends y{constructor(e){super(e)}FieldMap={...this.FieldMap,DateAndTime:new P({displayName:"Date and Time",type:V.datetime,isRequired:!0}),DriverPOC:new l({displayName:"Driver POC",isRequired:!0})};static Views={All:["ID","Title","DateAndTime","DriverPOC"]};static ListDef={name:"st_motor_pool",title:"st_motor_pool",fields:s.Views.All};static uid="motor_pool"};var Fs=class s extends y{constructor(e){super(e)}FieldMap={...this.FieldMap,FullName:new k({displayName:"Contractor",isRequired:!0}),ManagerGov:new k({displayName:"Gov Manager",isRequired:!0}),ManagerGTM:new k({displayName:"COR/GTM",isRequired:!0}),Office:new h({displayName:"Department",options:I().RequestingOffices().map(e=>e.Title),isRequired:!0}),RequisitionNumber:new l({displayName:"Requisition Number/Task Order",isRequired:!0}),Task:new l({displayName:"Project Task",isRequired:!0}),Hours:new l({displayName:"Overtime Hours Total",isRequired:!0}),ContractorType:new h({displayName:"Contractor Type",options:["SCA","Non-SCA"],isRequired:!0}),DatesRaw:new BlobField({displayName:"Overtime Dates",isRequired:!0,width:12,multiple:!0,entityType:ko.observable(Is)})};static Views={All:["ID","Title","FullName","ManagerGov","ManagerGTM","Office","RequisitionNumber","Task","Hours","ContractorType","DatesRaw"]};static ListDef={name:"st_overtime",title:"st_overtime",fields:s.Views.All};static uid="overtime"},Is=class extends ve{constructor(){super()}FieldMap={date:new P({displayName:"Date",isRequired:!0}),hours:new l({displayName:"# of Hours",isRequired:!0}),label:new l({displayName:"Note/Label",isRequired:!1})}};var Ds=class s extends y{constructor(e){super(e)}FieldMap={...this.FieldMap,PresentationDate:new P({displayName:"Presentation Date and Time",type:V.datetime,isRequired:!0}),Location:new l({displayName:"Location",isRequired:!0}),Duration:new l({displayName:"Duration",isRequired:!0}),POC:new l({displayName:"POC",isRequired:!0})};static Views={All:["ID","Title","PresentationDate","Location","Duration","POC"]};static ListDef={name:"st_presentation",title:"st_presentation",fields:s.Views.All};static uid="presentation"};var Ps=class s extends y{constructor(e){super(e),this.Request=e}Type=ko.observable();Quantity=ko.observable();Items=ko.observableArray();FieldMap={...this.FieldMap,RequisitionType:new h({displayName:"Requisition Type",isRequired:!1,options:["Requisition","De-Obligation","Re-Alignment"]}),Quantity:new l({displayName:"Quantity of requisitions",isRequired:!1}),ItemsBlob:new BlobField({displayName:"Procurement Items",isRequired:!1,width:12,multiple:!0,entityType:ko.observable(Ns)})};static Views={All:["ID","Title","RequisitionType","Quantity","ItemsBlob"]};static ListDef={name:"st_requisition",title:"st_requisition",fields:s.Views.All};static uid="requisition"},Ns=class extends ve{constructor(){super()}FieldMap={title:new l({displayName:"Title",isRequired:!0})}};var Es=class s extends y{constructor(e){super(e)}FieldMap={...this.FieldMap,Category:new h({displayName:"Category",options:["Category 1","Category 2","Category 3"],isRequired:!1}),DatePromised:new P({displayName:"Date Promised",type:V.date,isRequired:!1}),DateCompleted:new P({displayName:"Date Completed",type:V.date,isRequired:!1})};static Views={All:["ID","Title"]};static ListDef={name:"st_sdm_admin_request",title:"st_sdm_admin_request",fields:s.Views.All};static uid="sdm_admin_request"};var Os=class s extends y{constructor(e){super(e)}FieldMap={...this.FieldMap,Subject:new l({displayName:"Title",instructions:`Brief one line summary identifying the issue.<br>
      (Team Name - Action Name - Brief description of Issue)`,isRequired:!0}),EmployeeId:new l({displayName:"Employee ID",instructions:"Required if applicable. Please do NOT include employee SSN.",isRequired:!0}),AnalystPOC:new k({displayName:"Analyst POC",instructions:"Name of the incident reporter.",isRequired:!0}),QWINumber:new l({displayName:"QWI Number",instructions:"(example: GFS-WI-APP-###)",isRequired:!0}),QWIStep:new l({displayName:"QWI Step",instructions:"What step in the QWI were you not able to complete successfully?",isRequired:!0}),IssueDate:new P({displayName:"Issue Date/Pay-Period of Action",type:V.date,instructions:"(Needed to allow determination of software version being used)",isRequired:!0}),DISAction:new l({displayName:"DIS Action",instructions:"Required if applicable - if associated with a particular employee, this will be applicable",isRequired:!0}),DISRequestCode:new l({displayName:"DIS Request Code",instructions:"Required if applicable - if associated with a particular action in DIS, this will be applicable",isRequired:!0}),PayImpacting:new Ie({displayName:"Pay Impacting",instructions:"Does the action impact an employee's pay if the issue is not resolved immediately? Please provide any necessary information in the instructions."}),ImpactCount:new l({displayName:"Number of Employees Impacted",isRequired:!0}),ResolutionDate:new P({displayName:"Required Date for Resolution",instructions:"Enter date required for resolution. What is the last day this action needs to be successfully completed before the employee's pay is negatively impacted?",type:V.date,isRequired:!1}),PayrollOpIssue:new Ie({displayName:"Payroll Operational Issue - Yes/No",instructions:"Process did not finish or unexpected processing results - from OPS"}),NewRequirement:new l({displayName:"New Requirement or request to modify existing functionality?",instructions:"What changed or is expected to change?",isRequired:!1}),CompliancePolicy:new l({displayName:"Compliance and Policy",instructions:"Did policy change? Is GFACS not compliant?",isRequired:!1}),SecurityRoleChange:new l({displayName:"Security Role Change?",isRequired:!1}),DataUpdateRequest:new l({displayName:"Data Update/Execution Form (EF) request",instructions:"What needs to be update? Specific fields, dates? When is it needed by?",isRequired:!1}),QueryRequest:new W({displayName:"Query Request",instructions:"What needs to be update? Specific fields, dates? When is it needed by?",isRequired:!1}),DatabaseIssues:new W({displayName:"Database operation/output issues",instructions:"e.g. error message clarification",isRequired:!1})};static Views={All:["ID","Title"]};static ListDef={name:"st_sdm_tier_I",title:"st_sdm_tier_I",fields:s.Views.All};static uid="sdm_tier_I"};var Ls=class s extends y{constructor(e){super(e)}OfficeOptions=I().RequestingOffices().map(e=>e.Title);FieldMap={...this.FieldMap,FullName:new k({displayName:"Contractor",isRequired:!0}),ManagerDept:new k({displayName:"Dept Manager",isRequired:!1}),ManagerTechnical:new k({displayName:"Government Technical Monitor",isRequired:!0,Visible:ko.pureComputed(()=>!this.FieldMap.NoGTM.Value())}),NoGTM:new Ie({displayName:"Check here if no GTM for this contract"}),COR:new k({displayName:"COR",isRequired:!0}),Office:new h({displayName:"Office",options:this.OfficeOptions,isRequired:!0}),RequisitionOrder:new l({displayName:"Requisition Number/Task Order",isRequired:!0}),LaborCategory:new l({displayName:"Labor Category (LCAT)",isRequired:!0}),ContractorType:new h({displayName:"Contractor Type",options:["SCA","Non-SCA"],isRequired:!0}),TeleworkType:new h({displayName:"Telework Type",options:["Core","Situational"],isRequired:!0}),MaxEligibility:new h({displayName:"Max Eligibility",options:["80%","60%","40%","20%","None"],isRequired:!0}),DaysWeek1:new h({displayName:"Week 1",options:["Sun","Mon","Tues","Wed","Thurs","Fri","Sat"],multiple:!0,isRequired:!1}),DaysWeek2:new h({displayName:"Week 2",options:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],multiple:!0,isRequired:!1})};static Views={All:["ID","Title","FullName","ManagerDept","ManagerTechnical","NoGTM","COR","Office","RequisitionOrder","LaborCategory","ContractorType","TeleworkType","MaxEligibility","DaysWeek1","DaysWeek2"]};static ListDef={name:"st_telework",title:"st_telework",fields:s.Views.All};static uid="telework"};var Qi=T`
  <div data-bind="using: FieldMap">
    <div class="row">
      <div
        class="col pb-2"
        data-bind="
        visible: FullName.Visible,
        component: {name: FullName.components.view, params: FullName}, 
        class: FullName.width"
      ></div>
      <div
        class="col pb-2"
        data-bind="
        visible: GovManager.Visible,
        component: {name: GovManager.components.view, params: GovManager}, 
        class: GovManager.width"
      ></div>
    </div>
    <div class="py-2">
      <h6 class="">Overtime Dates (within month estimate):</h6>
      <div class="row">
        <div
          class="col pb-2"
          data-bind="
        visible: DateStart.Visible,
        component: {name: DateStart.components.view, params: DateStart}, 
        class: DateStart.width"
        ></div>
        <div
          class="col pb-2"
          data-bind="
        visible: DateEnd.Visible,
        component: {name: DateEnd.components.view, params: DateEnd}, 
        class: DateEnd.width"
        ></div>
      </div>
    </div>
    <div class="row">
      <div
        class="col pb-2"
        data-bind="
        visible: Hours.Visible,
        component: {name: Hours.components.view, params: Hours}, 
        class: Hours.width"
      ></div>
    </div>
  </div>
  <div class="row">
    <div
      class="col pb-2"
      data-bind="
    visible: APM.Visible,
    component: {name: APM.components.view, params: APM}, 
    class: APM.width"
    ></div>
    <div
      class="col pb-2"
      data-bind="
  visible: GTM.Visible,
  component: {name: GTM.components.view, params: GTM}, 
  class: GTM.width"
    ></div>
  </div>
  <div class="row">
    <div
      class="col pb-2"
      data-bind="
    visible: COR.Visible,
    component: {name: COR.components.view, params: COR}, 
    class: COR.width"
    ></div>
  </div>
  <!-- ko if: ContractorSupplementField.Value()?.Title -->
  <div class="py-3">
    <h5 class="text-secondary">Contractor Supplemental Information</h5>
    <div
      data-bind="component: {name: supplementComponents.view, params: {Entity: ContractorSupplementField.Value()} }"
    ></div>
  </div>
  <!-- /ko -->
`;var Wi=T`
  <div data-bind="using: FieldMap">
    <div class="row">
      <div
        class="col pb-2"
        data-bind="
        visible: FullName.Visible,
        component: {name: FullName.components.edit, params: FullName}, 
        class: FullName.width"
      ></div>
      <div
        class="col pb-2"
        data-bind="
        visible: GovManager.Visible,
        component: {name: GovManager.components.edit, params: GovManager}, 
        class: GovManager.width"
      ></div>
    </div>
    <h6>Overtime Dates (within month estimate):</h6>
    <div class="row">
      <div
        class="col pb-2"
        data-bind="
        visible: DateStart.Visible,
        component: {name: DateStart.components.edit, params: DateStart}, 
        class: DateStart.width"
      ></div>
      <div
        class="col pb-2"
        data-bind="
        visible: DateEnd.Visible,
        component: {name: DateEnd.components.edit, params: DateEnd}, 
        class: DateEnd.width"
      ></div>
    </div>
    <div class="row">
      <div
        class="col pb-2"
        data-bind="
        visible: Hours.Visible,
        component: {name: Hours.components.edit, params: Hours}, 
        class: Hours.width"
      ></div>
    </div>
  </div>
  <div class="row">
    <div
      class="col pb-2"
      data-bind="
    visible: APM.Visible,
    component: {name: APM.components.edit, params: APM}, 
    class: APM.width"
    ></div>
    <div
      class="col pb-2"
      data-bind="
  visible: GTM.Visible,
  component: {name: GTM.components.edit, params: GTM}, 
  class: GTM.width"
    ></div>
  </div>
  <div class="row">
    <div
      class="col pb-2"
      data-bind="
    visible: COR.Visible,
    component: {name: COR.components.edit, params: COR}, 
    class: COR.width"
    ></div>
  </div>
  <!-- ko if: ContractorSupplementField.Value -->
  <div
    data-bind="component: {name: supplementComponents.view, params: {Entity: ContractorSupplementField.Value()} }"
  ></div>
  <!-- /ko -->
`;var zi=T`
  <div class="card m-1">
    <div class="card-body">
      <h6>Please provide the GTM and COR:</h6>
      <!-- ko if: HasLoaded -->
      <div data-bind="using: newEntity">
        <div class="row">
          <div
            class="col pb-2"
            data-bind="component: {name: GTM.components[$parent.DisplayMode()], params: GTM}"
          ></div>
          <div
            class="col pb-2"
            data-bind="component: {name: COR.components[$parent.DisplayMode()], params: COR}"
          ></div>
        </div>
        <!-- Only show the addtional fields after GTM and COR have been provided -->
        <!-- ko if:  $parent.ShowSupplementComponent-->
        <div
          data-bind="component: {name: supplementComponents[$parent.DisplayMode()], params: {Entity: ContractorSupplementField.Value() }}"
        ></div>
        <!-- /ko -->
        <div>
          <!-- ko if: $parent.Editing -->
          <!-- ko if: $parent.IsCompleted -->
          <button
            class="btn btn-primary"
            type="button"
            data-bind="click: $parent.update, enable: ContractorSupplementField.Value().IsValid"
          >
            Update
          </button>
          <button
            class="btn btn-outline-danger"
            type="button"
            data-bind="click: () => $parent.Editing(false)"
          >
            Cancel
          </button>
          <!-- /ko -->
          <!-- ko ifnot: $parent.IsCompleted -->
          <button
            class="btn btn-primary"
            type="button"
            data-bind="click: $parent.submit, enable: ContractorSupplementField.Value().IsValid"
          >
            Save and Approve
          </button>
          <!-- /ko -->
          <button
            type="button"
            class="btn fluid btn-danger"
            data-bind="click: $parent.showReject"
          >
            Reject
          </button>
          <!-- /ko -->
          <!-- ko ifnot: $parent.Editing -->
          <button
            class="btn btn-primary"
            type="button"
            data-bind="click: () => $parent.Editing(true)"
          >
            Edit
          </button>
          <!-- /ko -->
        </div>
      </div>
      <!-- /ko -->
    </div>
  </div>
  <dialog class="" data-bind="attr: {id: rejectModalId}">
    <div class="d-flex flex-column justify-content-between h-100">
      <h4>Please Provide a Rejection Reason:</h4>
      <div class="alert alert-warning mb-3">
        Note: Rejecting this request will close the record! Closed requests
        cannot be re-opened!
      </div>
      <textarea
        class="form-control mb-3 flex-grow-1"
        data-bind="textInput: RejectReason"
      ></textarea>
      <div class="d-flex justify-content-center">
        <button
          type="button"
          class="btn btn-danger me-2"
          data-bind="click: reject, enable: RejectReason"
        >
          Reject
        </button>
        <button
          type="button"
          class="btn btn-secondary"
          data-bind="click: cancelReject"
        >
          Cancel
        </button>
      </div>
    </div>
  </dialog>
`;var Nt=class extends $e{constructor(e){super(e),window.DEBUG&&console.log("Hello from APM Actions module."),this._context=Q(),this.ServiceType=e.request.RequestBodyBlob?.Value(),this.Errors=e.errors,this.Request=e.request,this.newEntity=new ht,this.newEntity.fromJSON(this.ServiceType.toJSON()),this.init()}newEntity=null;HasLoaded=ko.observable(!1);Editing=ko.observable(!0);DisplayMode=ko.pureComputed(()=>this.Editing()?"edit":"view");init=async()=>{window.DEBUG&&console.log("setting supplement"),await this.newEntity.setRequestContext(this.Request),this.newEntity.ContractorSupplementField.Value()||this.newEntity.ContractorSupplementField.Value(new Ee({Title:this.Request.Title,Request:this.Request}));let e=this.validate(!1);this.assignment.Status!=E.InProgress&&this.Editing(!1),this.IsCompleted(!e.length),this.HasLoaded(!0)};hasBeenValidated=ko.observable(!1);hasBeenSaved=ko.observable(!1);IsCompleted=ko.observable(!1);validate=(e=!0)=>{if(!this.newEntity)return[];let t=[];return this.newEntity.GTM.validate(e).length&&t.push(new Re(Pt,"required-field","Please provide a GTM.")),this.newEntity.COR.validate(e).length&&t.push(new Re(Pt,"required-field","Please provide a COR.")),this.newEntity.ContractorSupplementField.Value().validate(e).length&&t.push(new Re(Pt,"required-field","Please provide the contractor supplemental information.")),this.Errors(this.Errors().filter(i=>i.source!=Pt).concat(t)),t};ShowSupplementComponent=ko.pureComputed(()=>this.newEntity.GTM.IsValid()&&this.newEntity.COR.IsValid());submit=async()=>{this.hasBeenValidated(!0),!this.validate().length&&(this.newEntity.ContractorSupplementField.Value().Request=this.Request,await this.newEntity.ContractorSupplement.create(this.newEntity.ContractorSupplementField.Value()),this.Request.RequestBodyBlob.Value(this.newEntity),await this._context.Requests.UpdateEntity(this.Request,["RequestBodyBlob"]),this.assignment.Status!=E.Approved,await this.completeAssignment(this.assignment,E.Approved),this.hasBeenSaved(!0),this.IsCompleted(!0))};update=async()=>{this.hasBeenValidated(!0),!this.validate().length&&(this.Request.RequestBodyBlob.Value(this.newEntity),await this._context.Requests.UpdateEntity(this.Request,["RequestBodyBlob"]),await this.newEntity.ContractorSupplement.update(Ee.Views.APMUpdate),this.hasBeenSaved(!0),this.Editing(!1))};static name="APMActions";static template=zi},Pt="apm-actions";var Ji=T`
  <div class="card m-1">
    <div class="card-body">
      <h6>Please provide the APM and GTM (opt):</h6>
      <!-- ko if: Editing -->
      <div class="row">
        <div
          class="col pb-2"
          data-bind="component: {name: APM.components.edit, params: APM}"
        ></div>
        <div
          class="col pb-2"
          data-bind="component: {name: GTM.components.edit, params: GTM}"
        ></div>
      </div>
      <button
        type="button"
        class="btn fluid btn-primary"
        data-bind="click: submit"
      >
        Save and Approve
      </button>
      <button
        type="button"
        class="btn fluid btn-danger"
        data-bind="click: showReject"
      >
        Reject
      </button>
      <!-- /ko -->
      <!-- ko ifnot: Editing-->
      <div class="row">
        <div
          class="col pb-2"
          data-bind="component: {name: APM.components.view, params: APM}"
        ></div>
        <div
          class="col pb-2"
          data-bind="component: {name: GTM.components.view, params: GTM}"
        ></div>
      </div>
      <button
        type="button"
        class="btn fluid btn-primary"
        data-bind="click: () => Editing(true)"
      >
        Update
      </button>
      <!-- /ko -->
    </div>
  </div>
  <dialog class="" data-bind="attr: {id: rejectModalId}">
    <div class="d-flex flex-column justify-content-between h-100">
      <h4>Please Provide a Rejection Reason:</h4>
      <div class="alert alert-warning mb-3">
        Note: Rejecting this request will close the record! Closed requests
        cannot be re-opened!
      </div>
      <textarea
        class="form-control mb-3 flex-grow-1"
        data-bind="textInput: RejectReason"
      ></textarea>
      <div class="d-flex justify-content-center">
        <button
          type="button"
          class="btn btn-danger me-2"
          data-bind="click: reject, enable: RejectReason"
        >
          Reject
        </button>
        <button
          type="button"
          class="btn btn-secondary"
          data-bind="click: cancelReject"
        >
          Cancel
        </button>
      </div>
    </div>
  </dialog>
`;var Et=class extends $e{constructor(e){super(e),this._context=Q(),this.ServiceType=e.request.RequestBodyBlob?.Value(),this.Errors=e.errors,this.Request=e.request,this.apmWatcher(this.ServiceType?.APM.get()),this.gtmWatcher(this.ServiceType?.GTM.get());let t=this.validate(!1);this.assignment.Status!=E.InProgress&&this.Editing(!1)}Editing=ko.observable(!0);APM=new k({displayName:"APM",isRequired:!0,spGroupName:ko.pureComputed(()=>ko.unwrap(Ot)?.UserGroup?.Title)});GTM=new k({displayName:"GTM",isRequired:!1,spGroupName:ko.pureComputed(()=>ko.unwrap(Lt)?.UserGroup?.Title)});hasBeenValidated=ko.observable(!1);hasBeenSaved=ko.observable(!1);validate=(e=!0)=>{if(!this.ServiceType)return[];let t=[];return this.APM.validate(e).length&&t.push(new Re(Ki,"gov-manager-actions","Please provide a valid APM.")),this.Errors(this.Errors().filter(i=>i.source!=Ki).concat(t)),t};apmWatcher=e=>{this.APM.get()||this.APM.set(e)};gtmWatcher=e=>{this.GTM.get()||this.GTM.set(e)};submit=async()=>{this.hasBeenValidated(!0),!this.validate().length&&(console.log(this),this.ServiceType.APM.set(this.APM.get()),this.GTM.get()?this.ServiceType.GTM.set(this.GTM.get()):this.ServiceType.GTM.get()&&this.ServiceType.GTM.set(null),await this._context.Requests.UpdateEntity(this.Request,["RequestBodyBlob"]),this.assignment.Status!=E.Approved&&await this.completeAssignment(this.assignment,E.Approved),this.Editing(!1),this.hasBeenSaved(!0))};static name="GovManagerActions";static template=Ji},Ki="gov-manager-actions";var Bs={view:"svc-ch_overtime-view",edit:"svc-ch_overtime-edit",new:"svc-ch_overtime-edit"};z(Nt);z(Et);var Ot=ko.pureComputed(()=>ge().find(s=>s.Title.toUpperCase()=="CGFS/APMS")),Lt=ko.pureComputed(()=>ge().find(s=>s.Title.toUpperCase()=="CGFS/GTMS")),Vs=ko.pureComputed(()=>ge().find(s=>s.Title.toUpperCase()=="CGFS/CORS")),Ms=class extends ke{constructor(e){super(e)}static name=Bs.view;static template=Qi},_s=class extends Ae{constructor(e){super(e)}static name=Bs.edit;static template=Wi};z(_s);z(Ms);var ht=class s extends y{constructor(e){super(e)}setRequestContext=async e=>{this.Request=e,await this.ContractorSupplement.findByRequest(this.Request)};RequestSubmitted=ko.pureComputed(()=>this.Request?.Pipeline?.Stage());RequestStage2=ko.pureComputed(()=>this.Request?.Pipeline?.Stage()?.Step==2);Contractor=new k({displayName:"Contractor",isRequired:!0});GovManager=new k({displayName:"Gov Manager",isRequired:!0});GTM=new k({displayName:"GTM",isRequired:this.RequestStage2,Visible:this.RequestSubmitted,spGroupName:ko.pureComputed(()=>ko.unwrap(Lt)?.UserGroup?.Title)});APM=new k({displayName:"APM",isRequired:this.RequestSubmitted,Visible:this.RequestSubmitted,spGroupName:ko.pureComputed(()=>ko.unwrap(Ot)?.UserGroup?.Title)});COR=new k({displayName:"COR",isRequired:this.RequestStage2,Visible:this.RequestSubmitted,spGroupName:ko.pureComputed(()=>ko.unwrap(Vs)?.UserGroup?.Title)});ContractorSupplementField=new Ve({displayName:"Contractor Supplement",Visible:ko.observable(!1),type:Ee,lookupCol:"LaborCategory",isRequired:!1,multiple:!1});ContractorSupplement={set:Ne.Set(Ee),findByRequest:async e=>{let i=(await this.ContractorSupplement.set.FindByColumnValue([{column:"Title",op:"eq",value:e.Title}],{},{},Ee.Views.All,!1))?.results?.pop();i&&this.ContractorSupplementField.Value(i)},update:async(e=null)=>{await this.ContractorSupplement.set.UpdateEntity(this.ContractorSupplementField.Value(),e)},VisibleOnForm:ko.pureComputed(()=>{}),create:async(e=this.ContractorSupplementField.Value())=>{let t=this.Request.getRelativeFolderPath(),i=this.ContractorSupplement.getPermissions(),o=await this.ContractorSupplement.set.UpsertFolderPath(t);await this.ContractorSupplement.set.SetFolderPermissions(t,i),e.Contractor.set(this.Contractor.get()),await this.ContractorSupplement.set.AddEntity(e,t,this.Request),this.ContractorSupplementField.Value(e)},getPermissions:()=>{let e=ge().find(a=>a.Title.toUpperCase()=="CGFS/EX/BUDGET")?.UserGroup,t=ge().find(a=>a.Title.toUpperCase()=="CGFS/EX")?.UserGroup,i=Vs()?.UserGroup;return[[I(),X.RestrictedContribute],[this.APM.get(),X.RestrictedContribute],[this.GTM.get(),X.RestrictedContribute],[this.COR.get(),X.RestrictedContribute],[e,X.RestrictedContribute],[t,X.RestrictedContribute],[i,X.RestrictedContribute]]}};supplementComponents=_e;FieldMap={FullName:this.Contractor,GovManager:this.GovManager,GTM:this.GTM,APM:this.APM,COR:this.COR,DateStart:new P({displayName:"Start Date",type:V.date,isRequired:!0}),DateEnd:new P({displayName:"End Date (Within Month Range)",type:V.date,isRequired:!0}),Hours:new l({displayName:"Overtime Hours (Not to Exceed)",isRequired:!0,attr:{type:"number"}})};components=Bs;static Views={All:["ID","Title","FullName","GovManager","GTM","APM","COR","DateStart","DateEnd","Hours","ContractorSupplement","Request"],APMUpdate:["COR","GTM"]};static ListDef={name:"st_ch_overtime",title:"st_ch_overtime",isServiceType:!0,fields:s.Views.All};static uid="ch_overtime"};var Xi=T`
  <div>
    <div class="row row-cols-2" data-bind="using: FieldMap">
      <div
        class="col pb-2"
        data-bind="component: {name: DocumentType.components.edit, params: DocumentType}"
      ></div>
      <div
        class="col pb-2"
        data-bind="component: {name: RequestType.components.edit, params: RequestType}"
      ></div>
    </div>
    <!-- ko if: TypesSelected -->
    <div class="row row-cols-2" data-bind="using: FieldMap">
      <div
        class="col pb-2"
        data-bind="component: {name: JobTitle.components.edit, params: JobTitle}"
      ></div>
      <div
        class="col pb-2"
        data-bind="component: {name: Grade.components.edit, params: Grade}"
      ></div>
    </div>
    <h4>Travel Information</h4>
    <div class="row row-cols-2" data-bind="foreach: TravelFields">
      <div
        class="col pb-2"
        data-bind="component: {name: components.edit, params: $data}"
      ></div>
    </div>
    <h4>Personal Information</h4>
    <div class="row row-cols-2" data-bind="foreach: PersonalFields">
      <div
        class="col pb-2"
        data-bind="component: {name: components.edit, params: $data}"
      ></div>
    </div>
    <!-- ko if: ShowPassportInfo -->
    <h4>Passport Information</h4>
    <div class="row row-cols-2" data-bind="foreach: PassportFields">
      <div
        class="col pb-2"
        data-bind="component: {name: components.edit, params: $data}"
      ></div>
    </div>
    <!-- /ko -->
    <div
      class="col col-12 pb-2"
      data-bind="component: {name: FieldMap.Justification.components.edit, params: FieldMap.Justification}"
    ></div>
    <!-- /ko -->
  </div>
`;var Yi=T`
  <div>
    <div class="row row-cols-2" data-bind="using: FieldMap">
      <div
        class="col pb-2"
        data-bind="component: {name: DocumentType.components.view, params: DocumentType}"
      ></div>
      <div
        class="col pb-2"
        data-bind="component: {name: RequestType.components.view, params: RequestType}"
      ></div>
    </div>
    <!-- ko if: TypesSelected -->
    <div class="row row-cols-2" data-bind="using: FieldMap">
      <div
        class="col pb-2"
        data-bind="component: {name: JobTitle.components.view, params: JobTitle}"
      ></div>
      <div
        class="col pb-2"
        data-bind="component: {name: Grade.components.view, params: Grade}"
      ></div>
    </div>
    <h4>Travel Information</h4>
    <div class="row row-cols-2" data-bind="foreach: TravelFields">
      <div
        class="col pb-2"
        data-bind="component: {name: components.view, params: $data}"
      ></div>
    </div>
    <h4>Personal Information</h4>
    <div class="row row-cols-2" data-bind="foreach: PersonalFields">
      <div
        class="col pb-2"
        data-bind="component: {name: components.view, params: $data}"
      ></div>
    </div>
    <!-- ko if: ShowPassportInfo -->
    <h4>Passport Information</h4>
    <div class="row row-cols-2" data-bind="foreach: PassportFields">
      <div
        class="col pb-2"
        data-bind="component: {name: components.view, params: $data}"
      ></div>
    </div>
    <!-- /ko -->
    <div
      class="col col-12 pb-2"
      data-bind="component: {name: FieldMap.Justification.components.view, params: FieldMap.Justification}"
    ></div>
    <!-- /ko -->
  </div>
`;var Zi={Passport:"Passport",Visa:"Visa"},eo={New:"New",Renewal:"Renewal"},js={view:"svc-diplomatic_passport-view",edit:"svc-diplomatic_passport-edit",new:"svc-diplomatic_passport-edit"},Us=class extends Ae{constructor(e){super(e)}static name=js.edit;static template=Xi},Gs=class extends ke{constructor(e){super(e)}static name=js.view;static template=Yi};z(Us);z(Gs);var $s=class s extends y{constructor(e){super(e)}TypesSelected=ko.pureComputed(()=>this.FieldMap.RequestType.Value()&&this.FieldMap.DocumentType.Value());ShowPassportInfo=ko.pureComputed(()=>{let e=this.FieldMap.RequestType.Value(),t=this.FieldMap.DocumentType.Value();return!(!e||!t||t==Zi.Passport&&e==eo.New)});FieldMap={...this.FieldMap,DocumentType:new h({displayName:"Document Type",options:Object.values(Zi),isRequired:!0}),RequestType:new h({displayName:"Request Type",options:Object.values(eo),isRequired:!0}),Grade:new l({displayName:"Grade/Rank",isRequired:!0,Visible:this.TypesSelected}),JobTitle:new l({displayName:"Job Title",isRequired:!0,Visible:this.TypesSelected}),DestinationCity:new l({displayName:"Destination City",isRequired:!0,Visible:this.TypesSelected}),DestinationCountry:new l({displayName:"Destination Country",isRequired:!0,Visible:this.TypesSelected}),Departure:new P({displayName:"Departure",type:V.date,isRequired:!0,Visible:this.TypesSelected}),Return:new P({displayName:"Return",type:V.date,isRequired:!0,Visible:this.TypesSelected}),BirthLocation:new l({displayName:"State/Country of Birth",isRequired:!0,Visible:this.TypesSelected}),DateOfBirth:new P({displayName:"Date of Birth",type:V.date,isRequired:!0,Visible:this.TypesSelected}),Gender:new l({displayName:"Gender",isRequired:!0,Visible:this.TypesSelected}),PassportDateIssued:new P({displayName:"Issue Date (of most recent Passport)",type:V.date,isRequired:!0,Visible:this.ShowPassportInfo}),PassportDateExpiration:new P({displayName:"Expiration Date (of most recent Passport)",type:V.date,isRequired:!0,Visible:this.ShowPassportInfo}),FullName:new l({displayName:"Full Name (as it appears on passport)",isRequired:!0,Visible:this.ShowPassportInfo}),PassportNum:new l({displayName:"Passport #",isRequired:!0,Visible:this.ShowPassportInfo}),Justification:new W({displayName:"Justification (if passport is expedited)",isRequired:!1,width:12,Visible:this.TypesSelected})};TravelFields=ko.pureComputed(()=>[this.FieldMap.DestinationCountry,this.FieldMap.DestinationCity,this.FieldMap.Departure,this.FieldMap.Return]);PersonalFields=ko.pureComputed(()=>[this.FieldMap.DateOfBirth,this.FieldMap.BirthLocation,this.FieldMap.Gender]);PassportFields=ko.pureComputed(()=>[this.FieldMap.PassportDateIssued,this.FieldMap.PassportDateExpiration,this.FieldMap.FullName,this.FieldMap.PassportNum]);components=js;static Views={All:["ID","Title"]};static ListDef={name:"st_diplomatic_passport",title:"st_diplomatic_passport",fields:s.Views.All};static uid="diplomatic_passport"};var to=T`
  <div>
    <div class="row row-cols-2" data-bind="foreach: FormFields">
      <div
        class="col pb-2"
        data-bind="component: {name: components.edit, params: $data}"
      ></div>
    </div>
    <div class="row row-cols-1" data-bind="if: ShowShortageDocs">
      <div class="col">
        <h4>Supporting Documentation</h4>
        <!-- ko if: USDValue.Value() > 500 -->
        <ul>
          <li>FI report of investigation.</li>
          <li>
            Principle Officer recommendation for shortages greater than $500.
          </li>
          <li>
            GFS-365 Cashier Daily Reconciliation Statement showing
            accountability out of balance.
          </li>
          <li>Class B Cashier memo to FMO reporting shortage.</li>
        </ul>
        <!-- /ko -->
        <!-- ko ifnot: USDValue.Value() > 500 -->
        <ul>
          <li>FI report of investigation.</li>
          <li>
            Principle Officer determination for shortages less than equal to
            $500.
          </li>
          <li>
            For FI shortages of $500 or less with relief granted: DS-2076
            voucher charging the FI loss to the post allotment.
          </li>
          <li>
            For FI shortages of $500 or less with relief not granted and the
            accountable officer has made restitution: memorandum to the cashier
            acknowledging that restitution was made.
          </li>
          <li>
            Subsequent GFS-365 statement showing cashier accountability back in
            balance.
          </li>
        </ul>
        <h5>Counterfeit Currency</h5>
        <ul>
          <li>Class B Cashier memo to FMO reporting counterfeit currency.</li>
          <li>
            Secret Service Or Bank report/statement confirming counterfeit
            currency.
          </li>
          <li>Photocopies of the counterfeit bills (front and back).</li>
        </ul>
        <!-- /ko -->
      </div>
    </div>
  </div>
`;var so={..._e,edit:"svc-fiscal-irreg-edit",new:"svc-fiscal-irreg-edit"},Hs=class extends Ae{constructor(e){super(e)}static name=so.edit;static template=to};z(Hs);var Qs=class extends y{constructor(e){super(e)}CaseNumber=new l({displayName:"Case Number",isRequired:!1});PostLocation=new l({displayName:"Post Location",isRequired:!0});PointOfContact=new k({displayName:"Point(s) of Contact",isRequired:!0,multiple:!0});CableMRN=new l({displayName:"Cable MRN",isRequired:!1});CableDate=new P({displayName:"Cable Date",type:V.date,isRequired:!1});USDValue=new l({displayName:"US Dollar Value",isRequired:!0,attr:{type:"number",min:"0"}});FIType=new h({displayName:"Type of Irregularity",options:["Shortage","Overage"],isRequired:!0});ShowShortageDocs=ko.pureComputed(()=>this.USDValue.Value()&&this.FIType.Value()=="Shortage");FieldMap={...this.FieldMap,CaseNumber:this.CaseNumber,PostLocation:this.PostLocation,PointOfContact:this.PointOfContact,CableMRN:this.CableMRN,CableDate:this.CableDate,USDValue:this.USDValue,FIType:this.FIType};components=so;static uid="fp_fiscal_irreg"};var ep=T`
  <div>
    <!-- ko if: ShowCreateProcurementButton -->
    <button
      type="button"
      class="btn btn-primary w-100"
      data-bind="click: createProcurement"
    >
      Create Procurement
    </button>
    <!-- /ko -->
    <div class="row row-cols-2" data-bind="foreach: FormFields">
      <div
        class="col pb-2"
        data-bind="component: {name: components.view, params: $data}"
      ></div>
    </div>
  </div>
`;var Oa=T`
  <!-- ko if: assignment.Status != assignmentStates.Completed -->
  <div class="card m-1">
    <div class="card-body">
      <div>
        <h6>You have been designated as an action office resolver:</h6>
      </div>
      <div class="d-flex justify-content-between">
        <div>
          <div>
            Assignee: <span data-bind="text: assignment.Assignee?.Title"></span>
          </div>
          <div>
            Request Org:
            <span data-bind="text: assignment.RequestOrg?.Title"></span>
          </div>
        </div>
        <div>
          <p>
            If necessary, create a procurement request, then click confirm to
            proceed!
          </p>
          <div class="d-flex justify-content-start">
            <button
              class="btn btn-primary"
              data-bind="click: createProcurement"
              title="Create new procurement from this request"
            >
              Create Procurement
            </button>

            <button
              class="ms-3 btn btn-success"
              title="Confirm email has been sent"
              data-bind="click: completeHandler"
            >
              Confirm
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- /ko -->
  <!-- ko if: assignment.Status == assignmentStates.Completed -->
  <div class="alert alert-success">
    <strong>Thank you for confirming!</strong>
  </div>
  <!-- /ko -->
`,Vt=class extends je{constructor(e){super(e),this.request=e.request,this.requestBody=e.request.RequestBodyBlob.Value()}createProcurement=async()=>{let e="<ul>";Object.values(this.requestBody.FieldMap).forEach(m=>{m&&(e+=`<li>${m.displayName}: ${m.toString()}</li>`)}),e+="</ul>";let t=ue().find(m=>m.UID=="procurement"),i=new re({ServiceType:t});i.FieldMap.RequestDescription.set(e),i.FieldMap.RequestingOffice.set(this.request.FieldMap.RequestingOffice.get()),i.FieldMap.Requestor.set(this.request.FieldMap.Requestor.get()),i.FieldMap.RequestorEmail(this.request.FieldMap.RequestorEmail()),i.FieldMap.RequestorPhone(this.request.FieldMap.RequestorPhone()),i.FieldMap.RequestorOfficeSymbol.set(this.request.FieldMap.RequestorOfficeSymbol.get());let o=this.request.getRelativeFolderPath(),a=await i.Attachments.createFolder(),d=Q();try{await d.Attachments.CopyFolderContents(o,a),i.Attachments.refresh()}catch(m){console.error("Error copying files: ",m)}window.WorkOrder.App.NewRequest({request:i})};static name="create-procurement";static template=Oa};z(Vt);var Ws=class s extends y{constructor(e){super(e)}CostThreshold=ko.pureComputed(()=>parseInt(this.FieldMap.Cost.Value())>500);FieldMap={...this.FieldMap,Name:new l({displayName:"Software Name",isRequired:!0}),Quantity:new l({displayName:"Quantity",isRequired:!0}),POCName:new l({displayName:"POC",isRequired:!0}),Cost:new l({displayName:"Cost (USD)",isRequired:!0}),RequestType:new h({displayName:"Request Type",options:["New","Maintenance Renewal"],isRequired:!0}),PurchaseFrequency:new h({displayName:"Purchase Frequency",options:["One Time","Recurring"],isRequired:this.CostThreshold}),ApprovedPurchase:new h({displayName:"Approved Purchase",options:["Yes","No"],isRequired:this.CostThreshold}),FundingSource:new h({displayName:"Funding Source",options:["Project","Contract","Other"],isRequired:this.CostThreshold})};static Views={All:["ID","Title","Request"]};static ListDef={name:"st_it_software",title:"st_it_software",fields:s.Views.All};static uid="it_software"};var io=T`
  <div>
    <div class="row row-cols-2" data-bind="foreach: FormFields">
      <div
        class="col pb-2"
        data-bind="component: {name: components.edit, params: $data}"
      ></div>
    </div>
    <div class="alert alert-warning" data-bind="visible: ShowEndofLoanAlert">
      <h4>End of Loan Return of Items</h4>
      All property which was borrowed must be returned to the Bureau by the
      employee when the property is no longer needed for the use for which it
      was originally provided 14 FAM 425 3-4. The employee must email the
      CGFS/EX/ADMIN team at
      <a href="mailto:CGFS_EX_ADMIN@state.gov">CGFS_EX_ADMIN@state.gov</a> to
      coordinate return. Reminder, any lost or damaged property is the
      responsibility of the borrowing employee. Any lost or damaged property
      must be immediately reported to the CGFS/EX/ADMIN team.
    </div>
  </div>
`;var oo=T`
  <div>
    <div class="row row-cols-2" data-bind="foreach: FormFields">
      <div
        class="col pb-2"
        data-bind="component: {name: components.view, params: $data}"
      ></div>
    </div>
    <div class="alert alert-warning" data-bind="visible: ShowEndofLoanAlert">
      <h4>End of Loan Return of Items</h4>
      All property which was borrowed must be returned to the Bureau by the
      employee when the property is no longer needed for the use for which it
      was originally provided 14 FAM 425 3-4. The employee must email the
      CGFS/EX/ADMIN team at
      <a href="mailto:CGFS_EX_ADMIN@state.gov">CGFS_EX_ADMIN@state.gov</a> to
      coordinate return. Reminder, any lost or damaged property is the
      responsibility of the borrowing employee. Any lost or damaged property
      must be immediately reported to the CGFS/EX/ADMIN team.
    </div>
  </div>
`;var Xs={view:"svc-prop_space-view",edit:"svc-prop_space-edit",new:"svc-prop_space-edit"},zs=class extends Ae{constructor(e){super(e)}static name=Xs.edit;static template=io},Js=class extends ke{constructor(e){super(e)}static name=Xs.view;static template=oo};z(zs);z(Js);var Ks=class s extends y{constructor(e){super(e)}serviceTypes={Property:"Property",Space:"Space"};propertySvcTypes={Inventory:"Inventory Request",Move:"Property move from one space to another",Excess:"Property excess request",Loanable:"Loanable Property"};propertyTypeOptions=["Backpack","Computer Monitor","Computer Speakers","Headset","Keyboard","Mouse","PIV Card Reader","Web Camera"];spaceSvcTypes={Move:"Moving from one space to another",New:"Request for new office space"};ShowEndofLoanAlert=ko.pureComputed(()=>this.FieldMap.PropOrSpace.Value()==this.serviceTypes.Property&&this.FieldMap.PropRequestType.Value()==this.propertySvcTypes.Loanable);FieldMap={...this.FieldMap,PropOrSpace:new h({displayName:" Type",options:Object.values(this.serviceTypes),isRequired:!0}),PropRequestType:new h({displayName:"Property Request Type",options:Object.values(this.propertySvcTypes),isRequired:!0,Visible:ko.pureComputed(()=>this.FieldMap.PropOrSpace.Value()==this.serviceTypes.Property)}),LocationChoice:new h({displayName:"Location",options:["On Premise","Off Premise"],isRequired:!0,Visible:ko.pureComputed(()=>this.FieldMap.PropOrSpace.Value()==this.serviceTypes.Property&&this.FieldMap.PropRequestType.Value()==this.propertySvcTypes.Inventory)}),SpaceRequestType:new h({displayName:"Space Request Type",options:Object.values(this.spaceSvcTypes),isRequired:!0,Visible:ko.pureComputed(()=>this.FieldMap.PropOrSpace.Value()==this.serviceTypes.Space)}),NumberEmployees:new l({displayName:"Number of Employees",isRequired:!0,Visible:ko.pureComputed(()=>this.FieldMap.PropOrSpace.Value()==this.serviceTypes.Space&&this.FieldMap.SpaceRequestType.Value()==this.spaceSvcTypes.New)}),Timeframe:new l({displayName:"New Location",isRequired:!0,Visible:ko.pureComputed(()=>this.FieldMap.PropOrSpace.Value()==this.serviceTypes.Space)}),CurrentLocation:new l({displayName:"Current Location",isRequired:!0,Visible:ko.pureComputed(()=>{let e=this.FieldMap.PropOrSpace.Value();if(!e)return!1;if(e==this.serviceTypes.Property)return this.FieldMap.PropRequestType.Value()==this.propertySvcTypes.Move||this.FieldMap.PropRequestType.Value()==this.propertySvcTypes.Excess;if(e==this.serviceTypes.Space)return this.FieldMap.SpaceRequestType.Value()==this.spaceSvcTypes.Move})}),NewLocation:new l({displayName:"New Location",isRequired:!0,Visible:ko.pureComputed(()=>{let e=this.FieldMap.PropOrSpace.Value();if(!e)return!1;if(e==this.serviceTypes.Property)return this.FieldMap.PropRequestType.Value()==this.propertySvcTypes.Move;if(e==this.serviceTypes.Space)return this.FieldMap.SpaceRequestType.Value()==this.spaceSvcTypes.Move})}),NumberItems:new l({displayName:"Number of Items",isRequired:!0,Visible:ko.pureComputed(()=>{let e=this.FieldMap.PropOrSpace.Value();return e?e==this.serviceTypes.Property?this.FieldMap.PropRequestType.Value():this.FieldMap.SpaceRequestType.Value()==this.spaceSvcTypes.Move:!1})}),PropertyType:new h({displayName:"Type of Property",options:this.propertyTypeOptions,multiple:!0,isRequired:!0,Visible:ko.pureComputed(()=>this.FieldMap.PropOrSpace.Value()==this.serviceTypes.Property&&this.FieldMap.PropRequestType.Value())})};components=Xs;static Views={All:["ID","Title","PropOrSpace","PropRequestType","LocationChoice","SpaceRequestType","NumberEmployees","Timeframe","CurrentLocation","NewLocation","NumberItems","PropertyType"]};static ListDef={name:"st_property_space",title:"st_property_space",fields:s.Views.All};static uid="property_space"};var ao=T`
  <div>
    <div class="row row-cols-2" data-bind="foreach: FormFields">
      <div
        class="col pb-2"
        data-bind="component: {name: components.view, params: $data}"
      ></div>
    </div>
  </div>
`;var no=T`
  <div>
    <div class="row row-cols-2" data-bind="foreach: FormFields">
      <div
        class="col pb-2"
        data-bind="component: {name: components.edit, params: $data}"
      ></div>
    </div>
  </div>
`;var ti={view:"svc-template-view",edit:"svc-template-edit",new:"svc-template-edit"},Up=ko.pureComputed(()=>ge().find(s=>s.Title.toUpperCase()=="CGFS/APMS")),Ys=class extends ke{constructor(e){super(e)}static name=ti.view;static template=ao},Zs=class extends Ae{constructor(e){super(e)}static name=ti.edit;static template=no};z(Zs);z(Ys);var ei=class s extends y{constructor(e){super(e)}FieldMap={...this.FieldMap,SamplePeople:new k({displayName:"Supervisor",isRequired:!1}),SampleMultiPeople:new k({displayName:"Multiple People",isRequired:!1,multiple:!0}),SampleGroupPeople:new k({displayName:"Group People",isRequired:!1}),SampleSelect:new h({displayName:" Type",options:["FTE","Contractor"],isRequired:!1}),SampleText:new l({displayName:"FullName",isRequired:!1}),SampleTextArea:new W({displayName:"NotificationDates",isRequired:!1}),SampleDate:new P({displayName:"ExpirationDate",type:V.date,isRequired:!1}),SampleCheckbox:new Ie({displayName:"SpecialOrder"}),SampleLookup:new Ve({displayName:"Request Org",type:ee,lookupCol:"Title",Options:ge,isRequired:!1,multiple:!1}),SampleMultiLookup:new Ve({displayName:"Service Types",type:Me,lookupCol:"Title",Options:ue,isRequired:!1,multiple:!0})};components=ti;static Views={All:["ID","Title"]};static ListDef={name:"st_template",title:"st_template",fields:s.Views.All};static uid="template"};var La=s=>{let e=null;for(let t in ft)if(ft[t].uid==s){e=ft[t];break}return e};var ue=ko.observableArray(),Me=class s{constructor(e){this.ID=e.ID,this.Title=e.Title,this.LookupValue=e.Title,this.Loaded=!1,Object.assign(this,e)}getRepositoryListName=()=>`st_${this.UID}`;getListDef=()=>{if(!this.HasTemplate)return null;let e=this.getRepositoryListName();return{title:e,name:e}};_listRef=null;getListRef=()=>{if(!this.HasTemplate)return null;if(!this._initialized)throw new Error("Accessing constructor before initialization");return this._listRef||(this._listRef=Ne.Set(this._constructor)),this._listRef};_constructor=null;instantiateEntity=async e=>!this.HasTemplate||!this.UID?null:(this._initialized||await this.initializeEntity(),this._constructor?new this._constructor(e):null);_initialized=!1;initializeEntity=async()=>{if(this._initialized||!this.HasTemplate||!this.UID)return;if(this._constructor){console.warn("Service type was already initialized"),this._initialized=!0;return}let e=null;try{e=La(this.UID),e||console.error("Could not find service module",this),this._constructor=e}catch(t){console.error("Cannot import service type module",t,this)}finally{this._initialized=!0}};userCanInitiate=e=>this.Active?e.hasSystemRole(We.Admin)?!0:this.RequestingOrgs.length>0?this.RequestingOrgs.find(t=>e.isInRequestOrg(t))!==void 0:!0:!1;attachmentsRequiredCntString=()=>this.AttachmentsRequiredCnt?this.AttachmentsRequiredCnt<0?"multiple":this.AttachmentsRequiredCnt:"no";static FindInStore=function(e){return!e||!e.ID?null:ue().find(t=>t.ID==e.ID)};static Views={All:["ID","Title","Active","HasTemplate","DescriptionTitle","DescriptionRequired","DescriptionFieldInstructions","Description","Icon","AttachmentsRequiredCnt","AttachmentDescription","DaysToCloseBusiness","UID","ReportingOrgs","RequestingOrgs"]};static ListDef={name:"ConfigServiceTypes",title:"ConfigServiceTypes",fields:s.Views.All}};var Mt=class s extends ve{constructor({ID:e,Title:t}){super(),this.ID=e,this.Title=t,this.LookupValue=t}From=new l({displayName:"From"});To=new l({displayName:"To"});CC=new l({displayName:"CC"});Title=new l({displayName:"Subject"});Body=new W({displayName:"Body",isRichText:!0});FieldMap={To:this.To,From:this.From,CC:this.CC,Title:this.Title,Body:this.Body};getStagedAttachmentsFolderPath=()=>"Staged/"+this.ID;static Views={All:["ID","Title","From","To","CC","Body"]};static ListDef={name:"RequestIngest",title:"RequestIngest",fields:s.Views.All}};var ro=!1,ii=null;function uo(){ii||(ii=new Ne)}function Q(){return ii}var si=new Map,Ne=class{constructor(){}Actions=new we(Ke);Assignments=new we(de);Attachments=new we(Be);Comments=new we(Xe);Notifications=new we(qt);Requests=new we(re);RequestIngests=new we(Mt);ConfigHolidays=new we(xt);ConfigRequestOrgs=new we(ee);ConfigPipelines=new we(qe);ConfigServiceTypes=new we(Me);static Set=e=>{let t=e.name;if(!si.has(t)){let i=new we(e);return si.set(t,i),i}return si.get(t)}},we=class{constructor(e){if(!e.ListDef){console.error("Missing entityType listdef for",e);return}this.entityType=e;try{let t=new Set;e.Views?.All?.map(o=>t.add(o));let i=new this.entityType({ID:null,Title:null});i.FieldMap&&Object.keys(i.FieldMap).map(o=>t.add(o)),this.AllDeclaredFields=[...t]}catch(t){console.warn("Could not instantiate",e),console.warn(t),this.AllDeclaredFields=e.Views?.All??[]}this.ListDef=e.ListDef,this.Views=e.Views,this.Title=e.ListDef.title,this.Name=e.ListDef.name,this.ListRef=new Ni(e.ListDef),this.entityConstructor=this.entityType.FindInStore||this.entityType.Create||this.entityType}FindById=async(e,t=this.AllDeclaredFields)=>{let i=await this.ListRef.findByIdAsync(e,t);if(!i)return null;let o=new this.entityType(i);return Fe(i,o),o};FindByColumnValue=async(e,{orderByColumn:t,sortAsc:i},{count:o=null},a=this.AllDeclaredFields,d=!1)=>{let m=o!=null;o=o??5e3;let b=await this.ListRef.findByColumnValueAsync(e,{orderByColumn:t,sortAsc:i},{count:o},a,d),x={_next:b._next,results:b.results.map(_=>{let J=new this.entityConstructor(_);return Fe(_,J),J})};if(m)return x;let O={results:x.results};for(;x._next;)x=await this.LoadNextPage(x),O.results.concat(x.results);return O};LoadNextPage=async e=>{let t=await this.ListRef.loadNextPage(e);return{_next:t._next,results:t.results.map(i=>{let o=new this.entityType(i);return Fe(i,o),o})}};ToList=async(e=this.Views.All)=>(await this.ListRef.getListItemsAsync({fields:e})).map(i=>{let o=new this.entityType(i);return Fe(i,o),o});LoadEntity=async function(e){if(!e.ID)return console.error("entity missing Id",e),!1;let t=await this.ListRef.findByIdAsync(e.ID,this.ListDef.fields);return t?(Fe(t,e),!0):(console.warn("ApplicationDbContext Could not find entity",e),!1)};AddEntity=async function(e,t,i=null){let a=co.bind(this)(e);i&&(a.Title=i.Title,a.Request=i),ro&&console.log(a);let d=await this.ListRef.createListItemAsync(a,t);Fe({ID:d},e)};UpdateEntity=async function(e,t=null){let i=co.bind(this)(e,t);return i.ID=typeof e.ID=="function"?e.ID():e.ID,ro&&console.log(i),this.ListRef.updateListItemAsync(i)};RemoveEntity=async function(e){return e.ID?(await this.ListRef.deleteListItemAsync(e.ID),!0):!1};SetItemPermissions=async function(e,t,i=!1){let o=t.filter(a=>a[0]&&a[1]).map(a=>[a[0].getKey(),a[1]]);return this.ListRef.setItemPermissionsAsync(e,o,i)};GetItemPermissions=function(e){return this.ListRef.getItemPermissionsAsync(e)};GetFolderUrl=function(e=""){return this.ListRef.getServerRelativeFolderPath(e)};GetItemsByFolderPath=async function(e,t=this.AllDeclaredFields){return(await this.ListRef.getFolderContentsAsync(e,t)).map(o=>{let a=new this.entityType(o);return Fe(o,a),a})};UpsertFolderPath=async function(e){return this.ListRef.upsertFolderPathAsync(e)};DeleteFolderByPath=function(e){return this.ListRef.deleteFolderByPathAsync(e)};SetFolderReadOnly=async function(e){return this.ListRef.setFolderReadonlyAsync(e)};SetFolderPermissions=async function(e,t,i=!0){let o=t.filter(a=>a[0]&&a[1]).map(a=>[a[0].getKey(),a[1]]);return this.ListRef.setFolderPermissionsAsync(e,o,i)};EnsureFolderPermissions=async function(e,t){let i=t.filter(o=>o[0]&&o[1]).map(o=>[o[0].LoginName??o[0].Title,o[1]]);return this.ListRef.ensureFolderPermissionsAsync(e,i)};UploadFileToFolderAndUpdateMetadata=async function(e,t,i,o,a){let d=await this.ListRef.uploadFileToFolderAndUpdateMetadata(e,t,i,o,a),m=await this.ListRef.getById(d,this.AllDeclaredFields),b=new this.entityConstructor(m);return Fe(m,b),b};UploadNewDocument=async function(e,t){return this.ListRef.uploadNewDocumentAsync(e,"Attach a New Document",t)};CopyFolderContents=async function(e,t){return this.ListRef.copyFilesAsync(e,t)};ShowForm=async function(e,t,i){return new Promise((o,a)=>this.ListRef.showModal(e,t,i,o))};EnsureList=async function(){}};function Fe(s,e){!s||!e||Object.keys(s).forEach(t=>{Va(t,s[t],e)})}function Va(s,e,t){if(t.FieldMap&&t.FieldMap[s]){Ma(e,t.FieldMap[s]);return}if(t[s]&&typeof t[s]=="function"){t[s](e);return}t[s]=e}function Ma(s,e){if(typeof e=="function"){e(s);return}if(typeof e!="object"){e=s;return}if(e.set&&typeof e.set=="function"){e.set(s);return}if(e.obs){if(!s){e.obs(null);return}let t=Array.isArray(s)?s.map(i=>lo(i,e)):lo(s,e);e.obs(t);return}e=s}function lo(s,e){return e.factory?e.factory(s):s}function co(s,e=null){let t={},i=new Set([]);this?.ListDef?.fields&&this.ListDef.fields.forEach(d=>i.add(d)),s.FieldMap&&Object.keys(s.FieldMap).forEach(d=>i.add(d));let o=[...i];return(e??(s.FieldMap?Object.keys(s.FieldMap):null)??Object.keys(s)).filter(d=>o.includes(d)).map(d=>{if(s.FieldMap&&s.FieldMap[d]){t[d]=_a(s.FieldMap[d]);return}t[d]=s[d]}),t}function _a(s){return typeof s=="function"?s():s.get&&typeof s.get=="function"?s.get():s.obs?s.obs():s}var _t=class{constructor({addNew:e,refresh:t,list:i,AreLoading:o},a){a.subscribeAdded(this.activityQueueWatcher),this.addNew=e,this.refresh=t,this.Actions=i.All,this.AreLoading=o}activityQueueWatcher=e=>{e.map(({activity:t,data:i})=>{this.actionTypeFunctionMap[t]&&this.actionTypeFunctionMap[t](i)})};actionTypeFunctionMap={Assigned:this.assignmentAdded.bind(this),Unassigned:this.assignmentRemoved.bind(this),Created:this.requestCreated.bind(this),Advanced:this.requestAdvanced.bind(this),Approved:this.requestApproved.bind(this),Rejected:this.requestRejected.bind(this),Paused:this.requestPaused.bind(this),Resumed:this.requestResumed.bind(this),Closed:this.requestClosed.bind(this)};async requestCreated(e){this.addNew({ActionType:B.Created,Description:`The request was submitted with an effective submission date of ${e.Dates.Submitted.toLocaleDateString()}.`})}async requestAdvanced(e){this.addNew({ActionType:B.Advanced,Description:`The request was advanced to stage ${e.Step}: ${e.Title}.`})}requestPaused(e){this.addNew({ActionType:B.Paused,Description:e})}requestResumed(){this.addNew({ActionType:B.Resumed,Description:"Request clock has been resumed"})}async requestClosed(e){this.addNew({ActionType:B.Closed,Description:`The request was closed with a status of ${e.State.Status()}.`})}async assignmentCompleted(e){let t=`${e.ActionTaker.Title} has ${e.Status} an assignment.`;this.addNew({ActionType:e.Status,Description:t})}async requestApproved(e){let t=`${e.ActionTaker.Title} has ${e.Status} an assignment.`;this.addNew({ActionType:B.Approved,Description:t})}async requestRejected(e){let t=`${e.ActionTaker.Title} has rejected the request and provided the following reason:<br/>`+e.Comment;this.addNew({ActionType:B.Rejected,Description:t})}async assignmentAdded(e){let t=`The following ${e.Role.LookupValue}s have been assigned to this request:<br>`;e.Assignee?.Title&&(t+=`${e.Assignee.Title} - `),t+=e.RequestOrg?.Title,this.addNew({ActionType:B.Assigned,Description:t})}async assignmentRemoved(e){let t=`The following ${e.Role.LookupValue??e.Role}s have been removed from this request:<br>`;e.Assignee?.Title&&(t+=`${e.Assignee.Title} - `),t+=e.RequestOrg?.Title,this.addNew({ActionType:B.Unassigned,Description:t})}};function Bt(s,e){for(var t=0,i=new Date(s),o=Math.abs(e),a=Math.sign(e);o>=0;)i.setTime(s.getTime()+a*t*864e5),ho(i)&&!mo(i)&&--o,++t;return i}function po(s,e){for(var t=0,i=new Date(s),o=Math.sign(e-s);i.format("yyyy-MM-dd")!=e.format("yyyy-MM-dd");)ho(i)&&!mo(i)&&t++,i.setDate(i.getDate()+1*o);return t*o}function mo(s){var e=kt().find(function(t){var i=t.Date.getUTCDate()==s.getUTCDate(),o=t.Date.getUTCMonth()==s.getUTCMonth(),a=t.Date.getUTCFullYear()==s.getUTCFullYear();return t.Repeating&&(a=!0),i&&o&&a});return e}function ho(s){var e=s.getDay();if(e===0||e===6)return!1;let t=["12/31+5","1/1","1/2+1","1-3/1","2-3/1","5~1/1","7/3+5","7/4","7/5+1","9-1/1","10-2/1","11/10+5","11/11","11/12+1","11-4/4","12/24+5","12/25","12/26+1"];var i=s.getDate(),o=s.getMonth()+1,a=o+"/"+i;if(t.indexOf(a)>-1)return!1;var d=a+"+"+e;if(t.indexOf(d)>-1)return!1;var m=Math.floor((i-1)/7)+1,b=o+"-"+m+"/"+e;if(t.indexOf(b)>-1)return!1;var x=new Date(s);x.setMonth(x.getMonth()+1),x.setDate(0);var O=Math.floor((x.getDate()-i-1)/7)+1,_=o+"~"+O+"/"+e;return!(t.indexOf(_)>-1)}var go=Ii,fo={};window.history.replaceState({},"",document.location.href);function Ye(s,e){if(Ut(s)==e)return;let t=window.location.search,i=new RegExp("([?;&])"+s+"[^&;]*[;&]?"),o=t.replace(i,"$1").replace(/&$/,""),a=(o.length>2?o+"&":"?")+(e?s+"="+e:"");fo[s]=e,window.history.pushState(fo,"",a.toString())}function Ut(s){let e=new RegExp("[?&]"+s+"=([^&#]*)").exec(window.location.href);return e==null?null:decodeURI(e[1])||0}var yo={Created:Ba,Advanced:Ua,Assigned:Ga,Closed:$a};async function vo(s,e){let t=[e.RequestorInfo.Requestor(),I()],i=[];e.Assignments.list.All().filter(a=>a.PipelineStage?.ID==e.Pipeline.Stage()?.ID).map(a=>{a.Assignee?.LoginName&&t.push(a.Assignee),i.push(a.RequestOrg)});let o={To:t,CC:i,Request:e,Title:bt(e,"New Comment"),Body:`${I().Title} has left a new comment on ${e.getAppLinkElement()}:<br/><br/>`};await gt(o,e.getRelativeFolderPath())}function wo(s,e){window.DEBUG&&(console.log("Sending Notification: ",e),console.log("for request: ",s)),yo[e.activity]&&yo[e.activity](s,e)}async function Ba(s){window.DEBUG&&console.log("Sending Request Created Notification for: ",s);let e=[...new Set(s.Pipeline.RequestOrgs()?.map(a=>a.Title))],t="";e.forEach(a=>{t+=`<li>${a}</li>`});let i={To:[s.RequestorInfo.Requestor(),I()],Title:bt(s,"New"),Body:`<p>Your ${s.RequestType.Title} request has been successfully submitted.</p><p>${s.getAppLinkElement()}</p><p>Estimated days to close this request type: `+s.RequestType.DaysToCloseBusiness+"</p><p>This request will be serviced by:</br><ul>"+t+"</ul></p><p>To view the request, please click the link above, or copy and paste the below URL into your browser:</br>"+s.getAppLink(),Request:s};await gt(i,s.getRelativeFolderPath());let o={To:s.Pipeline.RequestOrgs()?.map(a=>ee.FindInStore(a)),Title:bt(s,"New"),Body:"<p>Greetings Colleagues,<br><br> A new service request has been opened requiring your attention:<br>"+s.getAppLinkElement()+"</p><p>Estimated days to close this request type: "+s.RequestType.DaysToCloseBusiness+"</p><p>This request will be serviced by:</br><ul>"+t+"</ul></p><p>To view the request, please click the link above, or copy and paste the below URL into your browser:</br>"+s.getAppLink(),Request:s};await gt(o,s.getRelativeFolderPath())}function Ua(s){window.DEBUG&&console.log("Sending Request Advanced Notification for: ",s)}async function Ga(s,e){window.DEBUG&&console.log("Sending Request Assigned Notification for: ",s),window.DEBUG&&console.log(e);let t=e.data?.Role?.LookupValue,i="";switch(t){case Le.Subscriber:case Le.Viewer:i="<p>This notification was generated for information purposes only. You have no pending actions on this request.</p>";break;default:}let o={Title:bt(s,"Assigned"),Body:`<p>Greetings Colleagues,<br><br>You have been assigned the role of       <strong>${t}</strong> on the following       request:<br>`+s.getAppLinkElement()+"</p>"+i+"<p>To view the request, please click the link above,       or copy and paste the below URL into your browser: <br> "+s.getAppLink()+"</p>",Request:s},a=e.data?.Assignee,d=ee.FindInStore(e.data?.RequestOrg);a?.ID!=d?.UserGroup.ID?(o.To=[a],o.CC=[d]):o.To=[d],await gt(o,s.getRelativeFolderPath())}async function $a(s,e){window.DEBUG&&console.log("Sending Request Closed Notification for: ",s);let t={To:[s.RequestorInfo.Requestor()],Title:bt(s,"Closed "+s.State.Status()),Body:`<p>Greetings Colleagues,<br><br>The following request has been ${s.State.Status()}:<br>`+s.getAppLinkElement()+"</p><p>This request cannot be re-opened.</p>",Request:s};await gt(t,s.getRelativeFolderPath())}async function gt(s,e){let t=Q();s.ToString=ai(s.To),s.To=oi(s.To),s.CCString=ai(s.CC),s.CC=oi(s.CC),s.BCCString=ai(s.BCC),s.BCC=oi(s.BCC),await t.Notifications.AddEntity(s,e)}function oi(s){return s?.filter(e=>!e.PreferredEmail)?.map(e=>{if(e.UserGroup)return e.UserGroup;if(e.OrgType){console.warn("Trying to email RequestOrg!");return}return e})}function ai(s){return s?.filter(e=>e.PreferredEmail)?.map(e=>e.PreferredEmail).join(";")}function bt(s,e){return`${Gi} -${e}- ${s.RequestType.Title} - ${s.Title}`}var yt=ko.observableArray(),So=ko.pureComputed(()=>yt().filter(s=>s.IsBlocking())??[]),pe={init:{msg:"Initializing the Application",blocking:!0},save:{msg:"Saving Request",blocking:!0},cancelAction:{msg:"Cancelling Action",blocking:!0},view:{msg:"Viewing Request",blocking:!1},refresh:{msg:"Refreshing Request",blocking:!1},permissions:{msg:"Updating Request Item Permissions",blocking:!0},lock:{msg:"Locking Request",blocking:!0},closing:{msg:"Closing Request",blocking:!0},pipeline:{msg:"Progressing to Next Stage",blocking:!0},newComment:{msg:"Submitting Comment",blocking:!1},refreshComments:{msg:"Refreshing Comments",blocking:!1},notifyComment:{msg:"Sending Comment Email",blocking:!1},removeComment:{msg:"Removing Comment",blocking:!1},newAction:{msg:"Submitting Action",blocking:!1},refreshActions:{msg:"Refreshing Actions",blocking:!1},newAttachment:{msg:"Submitting Attachment",blocking:!1},uploadAttachment:s=>({msg:"Uploading Attachment: "+s,blocking:!0,type:It}),refreshAttachments:{msg:"Refreshing Attachments",blocking:!1},approve:{msg:"Approving Request",blocking:!0}},me=s=>{let e=s.type?new s.type(s):new mt(s);return yt.push(e),e},le=function(s){s&&(s.markComplete(),window.setTimeout(()=>ja(s),3e3))},ja=function(s){yt.remove(s)};var He=class{constructor(e,t){this.includeAssignments=t,this.filter=e}IsLoading=ko.observable();HasLoaded=ko.observable(!1);List=ko.observableArray();load=async()=>{this.IsLoading(!0);let e=new Date,i=(await Q().Requests.FindByColumnValue([{column:"RequestStatus",value:this.filter}],{orderByColumn:"Title",sortAsc:!1},{},re.Views.ByStatus,!1)).results;this.includeAssignments&&i.map(a=>a.Assignments.refresh()),this.List(i);let o=new Date;window.DEBUG&&console.log(`Request by status Set - ${this.filter}: ${i.length} cnt in ${o-e}`),this.HasLoaded(!0),this.IsLoading(!1)};init=async()=>{if(!this.HasLoaded()){if(this.IsLoading())return new Promise((e,t)=>{this.isLoadingSubscription=this.IsLoading.subscribe(i=>{this.isLoadingSubscription.dispose(),e()})});await this.load()}};dispose(){this.isLoadingSubscription&&this.isLoadingSubscription.dispose()}includeAssignments=async()=>{}};var ie=new Map;ie.set(F.open,new He(F.open,!0));ie.set(F.fulfilled,new He(F.fulfilled));ie.set(F.cancelled,new He(F.cancelled));ie.set(F.rejected,new He(F.rejected));var vt=ko.observableArray();var be={New:"New",Edit:"Edit",View:"View"},Ha={New:"request-header-edit",View:"request-header-view",Edit:"request-header-edit"},Qa={New:"request-body-edit",View:"request-body-view",Edit:"request-body-edit"},Gt=class{refreshAll=async()=>{await this.request.refreshAll()};Request=ko.observable();get request(){return this.Request()}DisplayModes=be;DisplayMode=ko.observable();HeaderComponentName=ko.pureComputed(()=>Ha[this.DisplayMode()]);BodyComponentName=ko.pureComputed(()=>Qa[this.DisplayMode()]);ShowActionsArea=ko.pureComputed(()=>this.request.State.IsActive()&&!this.request.IsLoading()&&!this.request.Assignments.AreLoading()&&this.request.Assignments.CurrentStage.list.UserActionAssignments().length);ShowCloseArea=ko.pureComputed(()=>!this.request.IsLoading()&&!this.request.Assignments.AreLoading()&&this.request.Authorization.currentUserCanClose());newComment={input:new W({displayName:"Please provide additional comments/instructions here",instructions:null,isRichText:!0}),submit:async()=>{let e={Comment:this.newComment.input.Value()};await this.request.Comments.addNew(e),this.newComment.input.Value("")}};submitNewRequest=async()=>{if(!this.request.Validation.validate())return;let e=this.request.RequestType;if(!e)throw"no service type provided";let t=me(pe.save);this.DisplayMode(be.View),this.request.DisplayMode(be.View),this.request.State.Status(F.open);let i=this.request.getRelativeFolderPath();{let d=me(pe.permissions),m=this.request.getFolderPermissions(),b=this.request.getInitialListRefs(),x=this.request.Attachments.list.All().length;if(x&&b.push(this._context.Attachments),await Promise.all(b.map(async O=>{if(!await O.UpsertFolderPath(i)){alert(`Could not create ${O.Title} folder `+i);return}let J=await O.SetFolderPermissions(i,m)})),le(d),x){let O=this.request.getRelativeFolderPathStaging();await this._context.Attachments.CopyFolderContents(O,i),await this._context.Attachments.DeleteFolderByPath(O)}}let o=this.request.calculateEffectiveSubmissionDate();this.request.Dates.Submitted.set(o),this.request.Dates.EstClosed.set(Bt(o,e.DaysToCloseBusiness)),this.request.RequestOrgs(this.request.Pipeline.Stages().filter(d=>d.RequestOrg!=null).map(d=>d.RequestOrg)),this.request.State.InternalStatus(Ue.inProgress),this.request.State.IsActive(!0),await this._context.Requests.AddEntity(this.request,i),Ye("reqId",this.request.Title),this.request.ActivityQueue.push({activity:B.Created,data:this.request}),this.request.Pipeline.advance(),this.request.Validation.reset(),this.request.LoadedAt(new Date),ie.get(F.open).List.push(this.request),le(t)};editRequestHandler=async()=>{this.DisplayMode(be.Edit)};updateRequestHandler=async()=>{this.DisplayMode(be.View)};cancelChangesHandler=async()=>{this.refreshAll(),this.DisplayMode(be.View)};promptClose=()=>{confirm("Close and finalize request? This action cannot be undone!")&&this.request.closeAndFinalize(F.fulfilled)};promptFulfill=()=>{if(this.request.Pipeline.Stage().ActionType==Te.Closed&&confirm("Close and finalize request? This action cannot be undone!")){this.request.closeAndFinalize(F.fulfilled);return}let e=this.request.Pipeline.Stages().length-this.request.Pipeline.Stage()?.Step;if(e&&confirm(`This request still has ${e} open steps! Are you sure you want to close and finalize it? This action cannot be undone!`)){this.request.closeAndFinalize(F.fulfilled);return}};promptCancel=()=>{confirm("Cancel request? This action cannot be undone!")&&this.request.closeAndFinalize(F.cancelled)};pauseOptions=Object.entries(Ue).filter(([e,t])=>t!=Ue.inProgress).map(([e,t])=>({key:e,value:t}));pauseReason=ko.observable();showPause=ko.pureComputed(()=>this.request.State.Status()==F.open&&this.request.State.InternalStatus()==Ue.inProgress);clickPause=()=>{let e=this.pauseReason();this.pauseReason(null),this.request.pauseRequest(e)};showResume=ko.pureComputed(()=>this.request.State.IsPaused());clickResume=()=>{this.request.resumeRequest()};validationWatcher=e=>{e&&this.request.Authorization.currentUserCanAdvance()&&!this.request.Assignments.CurrentStage.list.InProgress().length&&this.promptAdvance()};nextStageHandler=()=>{if(!this.request.Assignments.CurrentStage.list.InProgress().length){this.request.Pipeline.advance();return}this.promptAdvance()};promptAdvanceModal;promptAdvance=()=>{this.promptAdvanceModal||(this.promptAdvanceModal=new bootstrap.Modal(document.getElementById("modal-advance-request"),{})),this.promptAdvanceModal.show()};confirmAdvanceHandler=()=>{if(!this.request.Pipeline.getNextStage()){this.promptClose(),this.promptAdvanceModal.hide();return}this.request.Pipeline.advance(),this.promptAdvanceModal.hide()};approveRequestHandler=()=>{this.approveRequest()};async approveRequest(){this.promptAdvance()}serviceTypeDefinitionWatcher=e=>{};createNewRequest=async({request:e})=>{let{Requestor:t,Phone:i,Email:o,OfficeSymbol:a}=e.RequestorInfo,d=e.Author.Value;t()||t(new K(I())),d()||d(new K(I())),i()||i(I().WorkPhone),o()||o(I().EMail),a.get()||a.set(I().OfficeSymbol);let{Status:m,InternalStatus:b,IsActive:x}=e.State;m()||m(F.draft),b()||b(F.draft),x()||x(!0),e.LoadedAt(new Date),e.Validation.IsValid.subscribe(this.validationWatcher),this.Request(e),this.DisplayMode(be.New)};viewRequest=({request:e})=>{e.Validation.IsValid.subscribe(this.validationWatcher),this.Request(e),this.DisplayMode(be.View),this.refreshAll()};constructor(){this._context=Q()}};var ni={Draft:"text-bg-info",Open:"text-bg-primary",Paused:"text-bg-warning","In Progress":"text-bg-primary",Completed:"text-bg-success",Cancelled:"text-bg-warning",Rejected:"text-bg-danger"},re=class s{constructor({ID:e=null,Title:t=null,ServiceType:i=null}){this.ID=e,this.Title=t??Hi(),this.LookupValue=t,this._context=Q(),e||(this.DisplayMode(be.New),this.State.Status(F.draft)),i&&(this.RequestType=Me.FindInStore(i),this.RequestType._constructor&&(this.RequestBodyBlob=new Pe({displayName:"Service Type Details",isRequired:!1,width:12,entityType:ko.observable(this.RequestType._constructor)}))),this.ActivityQueue.subscribe(this.activityQueueWatcher,this,"arrayChange")}DisplayMode=ko.observable(be.View);Displaymodes=be;get ID(){return this.ObservableID()}set ID(e){this.ObservableID(e)}get Title(){return this.ObservableTitle()}set Title(e){this.ObservableTitle(e)}ObservableID=ko.observable();ObservableTitle=ko.observable();RequestSubject=ko.observable();RequestDescription=new W({displayName:ko.pureComputed(()=>this.RequestType?.DescriptionTitle??"Description"),instructions:ko.pureComputed(()=>this.RequestType?.DescriptionFieldInstructions),isRichText:!0,isRequired:ko.pureComputed(()=>this.RequestType?.DescriptionRequired??!1),width:"12"});RequestorInfo={Requestor:ko.observable(),Phone:ko.observable(),Email:ko.observable(),Office:ko.observable(),OfficeSymbol:new l({displayName:"Office Symbol"})};Author=new k({displayName:"Created By"});State={IsActive:ko.observable(),Status:ko.observable(),StatusClass:ko.pureComputed(()=>ni[this.State.Status()]),InternalStatus:ko.observable(),InternalStatusClass:ko.pureComputed(()=>ni[this.State.InternalStatus()]??ni.Paused),IsPaused:ko.pureComputed(()=>this.State.Status()==F.open&&this.State.InternalStatus()!=Ue.inProgress)};Reporting={MeetingStandard:ko.pureComputed(()=>this.Reporting.AgingDays()<=0),AgingDays:ko.pureComputed(()=>this.Reporting.OpenDays()-this.RequestType.DaysToCloseBusiness),OpenDays:ko.pureComputed(()=>{let e=this.Dates.Closed.Value()??new Date;return po(this.Dates.Submitted.Value(),e)})};Dates={Submitted:new P({displayName:"Submitted Date"}),EstClosed:new P({displayName:"Est. Closed Date"}),Closed:new P({displayName:"Closed Date"})};RequestOrgs=ko.observable();RequestType;RequestBodyBlob;Pipeline={Stage:ko.observable(),PreviousStage:ko.observable(),Icon:ko.pureComputed(()=>this.RequestType?.Icon),Stages:ko.pureComputed(()=>{if(!this.RequestType)return[];let e=Je().filter(i=>i.ServiceType?.ID==this.RequestType?.ID).sort(ji("Step")),t=qe.GetCompletedStage();return t.Step=e.length+1,e.push(t),e}),RequestOrgs:ko.pureComputed(()=>this.Pipeline.Stages().filter(e=>e.RequestOrg).map(e=>e.RequestOrg)),getNextStage:ko.pureComputed(()=>{let t=(this.Pipeline.Stage()?.Step??0)+1;return this.Pipeline.Stages()?.find(i=>i.Step==t)}),advance:async()=>{let e=me(pe.pipeline);this.promptAdvanceModal&&this.promptAdvanceModal.hide(),await this.resumeRequest();let t=this.Pipeline.getNextStage();if(t.ActionType==Te.Closed)return console.log("Closing Request"),this.closeAndFinalize(F.fulfilled),le(e),null;let i=this.Pipeline.Stage();this.Pipeline.PreviousStage(i),this.Pipeline.Stage(t),await this._context.Requests.UpdateEntity(this,["PipelineStage","PipelineStagePrev"]),this.ActivityQueue.push({activity:B.Advanced,data:t}),await this.Assignments.createStageAssignments(t),t.ActionType==Te.Notification&&this.Pipeline.advance(),t.ActionType==Te.Closed&&this.closeAndFinalize(F.fulfilled),le(e)}};Attachments={AreLoading:ko.observable(),list:{All:ko.observableArray(),Active:ko.pureComputed(()=>this.Attachments.list.All().filter(e=>e.IsActive))},Validation:{Errors:ko.pureComputed(()=>{let e=[],t=this.RequestType?.AttachmentsRequiredCnt??0;return t<0&&(t=1),this.Attachments.list.Active().length<t&&e.push(new Re("attachment-count-mismatch","request-header",`This request has ${this.RequestType.attachmentsRequiredCntString()} required attachment(s)!`)),e})},userCanAttach:ko.pureComputed(()=>this.Authorization.currentUserCanSupplement()),createFolder:async()=>{let e=me(pe.newAttachment),t=this.getRelativeFolderPath(),i=this.getFolderPermissions();try{await this._context.Attachments.UpsertFolderPath(t),await this._context.Attachments.SetFolderPermissions(t,i),this.Attachments.refresh()}catch(o){console.error("Error creating folder: ",o),t=null}finally{le(e)}return t},newAttachmentFiles:ko.observableArray(),removeFile:e=>{this.Attachments.newAttachmentFiles.remove(e)},addNew:async()=>{let e=await this.Attachments.createFolder();e||alert("Unable to create folder"),await Promise.all(this.Attachments.newAttachmentFiles().map(async t=>{let i=me(pe.uploadAttachment(t.name)),o=t.name.split(".").slice(0,-1).join(".")??t.name;await this._context.Attachments.UploadFileToFolderAndUpdateMetadata(t,t.name,e,{Title:o,RequestId:this.ID,IsActive:!0},({currentBlock:a,totalBlocks:d})=>{i.updateProgress({percentDone:a/d})}),le(i)})),this.Attachments.newAttachmentFiles([]),this.Attachments.refresh()},refresh:async()=>{if(!this.Title)return;let e=me(pe.refreshAttachments);this.Attachments.AreLoading(!0);try{let t=await this._context.Attachments.GetItemsByFolderPath(this.getRelativeFolderPath(),Be.Views.All);this.Attachments.list.All(t)}catch(t){console.warn("Looks like there are no attachments",t)}this.Attachments.AreLoading(!1),le(e)},view:e=>{this._context.Attachments.ShowForm("DispForm.aspx","View "+e.Title,{id:e.ID})},userCanRemove:e=>ko.pureComputed(()=>!!this.Authorization.currentUserCanSupplement()),remove:async e=>{console.log("removing",e),e.IsActive=!1,await this._context.Attachments.UpdateEntity(e,["IsActive"]),this.Attachments.refresh()}};Comments={AreLoading:ko.observable(),list:{All:ko.observableArray(),Active:ko.pureComputed(()=>this.Comments.list.All().filter(e=>e.IsActive))},userCanComment:ko.pureComputed(()=>this.Authorization.currentUserCanSupplement()),addNew:async e=>{let t=me(pe.newComment),i=this.getRelativeFolderPath(),o=this.getFolderPermissions();try{let a=await this._context.Comments.UpsertFolderPath(i);await this._context.Comments.SetFolderPermissions(i,o),await this._context.Comments.AddEntity(e,i),this.Comments.refresh()}catch{console.error("Error creating folder: ")}finally{le(t)}},update:async e=>{},refresh:async()=>{let e=me(pe.refreshComments);this.Comments.AreLoading(!0);let t=this.getRelativeFolderPath(),i=await this._context.Comments.GetItemsByFolderPath(t,Xe.Views.All);this.Comments.list.All(i),this.Comments.AreLoading(!1),le(e)},sendNotification:async e=>{let t=me(pe.newComment);await vo(e,this),e.NotificationSent=!0,await this._context.Comments.UpdateEntity(e,["NotificationSent"]),this.Comments.refresh(),le(t)},remove:async e=>{let t=me(pe.removeComment);e.IsActive=!1,await this._context.Comments.UpdateEntity(e,["IsActive"]),this.Comments.refresh(),le(t)}};Assignments={HaveLoaded:ko.observable(!1),AreLoading:ko.observable(),list:{All:ko.observableArray(),InProgress:ko.pureComputed(()=>this.Assignments.list.All().filter(e=>e.Status==E.InProgress)),Dashboard:ko.pureComputed(()=>this.Assignments.list.All()),CurrentUserAssignments:ko.pureComputed(()=>{if(!this.Assignments.list.All().length)return[];let e=I().getGroupIds(),t=I().ActionOffices().map(o=>o.ID);return this.Assignments.list.All().filter(o=>o.Assignee?.ID==I()?.ID||e.includes(o.Assignee?.ID)||t.includes(o.RequestOrg?.ID))})},getFolderUrl:()=>this._context.Assignments.GetFolderUrl(this.getRelativeFolderPath()),CurrentStage:{list:{ActionAssignments:ko.pureComputed(()=>this.Assignments.list.All().filter(e=>e.PipelineStage?.ID==this.Pipeline.Stage()?.ID&&e.isActionable())),InProgress:ko.pureComputed(()=>this.Assignments.list.InProgress().filter(e=>e.PipelineStage?.ID==this.Pipeline.Stage()?.ID)),UserActionAssignments:ko.pureComputed(()=>this.Assignments.list.CurrentUserAssignments().filter(e=>e.PipelineStage?.ID==this.Pipeline.Stage()?.ID&&e.isActionable()))},Validation:{IsValid:ko.pureComputed(()=>!this.Assignments.CurrentStage.Validation.ActiveAssignmentsError()&&!this.Assignments.CurrentStage.Validation.Errors().length),Errors:ko.observableArray(),ActiveAssignmentsError:ko.pureComputed(()=>this.Assignments.CurrentStage.list.UserActionAssignments().find(t=>t.Status==E.InProgress)?(this.Assignments.CurrentStage.Validation.Errors.indexOf(At)<0&&this.Assignments.CurrentStage.Validation.Errors.push(At),!0):(this.Assignments.CurrentStage.Validation.Errors.remove(At),!1))},UserCanAdvance:ko.pureComputed(()=>this.Assignments.CurrentStage.list.UserActionAssignments().length),AssignmentComponents:ko.pureComputed(()=>this.Assignments.CurrentStage.list.UserActionAssignments().map(e=>({request:this,assignment:e,addAssignment:this.Assignments.addNew,completeAssignment:this.Assignments.complete,errors:this.Assignments.CurrentStage.Validation.Errors,actionComponentName:e.getComponentName()})))},refresh:async()=>{this.Assignments.AreLoading(!0);let e=await this._context.Assignments.GetItemsByFolderPath(this.getRelativeFolderPath(),de.Views.All);e.map(t=>t.RequestOrg=ee.FindInStore(t.RequestOrg)??t.RequestOrg),this.Assignments.list.All(e),this.Assignments.HaveLoaded(!0),this.Assignments.AreLoading(!1)},userCanAssign:ko.pureComputed(()=>{if(!this.State.IsActive())return!1;let e=this.Pipeline.Stage()?.RequestOrg;return e?!!I().isInRequestOrg(e):!1}),addNew:async(e=null)=>{if(!this.ID||!e)return;e.Title=this.Title,e.RequestOrg||(e.RequestOrg=this.Pipeline.Stage()?.RequestOrg),e.PipelineStage||(e.PipelineStage=this.Pipeline.Stage()),e.CustomComponent=e.PipelineStage.ActionComponentName,e.Status=e.Role.initialStatus;let t=this.getRelativeFolderPath();await this._context.Assignments.AddEntity(e,t,this),await this.Assignments.refresh(),this.RequestOrgs().find(i=>i.ID==e.RequestOrg.ID)||(this.RequestOrgs.push(e.RequestOrg),await this._context.Requests.UpdateEntity(this,["RequestOrgs"])),this.ActivityQueue.push({activity:B.Assigned,data:e}),e.Role?.permissions&&this.Authorization.ensureAccess([[e.Assignee,e.Role.permissions]])},view:e=>{this._context.Assignments.ShowForm("DispForm.aspx","View "+e.Assignee.Title,{id:e.ID})},remove:async e=>{if(confirm("Are you sure you want to remove this assignment?")){try{await this._context.Assignments.RemoveEntity(e)}catch(t){console.error("Unable to remove assignment",t);return}this.Assignments.refresh(),this.ActivityQueue.push({activity:B.Unassigned,data:e})}},complete:async(e,t,i=!0)=>{let o={ID:e.ID,Status:E[t],Comment:e.Comment,CompletionDate:new Date().toISOString(),ActionTaker:I()};await this._context.Assignments.UpdateEntity(o),await this.resumeRequest(),this.ActivityQueue.push({activity:B[t],data:o}),i&&this.Assignments.refresh()},createStageAssignments:async(e=this.Pipeline.Stage())=>{if(!e?.ActionType||e.ActionType==B.Closed||this.Assignments.list.All().find(i=>i.PipelineStage?.ID==e.ID))return;if(e.AssignmentFunction&&ze[e.AssignmentFunction]){try{let i=ze[e.AssignmentFunction](this,e);await Promise.all(i.map(o=>this.Assignments.addNew(o)))}catch(i){console.warn("Error creating stage assignments",e),alert(i.message);return}return}if(e.WildCardAssignee){try{let i=ze.getWildcard(this,e,e.WildCardAssignee);await Promise.all(i.map(o=>this.Assignments.addNew(o)))}catch(i){console.warn("Error creating stage assignments",e),alert(i.message);return}return}let t=new de({Assignee:e.Assignee??ee.FindInStore(e.RequestOrg)?.UserGroup,RequestOrg:e.RequestOrg,PipelineStage:e,IsActive:!0,Role:Rt[e.ActionType],CustomComponent:e.ActionComponentName});await this.Assignments.addNew(t)}};Actions={AreLoading:ko.observable(),list:{All:ko.observableArray()},refresh:async()=>{let e=me(pe.refreshActions);if(!this.ID)return;this.Actions.AreLoading(!0);let t=await this._context.Actions.GetItemsByFolderPath(this.getRelativeFolderPath(),Ke.Views.All);this.Actions.list.All(t),this.Actions.AreLoading(!1),le(e)},addNew:async e=>{if(!this.ID||!e)return;let t=me(pe.newAction),i=this.getRelativeFolderPath();e.PipelineStage=e.PipelineStage??this.Pipeline.Stage(),await this._context.Actions.AddEntity(e,i,this.request),this.Actions.refresh(),le(t)},showDialog:()=>{document.getElementById("dialog-action-log").showModal()},closeDialog:()=>{document.getElementById("dialog-action-log").close()}};ActivityQueue=ko.observableArray();ActivityLogger=new _t(this.Actions,this.ActivityQueue);IsLoading=ko.observable();LoadedAt=ko.observable();activityQueueWatcher=e=>{e.filter(i=>i.status=="added").map(i=>i.value).map(async i=>{switch(wo(this,i),i.activity){case B.Assigned:case B.Unassigned:break;case B.Rejected:console.warn("Closing request"),await this.closeAndFinalize(F.rejected);break;case B.Advanced:break}})};Validation={validate:()=>(this.Validation.WasValidated(!0),this.Validation.validateHeader(),this.Validation.validateBody(),this.Validation.IsValid()),validateHeader:()=>{this.FieldMap.RequestDescription.validate()},validateBody:()=>this.RequestBodyBlob?.Value()?.validate(),reset:()=>this.Validation.WasValidated(!1),Errors:{Request:ko.pureComputed(()=>{let e=[];return e=e.concat(this.Attachments.Validation.Errors()),e=e.concat(this.FieldMap.RequestDescription.Errors()),e}),ServiceType:ko.pureComputed(()=>this.RequestBodyBlob?.Value()?.Errors()??[]),All:ko.pureComputed(()=>[...this.Validation.Errors.Request(),...this.Validation.Errors.ServiceType(),...this.Validation.CurrentStage.Errors()])},IsValid:ko.pureComputed(()=>!this.Validation.Errors.All().length),WasValidated:ko.observable(!1),CurrentStage:{IsValid:()=>this.Assignments.CurrentStage.Validation.IsValid(),Errors:ko.pureComputed(()=>this.Assignments.CurrentStage.Validation.Errors())}};Authorization={currentUserIsActionOffice:ko.pureComputed(()=>this.Assignments.list.CurrentUserAssignments().find(e=>[Le.ActionResolver,Le.Approver].includes(e.ActionType))),currentUserCanAdvance:ko.pureComputed(()=>this.State.IsActive()&&this.Assignments.CurrentStage.list.UserActionAssignments().length),currentUserCanSupplement:ko.pureComputed(()=>{if(this.DisplayMode()==be.New)return!0;let e=I();if(!e)return console.warn("Current user not set!"),!1;if(!this.State.IsActive())return!1;if(this.Assignments.list.CurrentUserAssignments().length||this.RequestorInfo.Requestor()?.ID==e.ID)return!0}),currentUserCanClose:ko.pureComputed(()=>this.State.IsActive()&&this.Assignments.list.CurrentUserAssignments().find(e=>e.isActionable())),ensureAccess:async e=>{let t=this.getRelativeFolderPath(),i=this.getAllListRefs();await Promise.all(i.map(async o=>{await o.EnsureFolderPermissions(t,e)}))},setReadonly:async()=>{let e=this.getRelativeFolderPath(),t=this.getAllListRefs();await Promise.all(t.map(async i=>{await i.SetFolderReadOnly(e)}))}};getAppLink=()=>`${go}?reqId=${this.Title}&tab=${De.RequestDetail}`;getAppLinkElement=()=>`<a href="${this.getAppLink()}" target="blank">${this.Title}</a>`;getRelativeFolderPath=ko.pureComputed(()=>this.State.Status()==F.draft?this.getRelativeFolderPathStaging():`${this.RequestorInfo.Office()?.Title.replace("/","_")}/${this.ObservableTitle()}`);getRelativeFolderPathStaging=()=>`Staged/${this.ObservableTitle()}`;getFolderUrl=ko.pureComputed(()=>this._context.Requests.GetFolderUrl(this.getRelativeFolderPath()));getFolderPermissions=()=>Oi(this);calculateEffectiveSubmissionDate=()=>{let e=this.Dates.Submitted.get()??new Date;if(e.getUTCHours()>=19||e.getUTCHours()<4){console.log("its after 3, this is submitted tomorrow");let t=Bt(e,1);return t.setUTCHours(13),t.setUTCMinutes(0),t}else return e};refreshAll=async()=>{let e=me(pe.refresh);this.IsLoading(!0),await this.refreshRequest();let t=[this.Attachments.refresh(),this.Actions.refresh(),this.Comments.refresh(),this.Assignments.refresh()];await Promise.all(t),this.LoadedAt(new Date),this.IsLoading(!1),le(e)};refreshRequest=async()=>{this.ID&&await this._context.Requests.LoadEntity(this)};getAllListRefs(){return this.getInitialListRefs().concat([this._context.Comments,this._context.Attachments])}getInitialListRefs(){return[this._context.Requests,this._context.Actions,this._context.Assignments,this._context.Notifications]}pauseRequest=async(e="Not Provided")=>{this.State.InternalStatus(e),await this._context.Requests.UpdateEntity(this,["InternalStatus"]),this.ActivityQueue.push({activity:B.Paused,data:e})};resumeRequest=async()=>{this.State.IsPaused()&&(this.State.InternalStatus(Ue.inProgress),await this._context.Requests.UpdateEntity(this,["InternalStatus"]),this.ActivityQueue.push({activity:B.Resumed,data:this}))};closeAndFinalize=async e=>{let t=me(pe.closing);this.Assignments.list.InProgress().map(a=>{this.Assignments.complete(a,E.Cancelled,!1)});let i=qe.GetCompletedStage(),o=this.Pipeline.Stage();this.Pipeline.PreviousStage(o),this.Pipeline.Stage(i),this.State.Status(e),this.State.InternalStatus(e),this.State.IsActive(!1),this.Dates.Closed.set(new Date),await this._context.Requests.UpdateEntity(this,["PipelineStage","PipelineStagePrev","RequestStatus","InternalStatus","IsActive","ClosedDate"]),this.ActivityQueue.push({activity:B.Closed,data:this}),await this.Authorization.setReadonly(),this.refreshAll(),le(t)};FieldMap={ID:this.ObservableID,Title:this.ObservableTitle,RequestSubject:this.RequestSubject,RequestDescription:this.RequestDescription,Author:this.Author,Requestor:{set:e=>this.RequestorInfo.Requestor(K.Create(e)),get:this.RequestorInfo.Requestor},RequestorPhone:this.RequestorInfo.Phone,RequestorEmail:this.RequestorInfo.Email,RequestorOfficeSymbol:this.RequestorInfo.OfficeSymbol,RequestingOffice:{set:e=>this.RequestorInfo.Office(ee.Create(e)),get:this.RequestorInfo.Office},IsActive:this.State.IsActive,PipelineStage:{factory:qe.FindInStore,obs:this.Pipeline.Stage},PipelineStagePrev:{factory:qe.FindInStore,obs:this.Pipeline.PreviousStage},RequestStatus:this.State.Status,InternalStatus:this.State.InternalStatus,RequestSubmitted:this.Dates.Submitted,EstClosedDate:this.Dates.EstClosed,ClosedDate:this.Dates.Closed,RequestOrgs:{set:e=>this.RequestOrgs((e.results??e).map(t=>ee.Create(t))),get:this.RequestOrgs},ServiceType:{set:e=>{let t=Me.FindInStore(e);this.RequestType=t},get:()=>this.RequestType},RequestBodyBlob:{get:()=>this.RequestBodyBlob?.get(),set:e=>{if(!this.RequestBodyBlob)return;this.RequestBodyBlob.set(e);let t=this.RequestBodyBlob.Value();t?.setRequestContext&&t.setRequestContext(this)}}};static Views={All:["ID","Title","RequestDescription","Requestor","RequestorPhone","RequestorEmail","RequestorOfficeSymbol","RequestingOffice","IsActive","PipelineStage","PipelineStagePrev","RequestStatus","InternalStatus","RequestSubmitted","EstClosedDate","ClosedDate","RequestOrgs","ServiceType","RequestBodyBlob","Author"],ByStatus:["ID","Title","ServiceType","RequestorOfficeSymbol","RequestingOffice","RequestOrgs","Requestor","RequestSubmitted","PipelineStage","EstClosedDate","ClosedDate","RequestStatus","InternalStatus","RequestOrgs"],ByServiceType:["ID","Title","ServiceType","RequestorOfficeSymbol","RequestingOffice","Requestor","RequestStatus","RequestBodyBlob"]};static ListDef={name:"Requests",title:"Requests",fields:s.Views.All}};var Ao=T`
  <!-- ko if: PendingRows().length -->
  <div class="card">
    <div class="card-body">
      <div
        class="card-title d-flex justify-content-between align-items-center accordion-header"
      >
        <h4
          class="mx-0 px-2 flex-grow-1 pointer accordion-title collapsed d-flex align-items-center justify-content-between"
          data-bs-toggle="collapse"
          data-bs-target="#pending-ingest-body"
        >
          (<span data-bind="text: PendingRows().length"></span>) Pending
          Conversion
          <i class="indicator fa fa-caret-down"></i>
        </h4>
      </div>
      <div id="pending-ingest-body" class="accordion-collapse collapse">
        <table class="table table-sm hover">
          <thead>
            <tr>
              <th>Subject</th>
              <th>Convert To</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody data-bind="foreach: PendingRows">
            <tr data-bind="">
              <td>
                <button
                  type="button"
                  class="btn btn-link"
                  title="Toggle additional details"
                  data-bind="text: requestIngest.Title.toString(), 
                    toggles: ShowBody"
                ></button>
              </td>
              <td>
                <select
                  data-bind="options: $parent.ConvertToOptions, 
            optionsText: 'Title',
            optionsCaption: 'Select...',
            value: ConvertTo"
                ></select>
              </td>
              <td>
                <button
                  type="button"
                  title="Delete Item"
                  class="btn btn-link"
                  data-bind="click: $parent.deleteItem"
                >
                  <span class="fas fa-trash pointer"></span>
                </button>
              </td>
            </tr>
            <!-- ko if: ShowBody -->
            <!-- ko using: requestIngest -->
            <tr>
              <td colspan="3">
                <div class="d-flex justify-content-start gap-5 w-full">
                  <div
                    data-bind="component: {
                      name: To.components.view, 
                      params: To}"
                  ></div>
                  <div
                    data-bind="component: {
                      name: CC.components.view, 
                      params: CC}"
                  ></div>
                  <div
                    data-bind="component: {
                      name: From.components.view, 
                      params: From}"
                  ></div>
                </div>
              </td>
            </tr>
            <tr>
              <td colspan="3">
                <div
                  style="max-height: 75vh"
                  class="overflow-auto"
                  data-bind="component: {
                    name: Body.components.view, 
                    params: Body}"
                ></div>
              </td>
            </tr>
            <!-- /ko -->
            <!-- /ko -->
          </tbody>
        </table>
      </div>
    </div>
  </div>
  <!-- /ko -->
`;var ri=class extends M{PendingRows=ko.pureComputed(()=>vt().map(e=>new li(e)));ConvertToOptions=ko.pureComputed(()=>ue().filter(e=>e.userCanInitiate(I())));deleteItem=async({requestIngest:e})=>{let t=Q(),i=e.getStagedAttachmentsFolderPath();await t.Attachments.DeleteFolderByPath(i),await t.RequestIngests.RemoveEntity(e),vt(await t.RequestIngests.ToList())};static name="pending-request-ingests";static template=Ao},li=class{constructor(e){this.requestIngest=e,this.ConvertTo.subscribe(this.onConvertToChangeHandler)}ShowBody=ko.observable(!1);ConvertTo=ko.observable();onConvertToChangeHandler=e=>{if(!e)return null;this.ConvertTo(null),this.ShowBody(!1),console.log("converting to...",e),Wa(e,this.requestIngest)}};async function Wa(s,e){await s.initializeEntity();let t=new re({ServiceType:s}),i=e.Body.Value();t.RequestBodyBlob?.Value()?.fromEmail&&t.RequestBodyBlob?.Value()?.fromEmail(i),t.RequestDescription.Value(i);let o=Q(),a=e.getStagedAttachmentsFolderPath();if((await o.Attachments.GetItemsByFolderPath(a,Be.Views.All)).length){console.log("Copying attachments");let m=await t.Attachments.createFolder();await o.Attachments.CopyFolderContents(a,m),await t.Attachments.refresh()}window.WorkOrder.App.NewRequest({request:t})}function Qe(s){return s=s.startsWith("#")?s:"#"+s,new DataTable(s,{dom:"<'ui stackable grid'<'row'<'eight wide column'l><'right aligned eight wide column'f>><'row dt-table'<'sixteen wide column'tr>><'row'<'six wide column'i><'d-flex justify-content-center'B><'right aligned six wide column'p>>>",buttons:["copy","csv","excel","pdf","print"],order:[[0,"desc"]],iDisplayLength:25,deferRender:!0,bDestroy:!0,initComplete:function(){this.api().columns().every(function(){var e=this,t=$(e.header()).closest("table"),i=$(e.footer()),o=$('<search-select class=""><option value=""></option></search-select>');switch(i.attr("data-filter")){case"select-filter":o.attr("multiple","true");case"single-select-filter":o.appendTo(i.empty()).on("change",function(){var m=this.selectedOptions.map(x=>x.value);m?m=m.map(function(x){return x?"^"+$.fn.dataTable.util.escapeRegex(x)+"$":null}):m=[];var b=m.join("|");e.search(b,!0,!1).draw()});let d="";e.data().unique().sort().each(function(m,b){try{let x=$(m);x.is("a")&&(m=x.text())}catch{}d+=`<option value="${m}" title="${m}">${m}</option>`}),o.append(d);break;case"search-filter":$('<div class=""><input class="form-control" type="text" placeholder="Search..." style="width: 100%"/></div>').appendTo(i.empty()).on("keyup change clear",function(){let m=this.getElementsByTagName("input")[0].value;e.search()!==m&&e.search(m).draw()});break;case"bool-filter":var a=$('<input type="checkbox"></input>').appendTo(i.empty()).change(function(){this.checked?e.search("true").draw():e.search("").draw()});break;default:}i.attr("clear-width")&&t.find("thead tr:eq(0) th").eq(e.index()).width("")})}})}var di=class{constructor(){}IsLoading=ko.observable();HasLoaded=ko.observable(!1);AllOpenRequests=ie.get(F.open).List;MyAssignedRequests=ko.pureComputed(()=>this.AllOpenRequests().filter(e=>e.Assignments.CurrentStage.list.UserActionAssignments().length));MyActiveAssignments=ko.pureComputed(()=>this.MyAssignedRequests().flatMap(e=>e.Assignments.CurrentStage.list.UserActionAssignments()).filter(e=>e.Status==E.InProgress&&e.userIsDirectlyAssigned(I())));List=ko.observableArray();getByRequest=e=>this.List().filter(t=>t.Request.ID==e.ID);getOpenByRequest=ko.pureComputed(()=>{let e=[],t=ie.get(F.open)?.List()??[],i=this.List().filter(o=>o.Status==E.InProgress);return t.map(o=>{e.push(...xe.getByRequest(o).filter(a=>a.Status==E.InProgress&&a.userIsDirectlyAssigned(I())))}),e});getOpenByUser=e=>ko.pureComputed(()=>this.List().filter(t=>t.Status==E.InProgress&&t.userIsDirectlyAssigned(e)));remove=e=>{this.List.remove(t=>t.ID==e)};load=async()=>{this.IsLoading(!0);let e=new Date,t=await Q().Assignments.FindByColumnValue([{column:"Status",op:"eq",value:E.InProgress}],{orderByColumn:"Title",sortAsc:!1},{},de.Views.Dashboard,!1);this.List(t.results);let i=new Date;window.DEBUG&&console.log(`All Assignments loaded: ${t.results.length} cnt in ${i-e}`),this.HasLoaded(!0),this.IsLoading(!1)};init=async()=>{if(!this.HasLoaded()){if(this.IsLoading())return new Promise((e,t)=>{this.isLoadingSubscription=this.IsLoading.subscribe(i=>{this.isLoadingSubscription.dispose(),e()})});await this.load()}};dispose=()=>{this.isLoadingSubscription&&this.isLoadingSubscription.dispose()}},xe=new di;var Co=T`
  <div data-bind="">
    <div class="d-flex justify-content-between">
      <h2 class="mx-0" data-bind="text: filter.Title"></h2>
      <i class="fa fa-sync pointer" data-bind="click: refresh"></i>
    </div>

    <!-- <input type="checkbox" data-bind="checked: ShowAssignees" /> -->
    <!-- <div>
    <button
      type="button"
      class="btn btn-primary"
      data-bind="click: loadAssignments"
    >
      Show Assignees
    </button>
  </div> -->
    <table
      class="table table-striped table-hover w-100"
      data-bind="attr: {id: getTableElementId() } "
    >
      <thead>
        <tr>
          <th>Order ID</th>
          <th>Service Type</th>
          <th>Requesting Office</th>
          <th>Requestor</th>
          <th>Submitted Date</th>
          <th>Est. Completion Date</th>
          <th>Closed Date</th>
        </tr>
      </thead>
      <!-- ko if: IsLoading -->
      <tbody data-bind="">
        <tr class="">
          <td colspan="7" class="p-0">
            <progress class="w-100"></progress>
          </td>
        </tr>
      </tbody>
      <!-- /ko -->
      <!-- ko ifnot: IsLoading -->
      <tbody data-bind="childrenComplete: tableBodyComplete">
        <!-- ko foreach: FilteredRequests -->
        <tr class="pointer" data-bind="click: $root.ViewRequest">
          <td data-bind="text: Title"></td>
          <td data-bind="text: RequestType.Title"></td>
          <td data-bind="text: RequestorInfo.Office()?.Title"></td>
          <td data-bind="text: RequestorInfo.Requestor()?.Title"></td>
          <td data-bind="text: Dates.Submitted.toSortableDateString()"></td>
          <td data-bind="text: Dates.EstClosed.toSortableDateString()"></td>
          <td data-bind="text: Dates.Closed.toSortableDateString()"></td>
        </tr>
        <!-- /ko -->
      </tbody>
      <!-- /ko -->
      <tfoot>
        <tr>
          <th clear-width data-filter="select-filter"></th>
          <th data-filter="select-filter"></th>
          <th data-filter="select-filter"></th>
          <th data-filter="select-filter"></th>
          <th data-filter="select-filter"></th>
          <th data-filter="select-filter"></th>
          <th data-filter="select-filter"></th>
        </tr>
      </tfoot>
    </table>
  </div>

  <!-- <button class="btn btn-primary" data-bind="click: loadMore">
    Load More...
  </button> -->
`;var Ro=T`
  <div data-bind="">
    <div class="d-flex justify-content-between">
      <h2 class="mx-0" data-bind="text: filter.Title"></h2>
      <i class="fa fa-sync pointer" data-bind="click: refresh"></i>
    </div>
    <!-- <input type="checkbox" data-bind="checked: ShowAssignees" /> -->
    <!-- <div>
    <button
      type="button"
      class="btn btn-primary"
      data-bind="click: loadAssignments"
    >
      Show Assignees
    </button>
  </div> -->
    <table
      class="table table-striped table-hover w-100"
      data-bind="attr: {id: getTableElementId() } "
    >
      <thead>
        <tr>
          <th>Order ID</th>
          <th>Service Type</th>
          <th>Current Stage</th>
          <th>Requesting Office</th>
          <th>Requestor</th>
          <th>Submitted Date</th>
          <th>Est. Completion Date</th>
          <th>Assignments</th>
        </tr>
      </thead>
      <!-- ko if: IsLoading -->
      <tbody data-bind="">
        <tr class="">
          <td colspan="8" class="p-0">
            <progress class="w-100"></progress>
          </td>
        </tr>
      </tbody>
      <!-- /ko -->
      <!-- ko ifnot: IsLoading -->
      <tbody data-bind="childrenComplete: tableBodyComplete">
        <!-- ko foreach: FilteredRequests -->
        <tr class="pointer" data-bind="click: $root.ViewRequest">
          <td data-bind="text: Title"></td>
          <td data-bind="text: RequestType.Title"></td>
          <td data-bind="text: Pipeline.Stage()?.Title"></td>
          <td data-bind="text: RequestorInfo.Office()?.Title"></td>
          <td data-bind="text: RequestorInfo.Requestor()?.Title"></td>
          <td data-bind="text: Dates.Submitted.toSortableDateString()"></td>
          <td
            data-bind="text: Dates.EstClosed.toSortableDateString(), class: $parent.requestDateBackground($data) "
          ></td>
          <td>
            <table class="table table-sm m-0">
              <tbody data-bind="foreach: Assignments.list.All">
                <tr>
                  <td data-bind="text: Assignee?.Title"></td>
                  <td data-bind="text: Role"></td>
                  <td data-bind="text: Status"></td>
                </tr>
              </tbody>
            </table>
          </td>
        </tr>
        <!-- /ko -->
      </tbody>
      <!-- /ko -->
      <tfoot>
        <tr>
          <th clear-width data-filter="select-filter"></th>
          <th data-filter="select-filter"></th>
          <th data-filter="select-filter"></th>
          <th data-filter="select-filter"></th>
          <th data-filter="select-filter"></th>
          <th data-filter="select-filter"></th>
          <th data-filter="select-filter"></th>
          <th data-filter="search-filter"></th>
        </tr>
      </tfoot>
    </table>
  </div>

  <!-- <button class="btn btn-primary" data-bind="click: loadMore">
    Load More...
  </button> -->
`;var To=T`
  <div data-bind="">
    <div class="d-flex justify-content-between">
      <h2 class="mx-0" data-bind="text: filter.Title"></h2>
      <i class="fa fa-sync pointer" data-bind="click: refresh"></i>
    </div>
    <table
      class="table table-striped table-hover w-100"
      data-bind="attr: {id: getTableElementId() } "
    >
      <thead>
        <tr>
          <th>Order ID</th>
          <th>Service Type</th>
          <th>Current Stage</th>
          <th>Requesting Office</th>
          <th>Requestor</th>
          <th>Submitted Date</th>
          <th>Est. Completion Date</th>
        </tr>
      </thead>
      <!-- ko if: IsLoading -->
      <tbody>
        <tr class="">
          <td colspan="7" class="p-0">
            <progress class="w-100"></progress>
          </td>
        </tr>
      </tbody>
      <!-- /ko -->
      <!-- ko ifnot: IsLoading -->
      <tbody data-bind="childrenComplete: tableBodyComplete">
        <!-- ko foreach: FilteredRequests -->
        <tr class="pointer" data-bind="click: $root.ViewRequest">
          <td data-bind="text: Title"></td>
          <td data-bind="text: RequestType.Title"></td>
          <td data-bind="text: Pipeline.Stage()?.Title"></td>
          <td data-bind="text: RequestorInfo.Office()?.Title"></td>
          <td data-bind="text: RequestorInfo.Requestor()?.Title"></td>
          <td data-bind="text: Dates.Submitted.toSortableDateString()"></td>
          <td data-bind="text: Dates.EstClosed.toSortableDateString()"></td>
        </tr>
        <!-- /ko -->
      </tbody>
      <!-- /ko -->
      <tfoot>
        <tr>
          <th clear-width data-filter="select-filter"></th>
          <th data-filter="select-filter"></th>
          <th data-filter="select-filter"></th>
          <th data-filter="select-filter"></th>
          <th data-filter="select-filter"></th>
          <th data-filter="select-filter"></th>
          <th data-filter="select-filter"></th>
        </tr>
      </tfoot>
    </table>
  </div>

  <!-- <button class="btn btn-primary" data-bind="click: loadMore">
    Load More...
  </button> -->
`;var wt=class extends M{constructor({activeRequestSet:e,filteredRequests:t=null,key:i="office"}){super(),this.key=i,this.ActiveSet=e,this.filter=this.ActiveSet.filter,this.FilteredRequests=t??this.ActiveSet.List,this.IsLoading=this.ActiveSet.IsLoading,this.HasLoaded=this.ActiveSet.HasLoaded,this.init()}hasInitialized=!1;requestDateBackground=e=>{if(new Date>e.Dates.EstClosed.Value())return"table-danger"};getTableElementId=()=>"tbl-requests-status-"+this.key+this.filter?.toLowerCase();refresh=async()=>{await this.ActiveSet.load()};tableBodyComplete=e=>{this.Table&&this.Table.clear().destroy(),this.Table=Qe(this.getTableElementId())};init=async()=>{await this.ActiveSet.init(),this.hasInitialized=!0};dispose=()=>{}},ci=class extends wt{constructor(e){super(e)}static name="open-requests-table";static template=To},ui=class extends wt{constructor(e){super(e)}static name="open-office-requests-table";static template=Ro},pi=class extends wt{constructor(e){super(e)}static name="closed-requests-table";static template=Co};var xo=T`
  <select
    class="form-select"
    data-bind="value: SelectedService, 
options: ServiceTypes, 
optionsCaption: 'Select...', 
optionsText: 'Title'"
  ></select>
  <!-- ko if: SelectedService -->
  <div
    data-bind="component: {name: 'requests-by-service-type-table', params: {key, service: SelectedService()}}"
  ></div>
  <!-- /ko -->
`;var mi=class extends M{constructor(e){super(),this.key=e.key}ServiceTypes=ko.pureComputed(()=>ue().filter(e=>e.userCanInitiate(I())));SelectedService=ko.observable();static name="requests-by-service-type";static template=xo};var qo=T`
  <!-- ko if: HasInitialized -->
  <div class="my-3">
    <table
      class="table table-striped table-hover"
      data-bind="childrenComplete: tableHasRendered, attr: {'id': getTableElementId()}"
    >
      <thead>
        <tr>
          <th>Request ID</th>
          <th>Requesting Office</th>
          <th>Requestor</th>
          <th>Request Status</th>
          <!-- ko foreach: SupplementCols -->
          <th data-bind="text: displayName"></th>
          <!-- /ko -->
        </tr>
      </thead>
      <tbody data-bind="foreach: {data: AllRequests, as: 'rmap'}">
        <tr class="pointer" data-bind="click: $root.ViewRequest">
          <td data-bind="text: Title"></td>
          <td data-bind="text: RequestorInfo.Office()?.Title"></td>
          <td data-bind="text: RequestorInfo.Requestor()?.Title"></td>
          <td data-bind="text: State.Status"></td>
          <!-- ko foreach: $parent.SupplementCols -->
          <td
            data-bind="text: rmap.RequestBodyBlob?.Value().FieldMap[key]?.toString()"
          ></td>
          <!-- /ko -->
        </tr>
      </tbody>
    </table>
  </div>
  <!-- /ko -->
`;var hi=class extends M{constructor({service:e,key:t}){super(),window.DEBUG&&console.log("New Service Type Table",e.Title),this.ServiceType=e,this.key=t,this._context=Q(),this.init()}HasInitialized=ko.observable();AllRequests=ko.observableArray();Supplements=ko.observableArray();requestMap={};_context;requestCols=["Title","RequestingOffice","Requestor","RequestStatus","RequestDescription"];SupplementCols=ko.observableArray();getSupplementByRequestId=e=>{let t=this.Supplements().find(i=>i.Request?.ID==e.ID);return t||null};getTableElementId=()=>`tbl-requests-type-${this.key}-${this.ServiceType.UID}`;async init(){let e=this.requestMap,t=await this._context.Requests.FindByColumnValue([{column:"ServiceType",value:this.ServiceType.ID}],{orderByColumn:"Title",sortAsc:!1},{},re.Views.ByServiceType).then(o=>{this.AllRequests(o.results),o.results.map(a=>{e[a.Title]?e[a.Title].request=a:e[a.Title]={request:a}})});if(!this.ServiceType._constructor){await t,this.HasInitialized(!0);return}let i=await this.ServiceType.instantiateEntity();Object.keys(i.FieldMap).map(o=>this.SupplementCols.push({key:o,displayName:i.FieldMap[o]?.displayName??o})),this.HasInitialized(!0)}tableHasRendered=()=>{this.Table=Qe(this.getTableElementId())};static name="requests-by-service-type-table";static template=qo};var Fo=T`
  <table
    id="my-assignments-table"
    class="table table-striped table-hover w-100"
  >
    <thead>
      <tr>
        <th>Request</th>
        <th>Service Type</th>
        <th>Requesting Office</th>
        <th>Requestor</th>
        <th>Est Closed</th>
        <!-- <th>Role(s)</th> -->
      </tr>
    </thead>
    <!-- ko if: IsLoading -->
    <tbody data-bind="">
      <tr class="">
        <td colspan="6" class="p-0">
          <progress class="w-100"></progress>
        </td>
      </tr>
    </tbody>
    <!-- /ko -->
    <!-- ko ifnot: IsLoading -->
    <tbody
      data-bind="childrenComplete: myPostProcessingLogic, foreach: MyAssignedRequests"
    >
      <tr class="pointer" data-bind="click: () => $root.ViewRequest($data)">
        <td data-bind="text: Title"></td>
        <td data-bind="text: RequestType.Title"></td>
        <td data-bind="text: RequestorInfo.Office()?.Title"></td>
        <td data-bind="text: RequestorInfo.Requestor()?.Title"></td>
        <td data-bind="text: Dates.EstClosed.toSortableDateString()"></td>
        <!-- ko if: false -->
        <td>
          <!-- ko foreach: Assignments.list.CurrentUserAssignments -->
          <div
            class="position-relative my-1 py-1 alert"
            data-bind="class: $parents[1].assignmentStatusClass($data)"
          >
            <span data-bind="text: Role"> </span>
          </div>
          <!-- /ko -->
        </td>
        <!-- /ko -->
      </tr>
    </tbody>
    <!-- /ko -->
  </table>

  <!-- <div>
  <p>Legend:</p>
  <div class="badge rounded-pill text-bg-warning">In Progress</div>
  <div class="badge rounded-pill text-bg-success">Completed</div>
  <div class="badge rounded-pill text-bg-secondary">No Action</div>
</div> -->
`;var fi=class extends M{constructor(e){super()}HasLoaded=ko.observable(!1);IsLoading=ie.get(F.open).IsLoading;AllOpenRequests=ie.get(F.open).List;MyAssignedRequests=xe.MyAssignedRequests;assignmentStatusClass=e=>{switch(e.Status){case E.InProgress:return"alert-warning";default:return"alert-secondary"}};assignmentBadgeText=e=>{switch(e.Status){case E.InProgress:return"In Progress";case E.Completed:return"Completed";default:return null}};assignmentBadgeClass=e=>{switch(e.Status){case E.InProgress:return"bg-warning";case E.Completed:return"bg-success";default:break}};listBeforeChangeWatcher=()=>{window.DEBUG&&console.log("destroying table"),this.Table&&this.Table.clear().destroy()};listAfterChangeWatcher=()=>{window.DEBUG&&console.log("creating table"),setTimeout(()=>this.Table=Qe("my-assignments-table"),20)};myPostProcessingLogic=e=>{this.Table=Qe("my-assignments-table")};init=async()=>{this.HasLoaded(!0)};dispose=()=>{this.listAfterChangeSubscription.dispose(),this.listAfterChangeSubscription.dispose()};static name="my-assignments-table";static template=Fo};var Io=T`
  <div class="container-fluid">
    <div class="row">
      <div class="col-6 pb-2">
        <h6>Request Status:</h6>
        <p class="state-draft">Draft</p>
      </div>
    </div>
    <div class="row">
      <div class="col-6 pb-2">
        <label
          ><h6>Request ID:</h6>
          <p data-bind="text: ObservableTitle"></p
        ></label>
      </div>
      <div class="col-6 pb-2">
        <div class="form-group">
          <label><h6>Requesting Org:</h6></label>
          <select
            class="form-control"
            data-bind="value: RequestorInfo.Office,
        options: AvailableRequestorOffices,
        optionsText: (ro) => ro.Title"
          ></select>
          <!-- <p>
            GTM:
            <span
              data-bind="text: RequestorInfo.Office()?.GTM?.LookupValue"
            ></span>
          </p> -->
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-6 pb-2">
        <h6>Requestor:</h6>
        <div
          id="people-requestor"
          data-bind="people: RequestorInfo.Requestor"
        ></div>
      </div>
      <div class="col-6 pb-2">
        <h6>Requestor Office:</h6>
        <input
          class="form-control"
          data-bind="value: RequestorInfo.OfficeSymbol.Value"
        />
      </div>
    </div>
    <div class="row">
      <div class="col-6 pb-2">
        <h6>Requestor Phone:</h6>
        <input
          type="tel"
          class="form-control"
          data-bind="value: RequestorInfo.Phone"
        />
      </div>
      <div class="col-6 pb-2">
        <h6>Requestor Email:</h6>
        <input
          type="email"
          class="form-control"
          class="fluid"
          data-bind="value: RequestorInfo.Email"
        />
      </div>
      <div class="col-12 pb-2">
        <h6>Service Type:</h6>
        <p data-bind="text: RequestType.Title"></p>
      </div>
    </div>
  </div>
`;var Do=T`
  <div class="container-fluid">
    <div class="row">
      <div class="col-6">
        <h6>Request Status:</h6>
        <p
          data-bind="text: State.Status, class: 'state-' + State.Status()?.toLowerCase()"
        ></p>
      </div>
      <!-- ko if: Dates.Closed.get -->
      <div class="col-6">
        <h6>Closed:</h6>
        <p data-bind="text: Dates.Closed.toLocaleDateString()"></p>
      </div>
      <!-- /ko -->
    </div>
    <div class="row">
      <div class="col-6">
        <h6>Request ID:</h6>
        <p data-bind="text: ObservableTitle"></p>
      </div>
      <div class="col-6">
        <h6>Requesting Org:</h6>
        <p data-bind="text: RequestorInfo.Office()?.Title"></p>
      </div>
    </div>
    <div class="row">
      <div class="col-6">
        <h6>Requestor:</h6>
        <p data-bind="text: RequestorInfo.Requestor()?.Title"></p>
      </div>
      <div class="col-6">
        <h6>Requestor Office:</h6>
        <p data-bind="text: RequestorInfo.OfficeSymbol.Value"></p>
      </div>
    </div>
    <div class="row">
      <div class="col-6">
        <h6>Requestor Phone:</h6>
        <p data-bind="text: RequestorInfo.Phone"></p>
      </div>
      <div class="col-6">
        <h6>Requestor Email:</h6>
        <p data-bind="text: RequestorInfo.Email"></p>
      </div>
      <div class="col-6">
        <h6>Submitted Date:</h6>
        <p data-bind="text: Dates.Submitted.toLocaleString()"></p>
      </div>
      <div class="col-6">
        <h6>Service Type:</h6>
        <p data-bind="text: RequestType.Title"></p>
      </div>
    </div>
  </div>
`;var $t=class extends M{constructor(e){super(),Object.assign(this,e)}AvailableRequestorOffices=ko.pureComputed(()=>I()?.RequestingOffices());AvailableServiceTypes=ko.pureComputed(()=>ue().filter(e=>e.userCanInitiate(I())))},gi=class extends $t{constructor(e){super(e)}static name="request-header-view";static template=Do},bi=class extends $t{constructor(e){super(e)}static name="request-header-edit";static template=Io};var Po=T`
  <div class="card pipeline-module">
    <div class="card-body p-0">
      <div class="card-title d-flex m-0" data-bind="">
        <div class="d-flex flex-column justify-content-center mx-3 p-1">
          <i class="fa fa-3x" data-bind="class: Pipeline.Icon"></i>
        </div>
        <div class="flex-grow-1 bg-light-gray">
          <ol class="p-0 m-0 mt-4 d-flex">
            <!-- ko foreach: Pipeline.Stages -->
            <li
              class="d-flex stage-item flex-column justify-content-center px-3 py-1"
              data-bind="class: $parent.listItemTypeClass($data),
            click: $parent.setSelected"
            >
              <div class="d-flex align-items-center" data-bind="">
                <h4 style="color: inherit" data-bind="text: Step"></h4>
                <div class="mx-2"></div>
                <div>
                  <div class="fw-bold" data-bind="text: Title"></div>
                  <p data-bind="text: $parent.listItemSubText($data)"></p>
                </div>
              </div>
            </li>
            <!-- /ko -->
          </ol>
        </div>
      </div>
      <!-- ko if: ShowActionsArea -->
      <div class="">
        <div class="p-3">
          <div data-bind="using: SelectedStageDetail">
            <!-- ko if: IsCurrentStage() && CurrentUserActionableAssignments().length -->
            <div>
              <p class="text-secondary">
                Please complete the following assignment actions to advance this
                request.
              </p>
              <!-- ko foreach: CurrentUserActionableAssignments -->
              <div data-bind="foreach: Errors">
                <div
                  class="alert alert-warning"
                  role="alert"
                  data-bind="text: description"
                ></div>
              </div>
              <!-- ko using: getComponent({request: $parent.request}) -->
              <div
                data-bind="component: { name: actionComponentName, params: $data }"
              ></div>
              <!-- /ko -->
              <!-- /ko -->
            </div>
            <!-- /ko -->
            <div class="mt-4 accordion-item">
              <div class="accordion-header pointer">
                <h5
                  class="accordion-title collapsed"
                  data-bs-toggle="collapse"
                  data-bs-target="#stage-assignment-body"
                  aria-expanded="false"
                >
                  Stage Assignments <i class="indicator fa fa-caret-down"></i>
                </h5>
              </div>
              <div
                id="stage-assignment-body"
                class="accordion-collapse collapse"
                style=""
              >
                <p class="text-secondary">
                  View and manage all assignments for this stage.
                </p>
                <table class="table">
                  <thead>
                    <tr>
                      <th>Assigned To</th>
                      <th>Request Org</th>
                      <th>Role</th>
                      <th>Status</th>
                      <th>Completed By</th>
                      <th>Completed On</th>
                      <!-- ko if: IsCurrentStage -->
                      <th>Action</th>
                      <!-- /ko -->
                    </tr>
                  </thead>
                  <tbody>
                    <!-- ko foreach: AllStageAssignments -->
                    <!-- <tr
                  data-bind="
                  css: {'pointer': isUserActionable()},
                  click: toggleExpanded
                  "
                > -->
                    <tr>
                      <td data-bind="text: Assignee?.Title"></td>
                      <td data-bind="text: RequestOrg?.Title"></td>
                      <td data-bind="text: Role"></td>
                      <td data-bind="text: Status"></td>
                      <td data-bind="text: ActionTaker?.Title ?? 'N/A'"></td>
                      <td
                        data-bind="text: CompletionDate?.toLocaleString() ?? 'N/A'"
                      ></td>
                      <!-- ko if: $parent.IsCurrentStage -->
                      <td>
                        <!-- ko if: $parent.userCanAssign -->
                        <i
                          class="fas fa-search pointer"
                          data-bind="click: $parent.view"
                        ></i>
                        <i
                          class="fa fa-trash pointer"
                          data-bind="click: $parent.remove"
                        ></i>
                        <!-- /ko -->
                      </td>
                      <!-- /ko -->
                    </tr>
                    <!-- ko if: false && $parent.IsCurrentStage() && isUserActionable() && isExpanded() -->
                    <tr>
                      <td colspan="7" data-bind=""></td>
                    </tr>
                    <!-- /ko -->
                    <!-- /ko -->
                  </tbody>
                </table>
                <!-- ko if: userCanAssign() -->
                <div
                  data-bind="component: { name: 'new-assignment', params: {addAssignment: addNew } }"
                ></div>
                <!-- /ko -->
              </div>
            </div>
          </div>
          <!-- ko if: false -->
          <div>
            <!-- ko using: request.Assignments.CurrentStage -->
            <!-- ko if: AssignmentComponents().length -->
            <div data-bind="foreach: Validation.Errors">
              <div
                class="alert alert-warning"
                role="alert"
                data-bind="text: description"
              ></div>
            </div>
            <div class="">
              <!-- ko foreach: AssignmentComponents -->
              <div
                data-bind="component: {name: actionComponentName, params: $data }"
              ></div>
              <!-- /ko -->
            </div>
            <!-- /ko -->
            <!-- /ko -->
          </div>
          <!-- /ko -->
        </div>
      </div>
      <!-- /ko -->
    </div>
  </div>
`;var yi=class extends M{constructor({request:e}){super(),this.request=e,this.Pipeline=e.Pipeline,this.allPipelineDetails=this.request.Pipeline.Stages().filter(t=>t.ActionType!=Te.Closed).map(t=>new vi({request:e,stage:t})),this.Pipeline.Stage.subscribe(this.SelectedStage),this.SelectedStage(this.Pipeline.Stage())}ShowActionsArea=ko.pureComputed(()=>this.SelectedStageDetail());listItemShowBorderlessBottom=e=>this.Pipeline.Stage()?.Step==e.Step&&this.ShowActionsArea();listItemTypeClass=e=>{if(this.SelectedStage()?.ID==e.ID&&e.ActionType!=Te.Closed)return"bg-primary text-white pointer active";if(e.Step<this.Pipeline.Stage()?.Step)return"bg-secondary text-white pointer";if(this.Pipeline.Stage()?.ID==e.ID)switch(this.request.State.Status()){case F.open:return"bg-primary-subtle pointer";case F.cancelled:case F.rejected:return"bg-danger text-white pointer";case F.fulfilled:return"bg-success text-white pointer";default:break}};listItemSubText=e=>{let t=ko.unwrap(e?.ActionType);if(!t)return"";if(Te.Closed==t)return t;let o=(e.Step??0)+1,a=this.Pipeline.Stages()?.find(m=>m.Step==o),d=this.request.Actions.list.All().find(m=>a.ActionType==Te.Closed?m.ActionType==B.Closed:m.PipelineStage?.Step==a.Step&&m.ActionType==B.Advanced);return d?"Completed: "+d.Created?.toLocaleDateString():t};setSelected=e=>{!this.Pipeline.Stage()||e.Step>this.Pipeline.Stage()?.Step||this.SelectedStage(e)};SelectedStage=ko.observable();SelectedStageDetail=ko.pureComputed(()=>this.allPipelineDetails.find(e=>e.stage.ID==this.SelectedStage()?.ID));StageDetail;static name="pipeline-component";static template=Po},vi=class{constructor({request:e,stage:t}){this.request=e,this.stage=t}IsCurrentStage=ko.pureComputed(()=>this.request.Pipeline.Stage()?.ID==this.stage.ID);AllStageAssignments=ko.pureComputed(()=>this.request.Assignments.list.All().filter(e=>e.PipelineStage.ID==this.stage.ID));CurrentUserActionableAssignments=ko.pureComputed(()=>this.AllStageAssignments().filter(e=>e.isUserActionable()));view=e=>this.request.Assignments.view(e);remove=e=>this.request.Assignments.remove(e);addNew=e=>this.request.Assignments.addNew(e);userCanAssign=ko.pureComputed(()=>{let e=I();return this.IsCurrentStage()&&e.isInRequestOrg(this.stage.RequestOrg)})};var No=T`
  <div id="quick-info" class="d-flex justify-content-between mb-3">
    <div class="action-group d-flex flex-column justify-content-end">
      <!-- ko if: ShowActionOfficeToggle -->
      <div class="form-check form-switch">
        <label class="form-check-label"
          >Enable System Action Office Features
          <input
            class="form-check-input"
            type="checkbox"
            role="switch"
            data-bind="checked: ToggleActionOfficeFeatures"
        /></label>
      </div>
      <!-- /ko -->
      <button
        class="btn btn-primary mb-3"
        data-bind="click: $root.SelectNewRequest"
        type="button"
      >
        New Request <i class="fa-solid fa-plus"></i>
      </button>
    </div>
    <div class="ms-auto status-cards" style="min-width: 20rem">
      <div class="status-info open-assignments">
        <div
          class="card info-header"
          title="Toggle Open Assignments"
          data-bind="click: toggleInfoContainer"
        >
          <div class="card-body">
            <img
              src="/sites/CGFS/Style Library/apps/wo/assets/Direct Assignments.svg"
            />
            <h5 data-bind="text: MyOpenAssignments().length"></h5>
            Open Assignments
          </div>
        </div>
        <div
          class="info-table-container alert"
          data-bind="class: MyOpenAssignments().length > 0 ? 'alert-warning' : 'alert-success'"
        >
          <div class="card-body">
            <!-- ko ifnot: MyOpenAssignments().length -->
            <p>Nothing to Show!</p>
            <!-- /ko -->
            <!-- ko if: MyOpenAssignments().length -->
            <table class="table table-warning table-sm table-hover m-0">
              <thead>
                <tr>
                  <th>Request</th>
                  <th>Assignee</th>
                  <th>Role</th>
                </tr>
              </thead>
              <tbody data-bind="foreach: MyOpenAssignments">
                <tr
                  title="Go to Request"
                  class="pointer"
                  data-bind="click: () => $root.viewRequestByTitle($data.Request.Title)"
                >
                  <td data-bind="text: Request.Title"></td>
                  <td data-bind="text: Assignee?.Title"></td>
                  <td data-bind="text: Role"></td>
                </tr>
              </tbody>
            </table>
            <!-- /ko -->
          </div>
        </div>
      </div>
      <!-- ko if: ShowActionOfficeFeatures -->
      <div class="status-info late-requests">
        <div
          class="card info-header"
          title="Toggle Team Late Requests"
          data-bind="click: toggleInfoContainer"
        >
          <div class="card-body">
            <img
              src="/sites/CGFS/Style Library/apps/wo/assets/Late Requests.svg"
            />
            <h5 data-bind="text: LateRequests().length"></h5>
            Late Requests
          </div>
        </div>
        <div
          class="info-table-container alert"
          data-bind="class: LateRequests().length > 0 ? 'alert-danger' : 'alert-success'"
        >
          <div class="card-body">
            <!-- ko ifnot: LateRequests().length -->
            <p>Nothing to Show!</p>
            <!-- /ko -->
            <!-- ko if: LateRequests().length -->
            <table class="table table-danger table-sm table-hover m-0">
              <thead>
                <tr>
                  <th>Request</th>
                  <th>Service Type</th>
                  <th>Est. Closed Date</th>
                </tr>
              </thead>
              <tbody data-bind="foreach: LateRequests">
                <tr
                  class="pointer"
                  title="Go to Request"
                  data-bind="click: $root.ViewRequest"
                >
                  <td data-bind="text: Title"></td>
                  <td data-bind="text: RequestType.Title"></td>
                  <td
                    data-bind="text: Dates.EstClosed.toLocaleDateString()"
                  ></td>
                </tr>
              </tbody>
            </table>
            <!-- /ko -->
          </div>
        </div>
      </div>
      <div
        class="w-full"
        data-bind='component: "pending-request-ingests"'
      ></div>
      <!-- /ko -->
    </div>
  </div>

  <style>
    #quick-info {
      gap: 1rem;
    }

    #quick-info .action-group {
      min-width: 224px;
      width: 224px;
      padding: 1rem;
    }

    #quick-info .status-cards {
      display: flex;
      gap: 1rem;
      flex-wrap: wrap;
      justify-content: end;
    }

    #quick-info img {
      width: 2.5rem;
      height: 2.5rem;
      background-color: white;
      border-radius: 6px;
      margin-bottom: 8px;
      padding: 0.25rem;
    }

    .status-info {
      display: flex;
      flex-direction: row;
      justify-content: end;
    }

    .status-info .info-header {
      height: 138px;
      width: 230px;
      color: white;
      cursor: pointer;
      z-index: 5;
    }

    .status-info .info-header:hover {
      filter: brightness(0.9);
    }

    .status-info.open-assignments .info-header {
      background: linear-gradient(145deg, #4d547e, #303346);
    }

    .status-info.late-requests .info-header {
      background: linear-gradient(145deg, #fc6f7f, #ec1719);
    }

    .status-info .info-table-container {
      /* display: none; */
      border-radius: 6px;
      position: relative;
      left: -34px;
      z-index: 4;
      overflow: hidden;
      max-height: 0px;
      transition: max-height 0.35s ease-out;
      max-width: 0px;
      transition: max-width 0.35s ease-out;
    }

    .status-info.active .info-table-container {
      padding: 1rem 1rem 1rem 50px;
      max-height: 450px;
      transition: max-height 0.35s ease-in;
      max-width: 500px;
      transition: max-width 0.35s ease-in;
    }

    .status-info .info-table-container .card-body {
      max-height: 198px;
      overflow-y: auto;
      overflow-x: hidden;
    }

    .status-info .info-table-container table thead {
      position: sticky;
      top: 0;
      text-wrap: nowrap;
    }
    /* #quick-info .status-info {
    display: block;
  } */
  </style>
`;var wi=class extends M{constructor({ShowActionOfficeFeatures:e,ToggleActionOfficeFeatures:t}){super(),this.ShowActionOfficeFeatures=e,this.ToggleActionOfficeFeatures=t}ShowActionOfficeToggle=ko.pureComputed(()=>I()?.IsActionOffice()&&!1);MyOpenAssignments=xe.MyActiveAssignments;LateRequests=ko.pureComputed(()=>ie.get(F.open)?.List()?.filter(e=>e.Dates.EstClosed.Value()<=new Date)??[]);toggleInfoContainer=(e,t)=>{t.target.closest(".status-info").classList.toggle("active")};static name="quick-info";static template=No};var Eo=T`
  <div class="input-group">
    <span class="input-group-text">Add New Assignment</span>
    <div
      class="people-new-assignee"
      data-bind="attr: {id: getAsigneeElementID()}, people: Assignee"
    ></div>
    <select
      name=""
      id=""
      class="form-select"
      data-bind="value: Role,
      options: Roles,
      optionsText: (role) => role.LookupValue,
      optionsCaption: 'Select...'"
    ></select>
    <button
      type="button"
      class="btn btn-primary"
      data-bind="click: submit,
    enable: Role() && Assignee()"
    >
      Submit
    </button>
  </div>
  <!-- ko if: Role -->
  <div class="mt-2 p-1 ps-2 alert alert-info">
    <strong><span data-bind="text: Role().LookupValue"></span>:</strong>
    <span data-bind="text: Role().description"></span>
  </div>
  <!-- /ko -->
`;var Si=class extends M{constructor({addAssignment:e,stage:t=null}){super(),this.stage=t,this.addAssignment=e,this.uniqueInt=Math.floor(Math.random()*100),this.stage&&this.Role(Rt[this.stage.ActionType])}getAsigneeElementID=()=>`people-new-assignee-${this.uniqueInt}`;Assignee=ko.observable();Role=ko.observable();Roles=Object.values(Se);submit=async()=>{let e={Role:this.Role(),Assignee:this.Assignee(),PipelineStage:this.stage,RequestOrg:this.stage?.RequestOrg};try{await this.addAssignment(e)}catch(t){console.error("Unable to save assignment",t),alert("Something went wrong saving the assignment");return}this.Assignee(null),this.Role(null)};static name="new-assignment";static template=Eo};var Oo=T`
  <div
    class="toast show align-items-center"
    role="alert"
    aria-live="assertive"
    aria-atomic="true"
  >
    <div class="d-flex">
      <div class="toast-body" data-bind="text: FormatMessage"></div>
      <button
        type="button"
        class="btn-close me-1 m-auto"
        data-bs-dismiss="toast"
        aria-label="Close"
      ></button>
    </div>
  </div>
`;var Ai=class extends M{constructor(e){Object.assign(this,e)}FormatMessage=ko.pureComputed(()=>`${this.msg}... ${this.Status()}`);static name="task-toast";static template=Oo};var cb=String.raw;function Lo(){for(let s in jt){let e=jt[s];e.prototype instanceof M&&z(e)}}function z(s){ko.components.register(s.name,{template:s.template,viewModel:s})}var Ht=class{templateId="tmpl-request-detail";ServiceTypeStore=ue;SelectedServiceType=ko.observable();ActiveServiceTypes=ko.pureComputed(()=>ue().filter(e=>e.userCanInitiate(I())));formatAttachmentDescription=()=>{let e=this.SelectedServiceType()?.AttachmentDescription;return e&&e.trim()?e:"<i>Not applicable.</i>"};getDescriptionModal=()=>document.getElementById("dialog-new-request-detail");selectServiceTypeHandler=(e,t)=>{this.SelectedServiceType(e),setTimeout(()=>{t.target.scrollIntoView({behavior:"smooth",block:"center"})},460)};cancelCreateServiceType=()=>{this.SelectedServiceType(null)};confirmCreateServiceType=async()=>{let e=this.SelectedServiceType();this.SelectedServiceType(null),await e.initializeEntity();let t=new re({ServiceType:e});window.WorkOrder.App.NewRequest({request:t})};constructor(){console.log("new")}};var Vo="By Service Type",Ze={};Ze[F.open]="open-office-requests-table";Ze[F.fulfilled]="closed-requests-table";Ze[F.cancelled]="closed-requests-table";Ze[F.rejected]="closed-requests-table";Ze[Vo]="requests-by-service-type";var Qt=class{constructor(){this.RequestsByStatusMap=ie,this.ShowAssignments.subscribe(this.showAssignmentsWatcher),this.ActiveKey(F.open)}async init(){await this.RequestsByStatusMap.get(F.open).init(),await xe.init(),this.HasLoaded(!0)}byServiceTypeKey=Vo;HasLoaded=ko.observable(!1);ShowAssignments=ko.observable(!1);ActiveKey=ko.observable();ActiveTableComponentName=ko.pureComputed(()=>Ze[this.ActiveKey()]);ActiveTableParams=ko.pureComputed(()=>{if(this.RequestsByStatusMap.has(this.ActiveKey())){let e=this.RequestsByStatusMap.get(this.ActiveKey()),t=ko.pureComputed(()=>e.List().filter(i=>i.RequestOrgs().find(I().isInRequestOrg)));return{activeRequestSet:e,filteredRequests:t,key:"office"}}return{key:"office"}});showAssignmentsWatcher=e=>{console.log("assignments toggled")};StatusOptions=ko.pureComputed(()=>[...this.RequestsByStatusMap.keys()])};var za="By Service Type",et={};et[F.open]="open-requests-table";et[F.fulfilled]="closed-requests-table";et[F.cancelled]="closed-requests-table";et[F.rejected]="closed-requests-table";et[za]="requests-by-service-type";var Wt=class{constructor(){this.RequestsByStatusMap=ie,this.ActiveKey(F.open)}async init(){await this.RequestsByStatusMap.get(F.open).init(),this.HasLoaded(!0)}HasLoaded=ko.observable(!1);ActiveKey=ko.observable();ActiveTableComponentName=ko.pureComputed(()=>et[this.ActiveKey()]);ActiveTableParams=ko.pureComputed(()=>{if(this.RequestsByStatusMap.has(this.ActiveKey())){let e=this.RequestsByStatusMap.get(this.ActiveKey());return{activeRequestSet:e,filteredRequests:e.List,key:"my"}}return{key:"my"}});StatusOptions=ko.pureComputed(()=>[...this.RequestsByStatusMap.keys()])};ko.subscribable.fn.subscribeChanged=function(s){var e;this.subscribe(function(t){e=t},this,"beforeChange"),this.subscribe(function(t){s(t,e)})};ko.observableArray.fn.subscribeAdded=function(s){this.subscribe(function(e){let t=e.filter(i=>i.status=="added").map(i=>i.value);s(t)},this,"arrayChange")};ko.bindingHandlers.dateField={init:function(s,e,t){},update:function(s,e,t,i,o){}};ko.bindingHandlers.files={init:function(s,e){function t(o){var a=e();if(!o.length){a.removeAll();return}let d=ko.unwrap(a),m=[];for(let b of o)d.find(x=>x.name==b.name)||m.push(b);ko.utils.arrayPushAll(a,m)}ko.utils.registerEventHandler(s,"change",function(){t(s.files)});let i=s.closest("label");i&&(ko.utils.registerEventHandler(i,"dragover",function(o){o.preventDefault(),o.stopPropagation()}),ko.utils.registerEventHandler(i,"dragenter",function(o){o.preventDefault(),o.stopPropagation(),i.classList.add("dragging")}),ko.utils.registerEventHandler(i,"dragleave",function(o){o.preventDefault(),o.stopPropagation(),i.classList.remove("dragging")}),ko.utils.registerEventHandler(i,"drop",function(o){o.preventDefault(),o.stopPropagation();let d=o.originalEvent.dataTransfer.files;t(d)}))},update:function(s,e,t,i,o){if(!e()().length&&s.files.length){s.value=null;return}}};ko.bindingHandlers.toggles={init:function(s,e){var t=e();ko.utils.registerEventHandler(s,"click",function(){t(!t())})}};ko.bindingHandlers.people={init:function(s,e,t){let i=t.get("pickerOptions")??{};ko.isObservable(i)&&i.subscribe(o),o(ko.unwrap(i));function o(a){var d={};d.PrincipalAccountType="User",d.SearchPrincipalSource=15,d.ShowUserPresence=!0,d.ResolvePrincipalSource=15,d.AllowEmailAddresses=!0,d.AllowMultipleValues=!1,d.MaximumEntitySuggestions=50,Object.assign(d,a),d.OnUserResolvedClientScript=async function(m,b){let x=d.AllowMultipleValues;var O=SPClientPeoplePicker.SPClientPeoplePickerDict[m],_=e(),J=O.GetControlValueAsJSObject();if(!J.length){x?_.removeAll():_(null);return}if(!x){let U=J[0];if(U.IsResolved){if(U.Key==_()?.LoginName)return;var ye=await st(U.Key),Z=new K(ye);_(Z)}return}let oe=_().map(U=>U.LoginName),he=await Promise.all(J.filter(U=>U.IsResolved).map(async U=>{let ae=_().find(zt=>zt.LoginName==U.Key);if(ae)return ae;var tt=await st(U.Key);return new K(tt)}));_(he)},SPClientPeoplePicker_InitStandaloneControlWrapper(s.id,null,d);for(let m of document.getElementById(s.id).querySelectorAll("input"))m.setAttribute("autocomplete","off"),m.setAttribute("aria-autocomplete","none")}},update:function(s,e,t,i,o){let a=ko.unwrap(t.get("pickerOptions")??{});var d=SPClientPeoplePicker.SPClientPeoplePickerDict[s.id+"_TopSpan"],m=ko.unwrap(e());if(!a.AllowMultipleValues){if(!m){d?.DeleteProcessedUser();return}m&&!d.GetAllUserInfo().find(b=>b.DisplayText==m.LookupValue)&&d.AddUserKeys(m.LoginName??m.LookupValue??m.Title);return}if(!m.length){d?.DeleteProcessedUser();return}m.map(b=>{d.GetAllUserInfo().find(x=>x.DisplayText==b.LookupValue)||d.AddUserKeys(b.LoginName??b.LookupValue??b.Title)}),d.GetAllUserInfo().map(b=>{m.find(x=>x.LookupValue==b.DisplayText)})}};var Ja={loadTemplate:function(s,e,t){e.fromPath?fetch(it+e.fromPath).then(i=>{if(!i.ok)throw new Error(`Error Fetching HTML Template - ${i.statusText}`);return i.text()}).catch(i=>{e.fallback&&(console.warn("Primary template not found, attempting fallback",e),fetch(it+e.fallback).then(o=>{if(!o.ok)throw new Error(`Error Fetching fallback HTML Template - ${o.statusText}`);return o.text()}).then(o=>ko.components.defaultLoader.loadTemplate(s,o,t)))}).then(i=>i?ko.components.defaultLoader.loadTemplate(s,i,t):null):t(null)}};ko.components.loaders.unshift(Ja);var Ka={loadViewModel:function(s,e,t){if(e.viaLoader){let i=import(it+e.viaLoader).then(o=>{let a=o.default;ko.components.defaultLoader.loadViewModel(s,a,t)})}else t(null)}};ko.components.loaders.unshift(Ka);var St=class{constructor(){this.init(),this.IsLoading=xe.IsLoading}HasLoaded=ko.observable(!1);init=async()=>{await xe.init(),this.HasLoaded(!0)}};window.WorkOrder=window.WorkOrder||{};async function Mo(){ko.options.deferUpdates=!0,await Di(),Lo(),uo(),window.WorkOrder.App=await Ci.Create(),ko.applyBindings(window.WorkOrder.App)}var Ci=class s{constructor(){this.Tab.subscribe(Xa),window.addEventListener("popstate",this.popStateHandler)}RunningTasks=yt;BlockingTasks=So;ToggleActionOfficeFeatures=ko.observable(!0);ShowActionOfficeFeatures=ko.pureComputed(()=>this.CurrentUser()?.IsActionOffice()&&this.ToggleActionOfficeFeatures());HasLoaded=ko.observable(!1);CurrentUser=I;context=Q();Tab=ko.observable();TabClicked=(e,t)=>this.Tab(t.target.getAttribute("id"));popStateHandler=e=>{e.state&&e.state.tab&&this.Tab(e.state.tab)};MyActiveAssignments=xe.MyActiveAssignments;Config={pipelineStageStore:Je,requestOrgStore:ge,serviceTypeStore:ue,holidayStore:kt};OfficeRequestsView=new Qt;MyRequestsView=new Wt;MyAssignmentsView=new St;NewRequestView=new Ht;RequestDetailView=new Gt;Authorization={currentUserIsAdmin:ko.pureComputed(()=>I()?.hasSystemRole(We.Admin))};Init=async function(){{var e=this.context.ConfigPipelines.ToList().then(this.Config.pipelineStageStore),t=this.context.ConfigRequestOrgs.ToList().then(b=>this.Config.requestOrgStore(b.sort(pt))),i=this.context.ConfigServiceTypes.ToList().then(async b=>{await Promise.all(b.map(async x=>x.initializeEntity())),this.Config.serviceTypeStore(b.sort(pt))});let d=this.context.ConfigHolidays.ToList().then(this.Config.holidayStore),m=await Promise.all([t,e,i,d])}this.CurrentUser(await Ct.Create());var o=Ut("tab")||De.MyRequests,a=Ut("reqId");a&&o==De.RequestDetail?this.viewRequestByTitle(a):o==De.RequestDetail&&(o=De.NewRequest),this.Tab(o),vt(await this.context.RequestIngests.ToList()),this.HasLoaded(!0)};SelectNewRequest=(e,t)=>{this.Tab(De.NewRequest)};NewRequest=({request:e=null,serviceType:t=null})=>{let i={request:e??new re({}),displayMode:be.New};Ye("reqId",""),this.RequestDetailView.createNewRequest(i),this.Tab(De.RequestDetail)};viewRequestByTitle=async e=>{let t=await this.context.Requests.FindByColumnValue([{column:"Title",value:e}],{},{},re.Views.All,!1);if(!t.results.length){console.warn("Request not found: ",e);return}this.ViewRequest(t.results[0])};ViewRequest=async e=>{Ye("reqId",e.Title),this.RequestDetailView.viewRequest({request:e}),this.Tab(De.RequestDetail)};static Create=async function(){let e=new s;return await e.Init(),e}},Xa=s=>{if(s){var e=document.getElementById(s),t=new bootstrap.Tab(e);Ye("tab",s),t.show()}};document.readyState==="ready"||document.readyState==="complete"?Mo():document.onreadystatechange=()=>{(document.readyState==="complete"||document.readyState==="ready")&&ExecuteOrDelayUntilScriptLoaded(function(){SP.SOD.executeFunc("sp.js","SP.ClientContext",Mo)},"sp.js")};document.getElementById("app").innerHTML=ki;})();
