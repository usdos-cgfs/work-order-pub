(()=>{var Sa=Object.defineProperty;var ks=(i,e)=>{for(var t in e)Sa(i,t,{get:e[t],enumerable:!0})};var Aa=String.raw,qs=Aa`
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
`;customElements.define("search-select",class extends HTMLElement{constructor(){super();let i=qs;this.selectableItems=[],this.attachShadow({mode:"open"}),this.shadowRoot.innerHTML=i,this.searchGroupElement=this.shadowRoot.getElementById("search-group"),this.searchInputGroupElement=this.shadowRoot.querySelector(".search-input-group"),this.searchInputElement=this.shadowRoot.getElementById("search-input"),this.filteredItemsElement=this.shadowRoot.getElementById("filtered-items-text"),this.selectedItemsElement=this.shadowRoot.getElementById("selected-items-text"),this.options=this.querySelectorAll("option")}initializeFilteredItems=()=>{this.options=this.querySelectorAll("option"),this.filteredItemDivs=[...this.options].map((i,e)=>{let t=document.createElement("li");return t.classList.add("filtered","item"),t.classList.toggle("even",e%2),t.innerHTML=i.innerHTML,t.dataset.value=i.value,t}),this.filteredItemsElement.replaceChildren(...this.filteredItemDivs),this.updateFilteredItems(),this.updateSelectedItems(!0)};updateFilteredItems=()=>{let i=this.searchInputElement.value;this.filteredItemDivs.forEach(t=>{let s=t.innerText.toLowerCase().search(i.toLowerCase())>=0,o=!i||s;t.classList.toggle("hidden",!o)}),[...this.options].filter(t=>t.hasAttribute("selected")).map(t=>{this.filteredItemDivs.find(s=>s.dataset.value===t.value).classList.add("hidden")});var e=[...this.filteredItemsElement.querySelectorAll("li:not(.hidden)")].map((t,s)=>t.classList.toggle("even",s%2))};updateActiveFilteredItem=i=>{if(!this.filteredItemDivs.find(a=>!a.classList.contains("hidden")))return;let t=this.filteredItemDivs.findIndex(a=>a.classList.contains("active")),s=t+i,o;do s>=this.filteredItemDivs.length&&(s=0),o=this.filteredItemDivs.at(s),s+=i;while(o.classList.contains("hidden"));o.classList.add("active"),t>=0&&this.filteredItemDivs[t].classList.remove("active")};selectActiveFilteredItem=()=>{let i=this.filteredItemDivs.find(e=>e.classList.contains("active"));i&&(this.selectFilteredItem(i),this.updateActiveFilteredItem(1))};updateSelectedItems=(i=!1)=>{this.selectedOptions=[...this.options].filter(s=>s.hasAttribute("selected"));let e=this.shadowRoot.getElementById("icon-close").innerHTML,t=this.selectedOptions.map(s=>{let o=document.createElement("div");o.classList.add("selected","item"),o.dataset.value=s.value;let a=document.createElement("div");a.innerText=s.innerHTML;let r=document.createElement("div");return r.classList.add("remove"),r.innerHTML=e,o.appendChild(a),o.appendChild(r),o});this.selectedItemsElement.replaceChildren(...t),i||this.dispatchEvent(new Event("change"))};selectFilteredItem=i=>{[...this.options].find(e=>e.value===i.dataset.value).setAttribute("selected",""),this.updateSelectedItems(),this.updateFilteredItems()};removeSelectedItem=i=>{[...this.options].find(e=>e.value===i.dataset.value).removeAttribute("selected"),this.updateSelectedItems(),this.updateFilteredItems()};connectedCallback(){this.filteredItemsElement.classList.toggle("active",!1),this.initializeFilteredItems(),this.searchGroupElement.addEventListener("focusin",e=>{this.filteredItemsElement.classList.toggle("active",!0),this.searchGroupElement.classList.toggle("active",!0),clearTimeout(this.focusOutTimeout)}),this.searchGroupElement.addEventListener("focusout",e=>{this.focusOutTimeout=setTimeout(()=>{this.filteredItemsElement.classList.remove("active"),this.searchGroupElement.classList.remove("active")},0)}),this.searchInputElement.addEventListener("input",e=>{this.updateFilteredItems()}),this.searchInputElement.addEventListener("focusout",e=>{}),this.searchGroupElement.addEventListener("keydown",e=>{switch(e.code){case"Tab":this.filteredItemsElement.classList.remove("active");break;case"ArrowDown":this.updateActiveFilteredItem(1);break;case"ArrowUp":this.updateActiveFilteredItem(-1);break;case"Enter":this.handlingClick=!0,this.selectActiveFilteredItem();break;default:}}),this.filteredItemsElement.addEventListener("click",e=>{this.selectFilteredItem(e.target)}),this.selectedItemsElement.addEventListener("click",e=>{this.removeSelectedItem(e.target.closest("div.item"))});let i=(e,t)=>{for(let s of e)s.type==="childList"&&this.initializeFilteredItems()};this.mutationObserver=new MutationObserver(i),this.mutationObserver.observe(this,{childList:!0})}disconnectedCallback(){try{this.mutationObserver.disconnect()}catch{console.warn("cannot remove event listeners")}}});var Fs=`<div\r
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
                              multiple="true"\r
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
        <div\r
          class="btn-group actions dropdown status-container rounded-start"\r
          role="group"\r
        >\r
          <button type="button" class="btn btn-secondary">\r
            <div\r
              class="badge"\r
              data-bind="text: request.State.InternalStatus, \r
              class: request.State.InternalStatusClass, \r
              attr: {title: request.State.InternalStatus}"\r
            ></div>\r
          </button>\r
          <button\r
            type="button"\r
            data-bs-toggle="dropdown"\r
            class="btn btn-secondary toggle-status dropdown-toggle dropdown-toggle-split"\r
            title="Change status"\r
            data-bind="enable: EnableChangeStatusArea"\r
          ></button>\r
          <div class="dropdown-menu p-1 status-dropdown">\r
            <div data-bind="if: showPause" class="status-section-pause">\r
              <div class="dropdown-header">Change Status</div>\r
              <div class="mx-2">\r
                <div class="d-flex">\r
                  <label class="me-1">\r
                    <input\r
                      placeholder="New Status..."\r
                      class="form-select"\r
                      list="pause-reason-options"\r
                      data-bind="textInput: pauseReason, \r
                        attr: {placeholder: request.State.InternalStatus}"\r
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
                <div class="form-text mx-2">\r
                  *Changing status will pause request.\r
                </div>\r
              </div>\r
            </div>\r
            <div data-bind="if: showResume" class="status-section-resume">\r
              <div class="dropdown-header">Resume Request</div>\r
              <div class="mx-2">\r
                <button\r
                  type="button"\r
                  title="Resume Request"\r
                  class="btn btn-success"\r
                  data-bind="click: clickResume"\r
                >\r
                  Resume Request\r
                  <i class="fa-solid fa-play fa-xl"></i>\r
                </button>\r
              </div>\r
            </div>\r
            <div class="dropdown-divider"></div>\r
            <div\r
              class="text-nowrap"\r
              data-bind="if: ShowCloseArea"\r
              class="status-section-close"\r
            >\r
              <div class="dropdown-diver"></div>\r
              <div class="dropdown-header">Close Request</div>\r
              <div class="mx-2">\r
                <button\r
                  title="Cancel Request"\r
                  class="btn btn-link text-danger action"\r
                  data-bind="click: promptCancel"\r
                >\r
                  <i class="fa-solid fa-ban fa-xl"></i>\r
                  Cancel Request\r
                </button>\r
                <button\r
                  title="Close Request as Fulfilled"\r
                  class="btn btn-link text-success action"\r
                  data-bind="click: promptFulfill"\r
                >\r
                  Close Request as Fulfilled\r
                  <i class="fa-solid fa-angles-right fa-lg"></i>\r
                </button>\r
              </div>\r
            </div>\r
          </div>\r
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
          <div\r
            class="action"\r
            data-bind="component: {name: 'send-request-as-email', params: {request} }"\r
          ></div>\r
          <!-- ko if: request.Pipeline.getNextStage -->\r
          <button\r
            title="Advance to next stage"\r
            type="button"\r
            class="btn btn-success action"\r
            data-bind="click: nextStageHandler, enable: request.Assignments.CurrentStage.Validation.IsValid"\r
          >\r
            Next Stage <span class="fa fa-chevron-right"></span>\r
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
                        title="View Assignment"\r
                        class="fas fa-search pointer"\r
                        data-bind="click: $parent.view"\r
                      ></i>\r
                      <i\r
                        title="Cancel Assignment"\r
                        class="fa fa-trash pointer"\r
                        data-bind="click: $parent.remove"\r
                      ></i>\r
                      <i\r
                        title="Send Reminder Email"\r
                        class="fa-solid fa-envelope pointer"\r
                        data-bind="click: $parent.notify"\r
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
`;var Qt={};ks(Qt,{ApprovalActions:()=>je,AssignModule:()=>ii,BaseComponent:()=>V,ClosedRequestsTableModule:()=>ms,ConstrainedEntityEditModule:()=>Ae,ConstrainedEntityViewModule:()=>qe,EmailRequestModule:()=>Rs,MyAssignmentsModule:()=>gs,NewAssignmentModule:()=>As,OpenOfficeRequestsTableModule:()=>ps,OpenRequestsTableModule:()=>us,PendingRequestIngestsModule:()=>ls,PipelineModule:()=>vs,QuickInfoModule:()=>Ss,RequestHeaderEditModule:()=>ys,RequestHeaderViewModule:()=>bs,RequestsByServiceTypeModule:()=>hs,RequestsByServiceTypeTableModule:()=>fs,ResolverModule:()=>He,TaskToastModule:()=>Cs,html:()=>R});var Te=class{constructor(e,t,s){this.source=e,this.type=t,this.description=s}};var W=class i{constructor({Id:e,ID:t,Title:s,LoginName:o=null,Email:a=null,IsGroup:r=null,IsEnsured:p=!1}){this.ID=t??e,this.Title=s,this.LookupValue=s,this.LoginName=o!=""?o:null,this.Email=a,this.IsGroup=r,this.IsEnsured=p}ID=null;Title=null;LoginName=null;LookupValue=null;Email;getKey=()=>this.LoginName??this.Title;static Create=function(e){return!e||!e.ID&&!(e.Title||e.LookupValue)?null:new i({...e,Title:e.Title??e.LookupValue})}};var Yt={ActionOffice:"Action Office",RequestingOffice:"Requesting Office",Department:"Department",Budget:"Budget PMO"},ae=class i{constructor({ID:e,Title:t}){this.ID=e,this.Title=t,this.LookupValue=t}UserGroup;Everyone;FieldMap={UserGroup:{get:()=>this.UserGroup,set:e=>this.UserGroup=W.Create(e)}};static Create=function(e){return e?.ID?ge().find(t=>t.ID==e.ID):null};static FindInStore=function(e){return e?.ID?ge().find(t=>t.ID==e.ID):null};static Views={All:["ID","Title","UserGroup","ContactInfo","OrgType","BreakAccess","PreferredEmail","Everyone"]};static ListDef={name:"ConfigRequestOrgs",title:"ConfigRequestOrgs",fields:i.Views.All}},ge=ko.observableArray([]);var Ge=class{constructor(e){e?.ID&&(this.ID=e.ID),e?.Title&&(this.Title=e.Title)}ObservableID=ko.observable();ObservableTitle=ko.observable();get ID(){return this.ObservableID()}set ID(e){this.ObservableID(e)}get Title(){return this.ObservableTitle()}set Title(e){this.ObservableTitle(e)}};var O={InProgress:"In Progress",Completed:"Completed",Approved:"Approved",Rejected:"Rejected",Cancelled:"Cancelled"},Ve={ActionResolver:"Action Resolver",Approver:"Approver",Assigner:"Assigner",Viewer:"Viewer",Subscriber:"Subscriber"},Ra={"Action Resolver":"resolver-actions",Approver:"approver-actions",Assigner:"assigner-actions"},Rt={source:"current-stage-active-assignments",type:"current-stage",description:"Please complete all assignments"},pe=class i extends Ge{constructor({ID:e,Title:t,Assignee:s,RequestOrg:o,PipelineStage:a,IsActive:r=!0,Role:p,CustomComponent:b=null}){super({ID:e,Title:t}),this.Assignee=s,this.RequestOrg=o,this.PipelineStage=a,this.IsActive=r,this.Role=p,this.CustomComponent=b}Role;Errors=ko.observableArray();getComponentName=()=>this.CustomComponent??Ra[this.Role];getComponent=({request:e})=>({request:e,assignment:this,addAssignment:e.Assignments.addNew,completeAssignment:e.Assignments.complete,errors:this.Errors,actionComponentName:this.getComponentName()});userIsDirectlyAssigned=e=>this.Assignee?.ID==e.ID||e.isInGroup(this.Assignee);userIsInRequestOrg=e=>e.isInRequestOrg(this.RequestOrg);isActionable=()=>[Ve.ActionResolver,Ve.Approver,Ve.Assigner].includes(this.Role);isUserActionable=e=>(e||(e=window.WorkOrder.App.CurrentUser()),this.isActionable()?this.userIsDirectlyAssigned(e)||this.userIsInRequestOrg(e):!1);isExpanded=ko.observable(!0);toggleExpanded=()=>this.isExpanded(!this.isExpanded());static CreateFromObject=function(e){e.RequestOrg=ae.FindInStore(e.RequestOrg);let t=new i;return Object.assign(t,e),t};static Views={All:["ID","Title","Assignee","Role","Status","RequestOrg","IsActive","Comment","CompletionDate","ActionTaker","PipelineStage","CustomComponent","Request"],Dashboard:["Role","Assignee","Status","Request"]};static ListDef={name:"Assignments",title:"Assignments",fields:i.Views.All}};window.console=window.console||{log:function(){}};var E=window.sal||{};E.globalConfig=E.globalConfig||{};E.site=E.site||{};window.DEBUG=!0;function Is(i){return{ID:i.get_id(),Title:i.get_title(),LoginName:i.get_loginName(),IsEnsured:!0,IsGroup:!0,oGroup:i}}function ti(){let i=E.globalConfig.defaultGroups,e={};return Object.keys(i).forEach(t=>{e[t]=Is(i[t])}),e}var Zt={};async function Ds(i){if(Zt[i]?.Users?.constructor==Array)return Zt[i].Users;let e=`/web/sitegroups/GetByName('${i}')?$expand=Users`,s=(await X(e)).d;return s.Users=s.Users?.results,Zt[i]=s,s.Users}var Ps=_spPageContextInfo.webAbsoluteUrl=="/"?"":_spPageContextInfo.webAbsoluteUrl;async function Ns(){E.globalConfig.siteGroups=[],console.log("we are initing sal"),E.globalConfig.siteUrl=_spPageContextInfo.webServerRelativeUrl=="/"?"":_spPageContextInfo.webServerRelativeUrl,E.globalConfig.listServices=E.globalConfig.siteUrl+"/_vti_bin/ListData.svc/";var i=SP.ClientContext.get_current(),e=i.get_web();E.globalConfig.defaultGroups={owners:e.get_associatedOwnerGroup(),members:e.get_associatedMemberGroup(),visitors:e.get_associatedVisitorGroup()},i.load(E.globalConfig.defaultGroups.owners),i.load(E.globalConfig.defaultGroups.members),i.load(E.globalConfig.defaultGroups.visitors);var t=e.get_currentUser();i.load(t);var s=e.get_siteGroups();i.load(s),E.globalConfig.roles=[];var o=i.get_web().get_roleDefinitions();return i.load(o),new Promise((a,r)=>{i.executeQueryAsync(function(){E.globalConfig.currentUser=t,E.globalConfig.siteGroups=Ta(s);for(var p=o.getEnumerator();p.moveNext();){var b=p.get_current();E.globalConfig.roles.push(b.get_name())}E.config=new E.NewAppConfig,E.utilities=new E.NewUtilities,a()},function(p,b){alert("Error initializing SAL: "+b.get_message()),console.error("Error initializing SAL: "+b.get_message(),b),r()})})}E.NewAppConfig=function(){var i={};i.roles={FullControl:"Full Control",Design:"Design",Edit:"Edit",Contribute:"Contribute",RestrictedContribute:"Restricted Contribute",InitialCreate:"Initial Create",Read:"Read",RestrictedRead:"Restricted Read",LimitedAccess:"Limited Access"},i.fulfillsRole=function(s,o){let a=Object.values(i.roles);return!a.includes(s)||!a.includes(o)?!1:a.indexOf(s)<=a.indexOf(o)},i.validate=function(){Object.keys(i.roles).forEach(function(s){var o=i.roles[s];E.globalConfig.roles.includes(o)?console.log(o):console.error(o+" is not in the global roles list")})};var e={groups:{Owners:"workorder Owners",Members:"workorder Members",Visitors:"workorder Visitors",RestrictedReaders:"Restricted Readers"}},t={siteRoles:i,siteGroups:e};return t};async function Es(i=_spPageContextInfo.userId){let e="/sp.userprofiles.peoplemanager/getmyproperties",t=`/Web/GetUserById(${i})/?$expand=Groups`,s=(await X(t)).d,o=(await X(e))?.d.UserProfileProperties.results;function a(r,p){return r.find(b=>b.Key==p)?.Value}return{ID:i,Title:s.Title,LoginName:s.LoginName,WorkPhone:a(o,"WorkPhone"),EMail:a(o,"WorkEmail"),IsEnsured:!0,IsGroup:!1,Groups:s.Groups?.results?.map(r=>({...r,ID:r.Id,IsGroup:!0,IsEnsured:!0})),Department:a(o,"Department")}}E.NewUtilities=function(){function i(r,p,b){b=b===void 0?null:b;var x=new SP.ClientContext.get_current,N=x.get_web(),U=new SP.GroupCreationInformation;U.set_title(r),this.oGroup=oWebsite.get_siteGroups().add(U),oGroup.set_owner(oWebsite.get_associatedOwnerGroup()),oGroup.update();var K=SP.RoleDefinitionBindingCollection.newObject(clientContext);this.oRoleDefinitions=[],p.forEach(function(G){var ce=oWebsite.get_roleDefinitions().getByName(G);this.oRoleDefinitions.push(ce),K.add(ce)});var ve=oWebsite.get_roleAssignments();ve.add(oGroup,K);function te(){var G=oGroup.get_title()+" created and assigned to "+oRoleDefinitions.forEach(function(ce){ce+""});b&&b(oGroup.get_id()),console.log(G)}function de(G,ce){alert(groupnName+" - Create group failed. "+ce.get_message()+`
`+ce.get_stackTrace())}clientContext.load(oGroup,"Title");var he={groupName:r,oGroup,oRoleDefinition,callback:b};clientContext.executeQueryAsync(Function.createDelegate(he,te),Function.createDelegate(he,de))}function e(r,p){var b=new SP.ClientContext.get_current,x=b.get_web(),N=x.ensureUser(r),U=N.get_groups();function K(){for(var te=new Array,de=new String,he=U.getEnumerator();he.moveNext();){var G=he.get_current(),ce={};ce.ID=G.get_id(),ce.Title=G.get_title(),de+=`
Group ID: `+G.get_id()+", Title : "+G.get_title(),te.push(ce)}console.log(de.toString()),p(te)}function ve(te,de){console.error(" Everyone - Query Everyone group failed. "+de.get_message()+`
`+de.get_stackTrace())}b.load(N),b.load(U),data={everyone:N,oGroups:U,callback:p},b.executeQueryAsync(Function.createDelegate(data,K),Function.createDelegate(data,ve))}function t(r,p){var b=new SP.ClientContext.get_current,x=r.get_users();function N(){for(var ve=[],te=x.getEnumerator();te.moveNext();){var de={},he=te.get_current();de.title=he.get_title(),de.loginName=he.get_loginName(),ve.push(de)}p(ve)}function U(ve,te){}var K={oUsers:x,callback:p};b.load(x),b.executeQueryAsync(Function.createDelegate(K,N),Function.createDelegate(K,U))}function s(r,p,b,x){var N=new SP.ClientContext.get_current,U=N.get_web(),K=U.getFolderByServerRelativeUrl(r);N.load(K,"Files"),N.executeQueryAsync(function(){console.log("Got the source folder right here!");for(var ve=K.get_files(),te=ve.getEnumerator(),de=[];te.moveNext();){var he=te.get_current(),G=p+"/"+he.get_name();de.push(G),he.copyTo(G,!0)}console.log(de),N.executeQueryAsync(function(){console.log("Files moved successfully!"),b()},function(ce,ot){console.log("error: ")+ot.get_message()})},function(ve,te){console.log("Sorry, something messed up: "+te.get_message())})}function o(r,p){return new Promise((b,x)=>{s(r,p,b,x)})}var a={copyFiles:s,copyFilesAsync:o,createSiteGroup:i,getUserGroups:e,getUsersWithGroup:t};return a};async function $e(i){return new Promise((e,t)=>{var s=E.globalConfig.siteGroups.find(function(x){return x.LoginName==i});if(s){e(s);return}var o=new SP.ClientContext.get_current,a=o.get_web().ensureUser(i);function r(x,N){let U={ID:a.get_id(),Title:a.get_title(),LoginName:a.get_loginName(),Email:a.get_email(),IsEnsured:!0,IsGroup:!1};e(U)}function p(x,N){console.error("Failed to ensure user :"+N.get_message()+`
`+N.get_stackTrace()),t(N)}let b={oUser:a,resolve:e,reject:t};o.load(a),o.executeQueryAsync(Function.createDelegate(b,r),Function.createDelegate(b,p))})}function Ta(i){for(var e=new Array,t=i.getEnumerator();t.moveNext();){var s=t.get_current();e.push(Is(s))}return e}E.getSPSiteGroupByName=function(i){var e=null;return this.globalConfig.siteGroups!=null&&(e=this.globalConfig.siteGroups.find(function(t){return t.Title==i})),e};function Os(i,e){let t=`/web/getFileByServerRelativeUrl('${i}')/copyTo(strNewUrl='${e}',bOverWrite=true)`;return X(t,"POST")}function Ls(i){var e=this;e.config={def:i};async function t(){if(!e.config.fieldSchema){let n=`/web/lists/GetByTitle('${e.config.def.title}')/Fields`,l=await X(n);e.config.fieldSchema=l.d.results}}t();function s(n,l){return new Promise((c,u)=>{o(n,c,l)})}function o(n,l,c){c=c===void 0?!1:c;var u=new Array,f=new Array,A=new SP.ClientContext.get_current,g=A.get_web(),m=g.get_lists().getByTitle(e.config.def.title);n.forEach(function(C){var T=E.getSPSiteGroupByName(C[0]);T?f.push([T,C[1]]):u.push([A.get_web().ensureUser(C[0]),C[1]])});function q(){console.log("Successfully found item");var C=new SP.ClientContext.get_current,T=C.get_web();c?(m.resetRoleInheritance(),m.breakRoleInheritance(!1,!1),m.get_roleAssignments().getByPrincipal(E.globalConfig.currentUser).deleteObject()):m.breakRoleInheritance(!1,!1),this.resolvedGroups.forEach(function(j){var H=SP.RoleDefinitionBindingCollection.newObject(C);H.add(T.get_roleDefinitions().getByName(j[1])),m.get_roleAssignments().add(j[0],H)}),this.users.forEach(function(j){var H=SP.RoleDefinitionBindingCollection.newObject(C);H.add(T.get_roleDefinitions().getByName(j[1])),m.get_roleAssignments().add(j[0],H)});var S={oList:m,callback:l};function P(){console.log("Successfully set permissions"),l(m)}function L(j,H){console.error("Failed to update permissions on List: "+this.oList.get_title()+H.get_message()+`
`,H.get_stackTrace())}C.load(m),C.executeQueryAsync(Function.createDelegate(S,P),Function.createDelegate(S,L))}function v(C,T){console.error("Failed to find List: "+this.oList.get_title+T.get_message(),T.get_stackTrace())}var w={oList:m,users:u,resolvedGroups:f,callback:l};A.load(m),u.map(function(C){A.load(C[0])}),A.executeQueryAsync(Function.createDelegate(w,q),Function.createDelegate(w,v))}function a(n){return n&&(Array.isArray(n)?n.map(l=>r(l)).join(";#"):r(n))}function r(n){return n.ID?`${n.ID};#${n.LookupValue??""}`:n.LookupValue?n.LookupValue:n.constructor.getName()=="Date"?n.toISOString():n}function p(n,l=null){return new Promise((c,u)=>{let f=new SP.ClientContext.get_current,g=f.get_web().get_lists().getByTitle(e.config.def.title),m=new SP.ListItemCreationInformation;if(l){var q=E.globalConfig.siteUrl+"/Lists/"+e.config.def.name+"/"+l;m.set_folderUrl(q)}let v=g.addItem(m),w=["ID","Author","Created","Editor","Modified"];Object.keys(n).filter(P=>!w.includes(P)).forEach(P=>{v.set_item(P,a(n[P]))}),v.update();function C(){c(v.get_id())}function T(P,L){console.error("Create Item Failed - List: "+e.config.def.name),console.error("ValuePairs",n),console.error(P,L),u(P)}let S={entity:n,oListItem:v,resolve:c,reject:u};f.load(v),f.executeQueryAsync(Function.createDelegate(S,C),Function.createDelegate(S,T))})}function b(n){if(!n)return n;let l={};switch(n.constructor.getName()){case"SP.FieldUserValue":l.LoginName=n.get_email();case"SP.FieldLookupValue":l.ID=n.get_lookupId(),l.LookupValue=n.get_lookupValue(),l.Title=n.get_lookupValue();break;default:l=n}return l}function x(n,l,c){var u=new SP.CamlQuery.createAllItemsQuery;u.set_viewXml(n);var f=new SP.ClientContext.get_current,A=f.get_web(),g=A.get_lists().getByTitle(e.config.def.title),m=g.getItems(u);function q(){var C=this,T=C.collListItem.getEnumerator();let S=[];for(;T.moveNext();){var P=T.get_current(),L={};l.forEach(j=>{var H=P.get_item(j);L[j]=Array.isArray(H)?H.map(fe=>b(fe)):b(H)}),S.push(L)}c(S)}function v(C,T){console.log("unsuccessful read",C),alert("Request on list "+e.config.def.name+` failed, producing the following error: 
 `+T.get_message()+`
StackTrack: 
 `+T.get_stackTrace())}var w={collListItem:m,callback:c,fields:l,camlQuery:u};f.load(m,`Include(${l.join(", ")})`),f.executeQueryAsync(Function.createDelegate(w,q),Function.createDelegate(w,v))}function N({fields:n=null,caml:l=null}){if(!l)var l='<View Scope="RecursiveAll"><Query><Where><Eq><FieldRef Name="FSObjType"/><Value Type="int">0</Value></Eq></Where></Query></View>';return new Promise((c,u)=>{x(l,n,c)})}function U(n,l){return new Promise((c,u)=>{try{G(n,l,c)}catch(f){u(f)}})}async function K(n,l){let[c,u]=await te(l),f=`/web/lists/GetByTitle('${e.config.def.title}')/items(${n})?$Select=${c}&$expand=${u}`;return(await X(f)).d}async function ve(){if(!e.config.fieldSchema){let n=`/web/lists/GetByTitle('${e.config.def.title}')/Fields`,l=await X(n);e.config.fieldSchema=l.d.results}return e.config.fieldSchema}async function te(n){let l=[],c=[],u=await ve();return n.map(f=>{if(f.includes("/")){l.push(f),c.push(f.split("/")[0]);return}let A=u.find(g=>g.StaticName==f);if(!A){alert(`Field '${f}' not found on list ${e.config.def.name}`);return}switch(A.TypeAsString){case"UserMulti":case"User":case"LookupMulti":case"Lookup":let g=f+"/ID",m=f+"/Title";l.push(g),l.push(m),c.push(f);break;case"Choice":default:l.push(f)}}),[l,c]}async function de(n,{orderByColumn:l=null,sortAsc:c},{count:u=null},f,A){let[g,m]=await te(f),q=l?`$orderby=${l} ${c?"asc":"desc"}`:"",v=[];n.forEach(H=>v.push(`${H.column} ${H.op??"eq"} '${H.value}'`)),A||v.push("FSObjType eq '0'");let w="$filter=("+v.join(") and (")+")",C="$select="+g,T="$expand="+m,S=u?`$top=${u}`:"",P=`/web/lists/GetByTitle('${e.config.def.title}')/items?${C}&${T}&${q}&${w}&${S}`,L=await X(P);return{results:L?.d?.results,_next:L?.d?.__next}}async function he(n){let l=await X(n._next);return{results:l?.d?.results,_next:l?.d?.__next}}function G(n,l,c){var u=new SP.ClientContext.get_current,f=u.get_web(),A=f.get_lists().getByTitle(e.config.def.title),g=A.getItemById(n);function m(){let w={};l.forEach(C=>{var T=g.get_item(C);w[C]=Array.isArray(T)?T.map(S=>b(S)):b(T)}),c(w)}function q(w,C){console.error("SAL: findById - List: "+e.config.def.name),console.error("Fields",this),console.error(w,C)}var v={oListItem:g,callback:c,fields:l};u.load(g),u.executeQueryAsync(Function.createDelegate(v,m),Function.createDelegate(v,q))}function ce(n){return n?.ID?new Promise((l,c)=>{let u=new SP.ClientContext.get_current,g=u.get_web().get_lists().getByTitle(e.config.def.title).getItemById(n.ID),m=["ID","Author","Created","Editor","Modified"];Object.keys(n).filter(C=>!m.includes(C)).forEach(C=>{g.set_item(C,a(n[C]))}),g.update();function q(){console.log("Successfully updated "+this.oListItem.get_item("Title")),l()}function v(C,T){console.error("Update Failed - List: "+e.config.def.name),console.error("Item Id",this.oListItem.get_id()??"N/A"),console.error(n),console.error(C,T),c(T)}let w={oListItem:g,entity:n,resolve:l,reject:c};u.load(g),u.executeQueryAsync(Function.createDelegate(w,q),Function.createDelegate(w,v))}):!1}function ot(n,l){var c=new SP.ClientContext.get_current,u=c.get_web(),f=u.get_lists().getByTitle(e.config.def.title),A={callback:l};f.getItemById(n).deleteObject();function m(v,w){l()}function q(v,w){console.error("sal.SPList.deleteListItem: Request on list "+e.config.def.name+` failed, producing the following error: 
 `+w.get_message()+`
StackTrack: 
 `+w.get_stackTrace())}c.executeQueryAsync(Function.createDelegate(A,m),Function.createDelegate(A,q))}function Kt(n){return new Promise((l,c)=>ot(n,l))}function Wo(n,l,c){return new Promise((u,f)=>{zo(n,l,u,c)})}function zo(n,l,c,u){u=u===void 0?!1:u;let f=[],A=[],g=new SP.ClientContext.get_current,v=g.get_web().get_lists().getByTitle(e.config.def.title).getItemById(n);l.forEach(function(S){let P=E.getSPSiteGroupByName(S[0]);P?.oGroup?A.push([P.oGroup,S[1]]):f.push([g.get_web().ensureUser(S[0]),S[1]])});function w(){console.log("Successfully found item");let S=new SP.ClientContext.get_current,P=S.get_web();u?(v.resetRoleInheritance(),v.breakRoleInheritance(!1,!1),v.get_roleAssignments().getByPrincipal(E.globalConfig.currentUser).deleteObject()):v.breakRoleInheritance(!1,!1),this.resolvedGroups.forEach(function(fe){let ue=SP.RoleDefinitionBindingCollection.newObject(S);ue.add(P.get_roleDefinitions().getByName(fe[1])),v.get_roleAssignments().add(fe[0],ue)}),this.users.forEach(function(fe){let ue=SP.RoleDefinitionBindingCollection.newObject(S);ue.add(P.get_roleDefinitions().getByName(fe[1])),v.get_roleAssignments().add(fe[0],ue)});var L={oListItem:v,callback:c};function j(){console.log("Successfully set permissions"),c(v)}function H(fe,ue){console.error("Failed to update permissions on item: "+this.oListItem.get_lookupValue()+ue.get_message()+`
`+ue.get_stackTrace(),!1)}S.load(v),S.executeQueryAsync(Function.createDelegate(L,j),Function.createDelegate(L,H))}function C(S,P){console.error("Failed to update permissions on item: "+this.title+P.get_message()+`
`+P.get_stackTrace(),!1)}var T={id:n,oListItem:v,users:f,resolvedGroups:A,callback:c};g.load(v),f.map(function(S){g.load(S[0])}),g.executeQueryAsync(Function.createDelegate(T,w),Function.createDelegate(T,C))}function Jo(n){return new Promise((l,c)=>{var u=new SP.ClientContext.get_current,f=u.get_web(),A=f.get_lists().getByTitle(e.config.def.title),g=A.getItemById(n),m=g.get_roleAssignments();function q(){for(var C=new SP.ClientContext.get_current,T=C.get_web(),S=[],P=this.roles.getEnumerator();P.moveNext();){var L=P.get_current(),j=L.get_member();C.load(j),S.push(j)}C.executeQueryAsync(function(H,fe){var ue=S.map(function(Re){return{ID:Re.get_id(),Title:Re.get_title(),LoginName:Re.get_loginName()}});l(ue)},function(H,fe){alert("Request failed. "+fe.get_message()+`
`+fe.get_stackTrace()),c(fe)})}function v(C,T){console.error("Failed to get permissions on item: "+T.get_message()+`
`+T.get_stackTrace(),!1),c(T)}let w={id:n,oListItem:g,roles:m,resolve:l,reject:c};u.load(g),u.load(m),u.executeQueryAsync(Function.createDelegate(w,q),Function.createDelegate(w,v))})}function Ce(n){let l=e.config.def.isLib?"/"+e.config.def.name+"/":"/Lists/"+e.config.def.name+"/",c=E.globalConfig.siteUrl+l;return n.startsWith(c)?n:c+n}function Ko(n){return e.config.def.isLib?new Promise((l,c)=>oa(n,l)):new Promise((l,c)=>ia(n,l))}async function Xo(n){try{let c=(await ea(n)).map(u=>[u.LoginName,E.config.siteRoles.roles.RestrictedRead]);await Xt(n,c,!0)}catch(l){console.warn(l)}}async function Yo(n,l){let c=Ce(n),u=E.globalConfig.siteUrl+`/_api/web/GetFolderByServerRelativeUrl('${c}')/ListItemAllFields/RoleAssignments?$expand=Member,Member/Users,RoleDefinitionBindings`,f=await fetch(u,{method:"GET",headers:{Accept:"application/json; odata=verbose"}});if(!f.ok){if(f.status==404)return;console.error(f)}let A=await f.json(),g=A?.d?.results;if(!g){console.warn("No results found",A);return}let m=l.filter(q=>{let v=q[0],w=q[1];return!g.find(T=>T.Member.LoginName!=v&&!T.Member.Users?.results.find(S=>S.LoginName==v)?!1:!!T.RoleDefinitionBindings.results?.find(S=>E.config.siteRoles.fulfillsRole(S.Name,w)))});console.log("Adding missing permissions",m),m.length&&await Xt(n,m,!1)}function Zo(n,l){return new Promise((c,u)=>{let f=new SP.ClientContext.get_current,g=f.get_web().get_lists().getByTitle(e.config.def.title),m=Ce(n),q=SP.CamlQuery.createAllItemsQuery();q.set_folderServerRelativeUrl(m);let v=g.getItems(q);f.load(v,`Include(${l.join(", ")})`),f.executeQueryAsync(function(){let w=[];for(var C=v.getEnumerator();C.moveNext();){var T=C.get_current(),S={};l.forEach(P=>{var L=T.get_item(P);S[P]=Array.isArray(L)?L.map(j=>b(j)):b(L)}),S.oListItem=T,w.push(S)}c(w)},function(w,C){console.warn("Unable load list folder contents:"),console.error(w),console.error(C),u(C)})})}async function ea(n){return new Promise(async(l,c)=>{let u=await ta(n);if(!u){c("Folder item does not exist");return}let f=u.get_roleAssignments(),A=new SP.ClientContext.get_current;A.load(u),A.load(f),A.executeQueryAsync(function(){let g=new SP.ClientContext.get_current;console.log(u);let m=[],q=[],v=f.getEnumerator();for(;v.moveNext();){let w=v.get_current(),C=w.get_member(),T=w.get_roleDefinitionBindings();g.load(T),g.load(C),m.push({principal:C,bindings:T})}g.executeQueryAsync(function(w,C){let T=m.map(function({principal:S,bindings:P}){let L=[],j=P.getEnumerator();for(;j.moveNext();){let H=j.get_current();L.push(H.get_name())}return{ID:S.get_id(),Title:S.get_title(),LoginName:S.get_loginName(),Roles:L}});l(T)},function(w,C){console.warn("Unable load folder principals permissions:"),console.error(w),console.error(C),c(C)})},function(g,m){console.warn("Unable load folder permissions:"),console.error(g),console.error(m),c(m)})})}async function ta(n){return new Promise((l,c)=>{let u=new SP.ClientContext.get_current,A=u.get_web().get_lists().getByTitle(e.config.def.title),g=SP.CamlQuery.createAllItemsQuery();var q='<View Scope="RecursiveAll"><Query><Where><And><Eq><FieldRef Name="FSObjType"/><Value Type="int">1</Value></Eq><Eq><FieldRef Name="FileRef"/><Value Type="Text">'+Ce(n)+"</Value></Eq></And></Where></Query><RowLimit>1</RowLimit></View>";g.set_viewXml(q);let v=A.getItems(g);async function w(){let S=[];for(var P=v.getEnumerator();P.moveNext();){let j=P.get_current();S.push(j)}S||(console.warn("folder not found"),l(S)),S.length>1&&(console.warn("Multiple folders found!"),l(S));let L=S[0];l(L)}function C(S,P){console.warn("Unable load list folder contents:"),console.error(S),console.error(P),c(P)}let T={allFolders:v,resolve:l,reject:c};u.load(v),u.executeQueryAsync(Function.createDelegate(T,w),Function.createDelegate(T,C))})}function ia(n,l){var c=n.split("/"),u=0,f=function(A,g,m,q){var v=g[m];m++;var w=g.slice(0,m).join("/");sa(w,function(C){m>=g.length?q(C.get_id()):f(w,g,m,q)},function(){e.createListFolder(v,function(C){m>=g.length?q(C):f(w,g,m,q)},A)})};f("",c,u,l)}e.createListFolder=function(n,l,c){c=c===void 0?"":c;let u=new SP.ClientContext.get_current,A=u.get_web().get_lists().getByTitle(e.config.def.title),g="",m=new SP.ListItemCreationInformation;m.set_underlyingObjectType(SP.FileSystemObjectType.folder),m.set_leafName(n),c&&(g=E.globalConfig.siteUrl+"/Lists/"+e.config.def.name+"/"+c,m.set_folderUrl(g));let q=A.addItem(m);q.set_item("Title",n),q.update();function v(T,S){l(this.newItem.get_id())}function w(T,S){alert("Request on list "+e.config.def.name+` failed, producing the following error: 
`+S.get_message()+`
StackTrack: 
`+S.get_stackTrace())}let C={folderName:n,callback:l,newItem:q};u.load(q),u.executeQueryAsync(Function.createDelegate(C,v),Function.createDelegate(C,w))};function sa(n,l,c){var u=E.globalConfig.siteUrl+"/Lists/"+e.config.def.name+"/"+n,f=SP.ClientContext.get_current(),A=f.get_web().getFolderByServerRelativeUrl(u);A.get_listItemAllFields();var g={folder:A,path:n,onExists:l,onNonExists:c};f.load(A,"Exists","Name");function m(){if(A.get_exists()){let C=function(){l(w)},T=function(S,P){console.error("Failed to find folder at "+n,P)};console.log("Folder "+A.get_name()+" exists in "+e.config.def.name);var v=new SP.ClientContext.get_current,w=A.get_listItemAllFields();g={folderItem:w,path:n,onExists:l},v.load(w),v.executeQueryAsync(Function.createDelegate(g,C),Function.createDelegate(g,T))}else console.warn("Folder exists but is hidden (security-trimmed) for us.")}function q(v,w){w.get_errorTypeName()==="System.IO.FileNotFoundException"?(console.log("SAL.SPList.ensureListFolder:           Folder "+n+" does not exist in "+e.config.def.name),c()):console.error("Error: "+w.get_message())}f.executeQueryAsync(Function.createDelegate(g,m),Function.createDelegate(g,q))}function oa(n,l){let f=new SP.ClientContext.get_current().get_web().get_lists().getByTitle(e.config.def.title);var A=function(g,m,q){var v=g.get_context(),w=m.split("/"),C=w[0],T=g.get_folders().add(C);v.load(T),v.executeQueryAsync(function(){if(w.length>1){var S=w.slice(1,w.length).join("/");A(T,S,q)}else q(T)},function(S,P){console.error("error creating new folder"),console.error(S),console.error(error)})};A(f.get_rootFolder(),n,l)}function Xt(n,l,c){return new Promise((u,f)=>{aa(n,l,u,c)})}function aa(n,l,c,u){u=u===void 0?!1:u;var f=[],A=[];let g=Ce(n),m=new SP.ClientContext.get_current,v=m.get_web().getFolderByServerRelativeUrl(g);l.forEach(function(S){var P=E.getSPSiteGroupByName(S[0]);P?.oGroup?A.push([P.oGroup,S[1]]):f.push([m.get_web().ensureUser(S[0]),S[1]])});function w(){var S=new SP.ClientContext.get_current,P=S.get_web(),L=this.folder.get_listItemAllFields();u?(L.resetRoleInheritance(),L.breakRoleInheritance(!1,!1),L.get_roleAssignments().getByPrincipal(E.globalConfig.currentUser).deleteObject()):L.breakRoleInheritance(!1,!1),this.resolvedGroups.forEach(function(ue){var Re=SP.RoleDefinitionBindingCollection.newObject(S);Re.add(P.get_roleDefinitions().getByName(ue[1])),L.get_roleAssignments().add(ue[0],Re)}),this.users.forEach(function(ue){var Re=SP.RoleDefinitionBindingCollection.newObject(S);Re.add(P.get_roleDefinitions().getByName(ue[1])),L.get_roleAssignments().add(ue[0],Re)});var j={folderItem:L,callback:c};function H(){console.log("Successfully set permissions"),this.callback(L)}function fe(ue,Re){console.error("Failed to update permissions on item: "+Re.get_message(),Re)}S.load(L),S.executeQueryAsync(Function.createDelegate(j,H),Function.createDelegate(j,fe))}function C(S,P){console.error("Something went wrong setting perms on library folder",P)}var T={folder:v,users:f,callback:c,resolvedGroups:A,valuePairs:l,reset:u};f.map(function(S){m.load(S[0])}),m.load(v),m.executeQueryAsync(Function.createDelegate(T,w),Function.createDelegate(T,C))}function na(n){let c=`/web/GetFolderByServerRelativeUrl('${Ce(n)}')`;return X(c,"POST",{"If-Match":"*","X-HTTP-Method":"DELETE"})}function ra(n,l,c,u){var f="";c.id&&(f=c.id);let A=SP.UI.$create_DialogOptions();var g=e.config.def.isLib?"/"+e.config.def.name+"/":"/Lists/"+e.config.def.name+"/",m="";c.rootFolder&&(m=E.globalConfig.siteUrl+g+c.rootFolder);var q=e.config.def.isLib?"/"+e.config.def.name+"/Forms/":"/Lists/"+e.config.def.name+"/";Object.assign(A,{title:l,dialogReturnValueCallback:u,args:JSON.stringify(c),url:E.globalConfig.siteUrl+q+n+"?ID="+f+"&Source="+location.pathname+"&RootFolder="+m}),SP.UI.ModalDialog.showModalDialog(A)}function la(n,l,c){return new Promise((u,f)=>{let A=new SP.ClientContext.get_current,m=A.get_web().get_lists().getByTitle(e.config.def.title);A.load(m),A.executeQueryAsync(function(){var q=E.globalConfig.siteUrl=="/"?"":E.globalConfig.siteUrl;let v=SP.UI.$create_DialogOptions();Object.assign(v,{title:l,dialogReturnValueCallback:u,args:JSON.stringify(c),url:q+"/_layouts/Upload.aspx?List="+m.get_id().toString()+"&RootFolder="+q+"/"+e.config.def.name+"/"+encodeURI(n)+"&Source="+location.pathname+"&args="+encodeURI(JSON.stringify(c))}),SP.UI.ModalDialog.showModalDialog(v)},function(q,v){console.error("Error showing file modal: "),console.error(q),console.error(v)})})}let xs=10485760,cn={start:"startupload",continue:"continueupload",finish:"finishupload"};async function da(n,l,c,u){let f=n,A=xs,g=n.size,m=parseInt((g/A).toString(),10)+(g%A===0?1:0),q=l+"/"+c,v=xa(),w;u({currentBlock:0,totalBlocks:m}),w=await ca(v,n.slice(0,A),q,l);for(let T=2;T<m;T++)u({currentBlock:T,totalBlocks:m}),w=await ua(v,n.slice(w,w+A),w,q);u({currentBlock:m-1,totalBlocks:m});let C=await pa(v,n.slice(w),w,q);return u({currentBlock:m,totalBlocks:m}),C}async function ca(n,l,c,u){let f=`/web/getFolderByServerRelativeUrl(@folder)/files/getByUrlOrAddStub(@file)/StartUpload(guid'${n}')?&@folder='${u}'&@file='${c}'`,m=await X(f,"POST",{"Content-Type":"application/octet-stream"},{body:l});if(!m){console.error("Error starting upload!");return}return parseFloat(m.d.StartUpload)}async function ua(n,l,c,u){let f=`/web/getFileByServerRelativeUrl(@file)/ContinueUpload(uploadId=guid'${n}',fileOffset=${c})?&@file='${u}'`,m=await X(f,"POST",{"Content-Type":"application/octet-stream"},{body:l});if(!m){console.error("Error starting upload!");return}return parseFloat(m.d.ContinueUpload)}async function pa(n,l,c,u){let f=`/web/getFileByServerRelativeUrl(@file)/FinishUpload(uploadId=guid'${n}',fileOffset=${c})?&@file='${u}'`,m=await X(f,"POST",{"Content-Type":"application/octet-stream"},{body:l});if(!m){console.error("Error starting upload!");return}return m}async function ma(n,l,c){return await fetch(_spPageContextInfo.webServerRelativeUrl+`/_api/web/GetFolderByServerRelativeUrl('${l}')/Files/add(url='${c}',overwrite=true)`,{method:"POST",credentials:"same-origin",body:n,headers:{Accept:"application/json; odata=verbose","Content-Type":"application/json;odata=nometadata","X-RequestDigest":document.getElementById("__REQUESTDIGEST").value}}).then(u=>{if(!u.ok){console.error("Error Uploading File",u);return}return u.json()})}async function ha(n,l,c,u,f=null){f||(f=()=>{});let A=Ce(c),g=null;if(n.size>xs){let v=()=>da(n,A,l,f);g=await ka.addJob(v)}else f({currentBlock:0,totalBlocks:1}),g=await ma(n,A,l),f({currentBlock:1,totalBlocks:1});await fa(g.d,u),await wa(A+"/"+l,"");let m=g.d.ListItemAllFields.__deferred.uri+"?$select=ID";return(await X(m)).d.ID}async function fa(n,l){var c=await fetch(n.ListItemAllFields.__deferred.uri,{method:"POST",credentials:"same-origin",body:JSON.stringify(l),headers:{Accept:"application/json; odata=nometadata","Content-Type":"application/json;odata=nometadata","X-RequestDigest":document.getElementById("__REQUESTDIGEST").value,"X-HTTP-Method":"MERGE","If-Match":"*"}}).then(u=>{if(!u.ok){console.error("Error Updating File",u);return}return u});return c}function ga(n,l,c,u){let f=Ce(n),A=Ce(l);var g=new SP.ClientContext.get_current,m=g.get_web(),q=m.getFolderByServerRelativeUrl(f);g.load(q,"Files"),g.executeQueryAsync(function(){for(var v=q.get_files(),w=v.getEnumerator(),C=[];w.moveNext();){var T=w.get_current(),S=A+"/"+T.get_name();C.push(S),T.copyTo(S,!0)}console.log(C),g.executeQueryAsync(function(){console.log("Files moved successfully!"),c()},function(P,L){console.log("error: ",L.getMessage()),u(L)})},function(v,w){console.error("Unable to copy files: ",w.get_message()),console.error(v,w),u(w)})}function ba(n,l){return new Promise((c,u)=>{ga(n,l,c,u)})}function ya(n,l){let c=Ce(l),u=`/web/getFileByServerRelativeUrl(@s)/copyTo(strNewUrl=@d,bOverWrite=true)?@s='${n}'&@d='${c}'`;return X(u,"POST")}async function va(n,l,c=null){c||(c=n.split("/").pop());let u=Ce(`Attachments/${l.ID}/${c}`),f=Ce(`${l.ID}/${c}`),A=`/web/lists/getbytitle('${e.config.def.title}')/items(${l.ID})/AttachmentFiles/add(FileName='${c}')`,g=`/web/GetFileByServerRelativeUrl('${n}')/$value`,m=await X(g,"GET",null,null,"blob");if(!m)return;let q=await m.arrayBuffer(),v={"Content-Length":q.byteLength};return await X(A,"POST",v,{body:q})}async function un(){let n=await X(`/web/lists/GetByTitle('${e.config.def.title}')`)}function wa(n,l){let c=`/web/GetFileByServerRelativeUrl('${n}')/CheckIn(comment='${l}',checkintype=0)`;return X(c,"POST")}return{findByIdAsync:U,getById:K,findByColumnValueAsync:de,loadNextPage:he,getListItemsAsync:N,createListItemAsync:p,updateListItemAsync:ce,deleteListItemAsync:Kt,setItemPermissionsAsync:Wo,getItemPermissionsAsync:Jo,getFolderContentsAsync:Zo,upsertFolderPathAsync:Ko,deleteFolderByPathAsync:na,getServerRelativeFolderPath:Ce,setFolderReadonlyAsync:Xo,setFolderPermissionsAsync:Xt,ensureFolderPermissionsAsync:Yo,uploadFileToFolderAndUpdateMetadata:ha,uploadNewDocumentAsync:la,copyFilesAsync:ba,copyFileAsync:ya,copyAttachmentFromPath:va,showModal:ra}}async function X(i,e="GET",t={},s={},o="json"){let a=i.startsWith("http")?i:E.globalConfig.siteUrl+"/_api"+i,r=await fetch(a,{method:e,headers:{Accept:"application/json; odata=verbose","X-RequestDigest":document.getElementById("__REQUESTDIGEST").value,...t},...s});if(!r.ok){if(r.status==404)return;console.error(r)}try{let p;switch(o){case"json":p=await r.json();break;case"blob":p=await r.blob();break;default:p=r}return p}catch{return r}}window.spFetch=X;function xa(){if(crypto.randomUUID)return crypto.randomUUID();let i=Date.now();return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(e){let t=(i+Math.random()*16)%16|0;return i=Math.floor(i/16),(e==="x"?t:t&3|8).toString(16)})}var ei=class{constructor(e){this.maxConcurrency=e,this.runningJobs=0,this.queue=[]}addJob(e){return new Promise((t,s)=>{let o=async()=>{try{let a=await e();t(a)}catch(a){s(a)}finally{this.runningJobs--,this.processQueue()}};this.queue.push(o),this.processQueue()})}processQueue(){for(;this.runningJobs<this.maxConcurrency&&this.queue.length>0;){let e=this.queue.shift();this.runningJobs++,e()}}},ka=new ei(5);var Y={FullControl:"Full Control",Design:"Design",Edit:"Edit",Contribute:"Contribute",Read:"Read",LimitedAccess:"Limited Access",RestrictedRead:"Restricted Read",RestrictedContribute:"Restricted Contribute",InitialCreate:"Initial Create"},qa={RestrictedReaders:new W({ID:null,Title:"Restricted Readers"})},ze={Admin:"Admin",ActionOffice:"ActionOffice"},Se={ActionResolver:{LookupValue:"Action Resolver",description:"Confirms completion of an action.",isAssignable:!0,permissions:Y.RestrictedContribute,initialStatus:O.InProgress},Assigner:{LookupValue:"Assigner",description:"Can create additional assignments.",isAssignable:!0,permissions:Y.RestrictedContribute,initialStatus:O.InProgress},Approver:{LookupValue:"Approver",description:"Approves or Rejects the request.",isAssignable:!0,permissions:Y.RestrictedContribute,initialStatus:O.InProgress},Viewer:{LookupValue:"Viewer",description:"Has view only access to the request.",isAssignable:!0,permissions:Y.RestrictedRead},Subscriber:{LookupValue:"Subscriber",description:"Has view only access to the request and recieves notifications",isAssignable:!0,permissions:Y.RestrictedRead}},xt={"Pending Assignment":Se.Assigner,"Pending Approval":Se.Approver,"Pending Action":Se.ActionResolver,"Pending Resolution":Se.ActionResolver,Notification:Se.Subscriber},F=ko.observable(),Tt=class i extends W{constructor({ID:e,Title:t,LoginName:s=null,LookupValue:o=null,WorkPhone:a=null,EMail:r=null,IsGroup:p=null,IsEnsured:b=!1,Groups:x=null,Department:N=null}){super({ID:e,Title:t,LookupValue:o,LoginName:s,IsGroup:p,IsEnsured:b}),this.WorkPhone=a,this.EMail=r,this.Email=r,this.OfficeSymbol=N??"CGFS/EX",this.Groups=x}OfficeSymbol;Groups=[];isInGroup(e){return e?.ID?this.getGroupIds().includes(e.ID):!1}getGroupIds(){return this.Groups.map(e=>e.ID)}isInRequestOrg=e=>this.RequestOrgs().find(t=>t.ID==e.ID);RequestOrgs=ko.pureComputed(()=>{let e=this.getGroupIds();return ge().filter(t=>t.Everyone||e.includes(t.UserGroup?.ID))});RequestingOffices=ko.pureComputed(()=>this.RequestOrgs().filter(e=>e.OrgType==Yt.RequestingOffice));ActionOffices=ko.pureComputed(()=>this.RequestOrgs().filter(e=>e.OrgType==Yt.ActionOffice));IsActionOffice=ko.pureComputed(()=>this.ActionOffices().length);IsSiteOwner=ko.pureComputed(()=>this.isInGroup(ti().owners));hasSystemRole=e=>{let t=this.IsSiteOwner();switch(e){case ze.Admin:return t;case ze.ActionOffice:return t||this.ActionOffices().length;default:}};static Create=async function(){let e=await Es();return new i(e)}};function Ms(i){let e=ti(),t=i.RequestorInfo.Requestor(),s=i.Author.Value(),o=i.RequestorInfo.Office(),a=[[new W(e.owners),Y.FullControl],[qa.RestrictedReaders,Y.RestrictedRead],[t,Y.RestrictedContribute],[s,Y.RestrictedContribute]];return o&&!o.BreakAccess&&a.push([o.UserGroup,Y.RestrictedContribute]),i.Pipeline.Stages()?.forEach(r=>{let p=ae.FindInStore(r.RequestOrg);if(p&&a.push([p.UserGroup,Y.RestrictedContribute]),r.AssignmentFunction&&Je[r.AssignmentFunction])try{Je[r.AssignmentFunction](i,r).forEach(x=>{let N=x.Assignee;N&&N.Title&&a.push([N,Y.RestrictedContribute])})}catch{console.warn("Error creating stage assignments",r)}}),a}async function kt(i){let e=await Ds(i);return e?e.map(t=>new W(t)):[]}async function Bs(i){let e=await $e(i.LoginName??i.Title);return e?new W(e):null}var Je={TestFunc:function(){return request.RequestorInfo.Requestor()},ch_overtimeGovManager:function(i,e){let t=i.RequestBodyBlob?.Value()?.GovManager.get();if(!t)throw new Error("Could not find stage Assignee");return[new pe({Assignee:t,RequestOrg:e.RequestOrg,PipelineStage:e,IsActive:!0,Role:Se.ActionResolver,CustomComponent:"GovManagerActions"})]},ch_overtimeAPM:function(i,e){let t=i.RequestBodyBlob?.Value()?.FieldMap.APM.get();if(!t)throw new Error("Could not find stage Assignee");return[new pe({Assignee:t,RequestOrg:e.RequestOrg,PipelineStage:e,IsActive:!0,Role:Se.ActionResolver,CustomComponent:"APMActions"})]},getGTM:function(i,e){let t=i.RequestBodyBlob?.Value()?.FieldMap.GTM.get();if(!t)throw new Error("Could not find stage Assignee");return[new pe({Assignee:t,RequestOrg:e.RequestOrg,PipelineStage:e,IsActive:!0,Role:Se.Approver})]},getCOR:function(i,e){let t=i.RequestBodyBlob?.Value()?.FieldMap.COR.get();if(!t)throw new Error("Could not find stage Assignee");return[new pe({Assignee:t,RequestOrg:e.RequestOrg,PipelineStage:e,IsActive:!0,Role:Se.Approver})]},getSupervisor:function(i,e){return[new pe({Assignee:Vs(i,"Supervisor"),RequestOrg:e.RequestOrg,PipelineStage:e,IsActive:!0,Role:Se.Approver})]},getWildcard:function(i,e,t){return[new pe({Assignee:Vs(i,t),RequestOrg:e.RequestOrg,PipelineStage:e,IsActive:!0,Role:Se.Approver,CustomComponent:e.ActionComponentName})]}};function Vs(i,e){let t=i.RequestBodyBlob?.Value()?.FieldMap[e]?.get();if(!t)throw new Error(`Could not find assignee field on current request: ${e}`);return t}var R=String.raw,V=class{constructor(){}static name="base-component";static template=R`<div>No Component Registered!</div>`};var _s=R`
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
`;var je=class extends V{constructor(e){super(),this.assignment=e.assignment,this.completeAssignment=e.completeAssignment}assignmentStates=O;approve=async()=>{this.completeAssignment(this.assignment,O.Approved)};approveHandler=async()=>{if(console.log("approved"),this.assignment.userIsDirectlyAssigned(F())){this.approve();return}if(this.assignment.userIsInRequestOrg(F())){confirm(`This approval is assigned to ${this.assignment.Assignee.Title}. Do you want to approve on their behalf? `)&&this.approve();return}alert("You are not authorized to approve this request!")};rejectModalId=ko.pureComputed(()=>"reject-modal-"+this.assignment.ID);RejectReason=ko.observable();reject=async()=>{console.log("reject"),this.assignment.Comment=this.RejectReason(),this.completeAssignment(this.assignment,O.Rejected),document.getElementById(this.rejectModalId()).close()};showReject=()=>{let e=document.getElementById(this.rejectModalId());if(this.assignment.userIsDirectlyAssigned(F())){e.showModal();return}if(this.assignment.userIsInRequestOrg(F())){confirm(`This approval is assigned to ${this.assignment.Assignee.Title}. Do you want to reject on their behalf? `)&&e.showModal();return}alert("You are not authorized to reject this request!")};cancelReject=()=>{document.getElementById(this.rejectModalId()).close()};undo=async()=>{};static name="approver-actions";static template=_s};var Us=R`
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
`;var ii=class extends V{constructor({request:e,assignment:t,addAssignment:s,completeAssignment:o}){super(),this.allAssignments=e.Assignments.list.All,this.assignment=t,this.addAssignment=s,this.completeAssignment=o,this.NextStage=e.Pipeline.getNextStage()}assignmentStates=O;NewAssignments=ko.pureComputed(()=>this.allAssignments().filter(e=>e.PipelineStage.ID==this.NextStage?.ID));newAssignmentParams=ko.pureComputed(()=>({addAssignment:async e=>{e.RequestOrg=this.assignment.RequestOrg,this.addAssignment(e),this.completeAssignment(this.assignment,O.Completed)},stage:this.NextStage}));static name="assigner-actions";static template=Us};var Gs=R`
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
`;var He=class extends V{constructor(e){super(),console.log("hello from resolver module",e),this.assignment=e.assignment,this.completeAssignment=e.completeAssignment}assignmentStates=O;complete=async()=>{console.log("complete"),this.completeAssignment(this.assignment,O.Completed)};completeHandler=()=>{console.log("approved");let e=this.assignment;if(e.userIsDirectlyAssigned(F())){this.complete();return}if(e.userIsInRequestOrg(F())){confirm(`This assignment is assigned to ${e.Assignee.Title}. Do you want to complete on their behalf? `)&&this.complete();return}alert("You are not authorized to approve this request!")};static name="resolver-actions";static template=Gs};var Be={view:"default-constrained-view",edit:"default-constrained-edit",new:"default-constrained-edit"},we=class extends Ge{constructor(e){super(e)}toJSON=()=>{let e={};return Object.keys(this.FieldMap).map(t=>e[t]=this.FieldMap[t]?.get()),e};fromJSON(e){window.DEBUG&&console.log("Setting constrained entity from JSON",e),Object.keys(e).map(t=>this.FieldMap[t]?.set(e[t]))}toHTMLTable=()=>"<table><tbody>"+Object.entries(this.FormFields).map(([t,s])=>R`
            <tr>
              <td>${s?.displayName??t}</td>
              <td>
                ${s?.toString()??'<span style="font-style: italic;">not provided</span>'}
              </td>
            </tr>
          `).join("")+R`
      </tbody></table>
      `;toHTMLDataList=()=>"<dl>"+Object.entries(this.FieldMap).map(([t,s])=>R`
            <dt>${s?.displayName??t}</dt>
            <dd>
              ${s?.toString()??'<span style="font-style: italic;">not provided</span>'}
            </dd>
          `).join("")+R`
      </dl>
      `;toHTML=()=>"<p>"+Object.entries(this.FieldMap).filter(([t,s])=>s?.Visible()).map(([t,s])=>{let o=s?.displayName??t,a=s?.toString()??'<span style="font-style: italic;">not provided</span>';return`${o}: ${a}`}).join("<br>")+"</p>";FormFields=ko.pureComputed(()=>Object.values(this.FieldMap).filter(e=>e?.Visible()));FormFieldKeys=ko.pureComputed(()=>Object.keys(this.FieldMap).filter(e=>this.FieldMap[e]?.Visible()));validate=(e=!0)=>(Object.values(this.FieldMap).map(t=>t?.validate&&t.validate(e)),this.ShowErrors(e),this.Errors());ShowErrors=ko.observable(!1);Errors=ko.pureComputed(()=>Object.values(this.FieldMap).filter(e=>e?.Errors&&e.Errors()).flatMap(e=>e.Errors()));IsValid=ko.pureComputed(()=>!this.Errors().length);components=Be};var $s=R`
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
`;var js=R`
  <div>
    <div class="row row-cols-1 row-cols-md-2" data-bind="foreach: FormFields">
      <div
        class="col pb-2"
        data-bind="component: {name: components.view, params: $data}, class: width"
      ></div>
    </div>
  </div>
`;var qt=class extends V{constructor({Entity:e}){super(),Object.assign(this,e)}},qe=class extends qt{constructor(e){super(e)}static name=Be.view;static template=js},Ae=class extends qt{constructor(e){super(e)}static name=Be.edit;static template=$s};var xe={PendingAssignment:"Pending Assignment",PendingApproval:"Pending Approval",PendingAction:"Pending Action",PendingResolution:"Pending Resolution",Notification:"Notification",Closed:"Closed"},Fe=class i{constructor({ID:e,Title:t}){this.ID=e,this.Title=t,this.LookupValue=t}static Create=function({ID:e,LookupValue:t}){return new i({ID:e,Title:t})};static FindInStore=function(e){return!e||!e.ID?null:Ke().find(t=>t.ID==e.ID)};static GetCompletedStage=function(){return Ke().find(e=>e.ActionType==xe.Closed)};static Views={All:["ID","Title","ServiceType","Step","ActionType","ActionTargetStage","Assignee","WildCardAssignee","RequestOrg","AssignmentFunction","ActionComponentName"]};static ListDef={name:"ConfigPipelines",title:"ConfigPipelines",fields:i.Views.All}},Ke=ko.observableArray();var B={Paused:"Paused",Resumed:"Resumed",Assigned:"Assigned",Unassigned:"Unassigned",Created:"Created",Advanced:"Advanced",Approved:"Approved",Completed:"Completed",Rejected:"Rejected",Closed:"Closed"},Xe=class{constructor(){}PipelineStage;FieldMap={PipelineStage:{get:()=>this.PipelineStage,set:e=>{this.PipelineStage=Fe.FindInStore(e)}}};static Views={All:["ID","Title","PipelineStage","ActionType","Description","Author","Created"]};static ListDef={name:"Actions",title:"Actions",fields:this.Views.All}};var _e=class{constructor(){}static Views={All:["ID","Title","IsActive","Request","FileLeafRef","FileRef","Author","Created"]};static ListDef={name:"Attachments",title:"Attachments",fields:this.Views.All,isLib:!0}};var Ye=class{constructor(){}static Views={All:["ID","Title","Comment","NotificationSent","Author","IsActive","Created"]};static ListDef={name:"Comments",title:"Comments",fields:this.Views.All}};var It=ko.observable(),Ft=class i{static Views={All:["ID","Title","Date","Repeating"]};static ListDef={name:"ConfigHolidays",title:"ConfigHolidays",fields:i.Views.All}};var ne=class{constructor({displayName:e,instructions:t=null,isRequired:s=!1,width:o,Visible:a=ko.pureComputed(()=>!0)}){this.displayName=e,this.instructions=t,this.isRequired=s,this.Visible=a,this.width=o?"col-md-"+o:"col-md-6",this.addFieldRequirement(Fa(this))}Value=ko.observable();get=()=>this.Value();set=e=>this.Value(e);toString=ko.pureComputed(()=>this.Value());toJSON=()=>this.Value();fromJSON=e=>this.Value(e);validate=(e=!0)=>(this.ShowErrors(e),this.Errors());_fieldValidationRequirements=ko.observableArray();Errors=ko.pureComputed(()=>this.Visible()?this._fieldValidationRequirements().filter(t=>t.requirement()).map(t=>t.error):[]);addFieldRequirement=e=>this._fieldValidationRequirements.push(e);IsValid=ko.pureComputed(()=>!this.Errors().length);ShowErrors=ko.observable(!1);ValidationClass=ko.pureComputed(()=>{if(this.ShowErrors())return this.Errors().length?"is-invalid":"is-valid"})};function Fa(i){return{requirement:ko.pureComputed(()=>{if(!ko.unwrap(i.isRequired))return!1;let t=ko.unwrap(i.Value);return t?.constructor==Array?!t.length:t==null}),error:new Te("text-field","required-field",`${ko.utils.unwrapObservable(i.displayName)} is required!`)}}var I={draft:"Draft",open:"Open",paused:"Paused",fulfilled:"Completed",cancelled:"Cancelled",rejected:"Rejected"},Ue={inProgress:"In Progress",waitingOnCustomer:"Waiting on Customer",researching:"Researching"};var Dt=class{constructor({addNew:e,refresh:t,list:s,AreLoading:o},a){a.subscribeAdded(this.activityQueueWatcher),this.addNew=e,this.refresh=t,this.Actions=s.All,this.AreLoading=o}activityQueueWatcher=e=>{e.map(({activity:t,data:s})=>{this.actionTypeFunctionMap[t]&&this.actionTypeFunctionMap[t](s)})};actionTypeFunctionMap={Assigned:this.assignmentAdded.bind(this),Unassigned:this.assignmentRemoved.bind(this),Created:this.requestCreated.bind(this),Advanced:this.requestAdvanced.bind(this),Approved:this.requestApproved.bind(this),Rejected:this.requestRejected.bind(this),Paused:this.requestPaused.bind(this),Resumed:this.requestResumed.bind(this),Closed:this.requestClosed.bind(this)};async requestCreated(e){this.addNew({ActionType:B.Created,Description:`The request was submitted with an effective submission date of ${e.Dates.Submitted.toLocaleDateString()}.`})}async requestAdvanced(e){this.addNew({ActionType:B.Advanced,Description:`The request was advanced to stage ${e.Step}: ${e.Title}.`})}requestPaused(e){this.addNew({ActionType:B.Paused,Description:e})}requestResumed(){this.addNew({ActionType:B.Resumed,Description:"Request clock has been resumed"})}async requestClosed(e){this.addNew({ActionType:B.Closed,Description:`The request was closed with a status of ${e.State.Status()}.`})}async assignmentCompleted(e){let t=`${e.ActionTaker.Title} has ${e.Status} an assignment.`;this.addNew({ActionType:e.Status,Description:t})}async requestApproved(e){let t=`${e.ActionTaker.Title} has ${e.Status} an assignment.`;this.addNew({ActionType:B.Approved,Description:t})}async requestRejected(e){let t=`${e.ActionTaker.Title} has rejected the request and provided the following reason:<br/>`+e.Comment;this.addNew({ActionType:B.Rejected,Description:t})}async assignmentAdded(e){let t=`The following ${e.Role.LookupValue}s have been assigned to this request:<br>`;e.Assignee?.Title&&(t+=`${e.Assignee.Title} - `),t+=e.RequestOrg?.Title,this.addNew({ActionType:B.Assigned,Description:t})}async assignmentRemoved(e){let t=`The following ${e.Role.LookupValue??e.Role}s have been removed from this request:<br>`;e.Assignee?.Title&&(t+=`${e.Assignee.Title} - `),t+=e.RequestOrg?.Title,this.addNew({ActionType:B.Unassigned,Description:t})}};var at=(i,e)=>i.Title>e.Title?1:i.Title<e.Title?-1:0,Hs=i=>(e,t)=>e[i]>t[i]?1:e[i]<t[i]?-1:0,Qs=()=>{let i=new Date;return i.format("yyMMdd")+"-"+i.getTime()%1e5};function Pt(i,e){for(var t=0,s=new Date(i),o=Math.abs(e),a=Math.sign(e);o>=0;)s.setTime(i.getTime()+a*t*864e5),Js(s)&&!zs(s)&&--o,++t;return s}function Ws(i,e){for(var t=0,s=new Date(i),o=Math.sign(e-i);s.format("yyyy-MM-dd")!=e.format("yyyy-MM-dd");)Js(s)&&!zs(s)&&t++,s.setDate(s.getDate()+1*o);return t*o}function zs(i){var e=It().find(function(t){var s=t.Date.getUTCDate()==i.getUTCDate(),o=t.Date.getUTCMonth()==i.getUTCMonth(),a=t.Date.getUTCFullYear()==i.getUTCFullYear();return t.Repeating&&(a=!0),s&&o&&a});return e}function Js(i){var e=i.getDay();if(e===0||e===6)return!1;let t=["12/31+5","1/1","1/2+1","1-3/1","2-3/1","5~1/1","7/3+5","7/4","7/5+1","9-1/1","10-2/1","11/10+5","11/11","11/12+1","11-4/4","12/24+5","12/25","12/26+1"];var s=i.getDate(),o=i.getMonth()+1,a=o+"/"+s;if(t.indexOf(a)>-1)return!1;var r=a+"+"+e;if(t.indexOf(r)>-1)return!1;var p=Math.floor((s-1)/7)+1,b=o+"-"+p+"/"+e;if(t.indexOf(b)>-1)return!1;var x=new Date(i);x.setMonth(x.getMonth()+1),x.setDate(0);var N=Math.floor((x.getDate()-s-1)/7)+1,U=o+"~"+N+"/"+e;return!(t.indexOf(U)>-1)}var Xs=Ps,Ks={};window.history.replaceState({},"",document.location.href);function Ze(i,e){if(Nt(i)==e)return;let t=window.location.search,s=new RegExp("([?;&])"+i+"[^&;]*[;&]?"),o=t.replace(s,"$1").replace(/&$/,""),a=(o.length>2?o+"&":"?")+(e?i+"="+e:"");Ks[i]=e,window.history.pushState(Ks,"",a.toString())}function Nt(i){let e=new RegExp("[?&]"+i+"=([^&#]*)").exec(window.location.href);return e==null?null:decodeURI(e[1])||0}var Et={pending:"Pending",aging:"Aging",completed:"Completed"},nt=class{constructor({msg:e,blocking:t}){this.msg=e,this.blocking=t,this.Status(Et.pending),this.timeout=this.setTimeout()}msg;blocking;Status=ko.observable();timeout;timeoutPeriod=5e3;setTimeout=()=>window.setTimeout(()=>{console.warn("this task is aging:",this),this.Status(Et.aging)},this.timeoutPeriod);resetTimeout=()=>{window.clearTimeout(this.timeout),this.timeout=this.setTimeout()};markComplete=()=>{window.clearTimeout(this.timeout),this.Status(Et.completed)};IsBlocking=ko.pureComputed(()=>this.blocking&&this.Status()!=Et.completed)},Ot=class extends nt{constructor({msg:e,blocking:t}){super({msg:e,blocking:t})}timeoutPeriod=8e3;updateProgress=({percentDone:e})=>{this.Status(`${parseInt(e*100)}%`)}};var rt=ko.observableArray(),Zs=ko.pureComputed(()=>rt().filter(i=>i.IsBlocking())??[]),ie={init:{msg:"Initializing the Application",blocking:!0},save:{msg:"Saving Request",blocking:!0},cancelAction:{msg:"Cancelling Action",blocking:!0},view:{msg:"Viewing Request",blocking:!1},refresh:{msg:"Refreshing Request",blocking:!1},permissions:{msg:"Updating Request Item Permissions",blocking:!0},lock:{msg:"Locking Request",blocking:!0},closing:{msg:"Closing Request",blocking:!0},pipeline:{msg:"Progressing to Next Stage",blocking:!0},newComment:{msg:"Submitting Comment",blocking:!1},refreshComments:{msg:"Refreshing Comments",blocking:!1},notifyComment:{msg:"Sending Comment Email",blocking:!1},removeComment:{msg:"Removing Comment",blocking:!1},newAction:{msg:"Submitting Action",blocking:!1},refreshActions:{msg:"Refreshing Actions",blocking:!1},newAttachment:{msg:"Submitting Attachment",blocking:!1},uploadAttachment:i=>({msg:"Uploading Attachment: "+i,blocking:!0,type:Ot}),refreshAttachments:{msg:"Refreshing Attachments",blocking:!1},copyAttachment:i=>({msg:"Copying attachment: "+i,blocking:!0}),newNotification:{msg:"Submitting Notification",blocking:!0},approve:{msg:"Approving Request",blocking:!0}},se=i=>{let e=i.type?new i.type(i):new nt(i);return rt.push(e),e},Z=function(i){i&&(i.markComplete(),window.setTimeout(()=>Ia(i),3e3))},Ia=function(i){rt.remove(i)};var Ee={MyRequests:"my-requests-tab",NewRequest:"new-request-tab",RequestDetail:"request-detail-tab"},lt="/sites/CGFS/Style Library/apps/wo/src",eo=_spPageContextInfo.webTitle;var Da=String.raw,to={Created:Pa,Advanced:Na,Assigned:Ea,Closed:Oa};function io({request:i}){let e=new Ie,s=`<p>${[`Request ID: ${i.Title}`,`Submitted On: ${i.Dates.Submitted.toString()}`,"Requestor Info:",`${i.RequestorInfo.Requestor()?.Title}`,`${i.RequestorInfo.Phone()}`,`${i.RequestorInfo.Email()}`,`${i.RequestorInfo.OfficeSymbol.toString()}`].join("<br>")}</p>`,o=i.RequestBodyBlob?.Value()?.toHTML(),a=Da`
    <p>
      ${ko.unwrap(i.RequestDescription.displayName)}:<br />
      ${i.RequestDescription.Value()}
    </p>
  `,r=F();return r?.Email&&e.CCString.Value(r.Email+";"),e.Body.Value([s,o,a].join("<br>")),e}async function so(i,e){let t=[e.RequestorInfo.Requestor(),F()],s=[];e.Assignments.list.All().filter(a=>a.PipelineStage?.ID==e.Pipeline.Stage()?.ID).map(a=>{a.Assignee?.LoginName&&t.push(a.Assignee),s.push(a.RequestOrg)});let o=Ie.Create({To:await dt(t),CC:await dt(s),Request:e,Title:ct(e,"New Comment"),Body:`${F().Title} has left a new comment on ${e.getAppLinkElement()}:<br/><br/>`});await et(o,e.getRelativeFolderPath())}function oo(i,e){window.DEBUG&&(console.log("Sending Notification: ",e),console.log("for request: ",i)),to[e.activity]&&to[e.activity](i,e)}async function Pa(i){window.DEBUG&&console.log("Sending Request Created Notification for: ",i);let e=_(),t=[...new Set(i.Pipeline.RequestOrgs()?.map(N=>N.Title))],s="";t.forEach(N=>{s+=`<li>${N}</li>`});let o=[i.RequestorInfo.Requestor(),F()],a=await dt(o),r=Ie.Create({To:a,Title:ct(i,"New"),Body:`<p>Your ${i.RequestType.Title} request has been successfully submitted.</p><p>${i.getAppLinkElement()}</p><p>Estimated days to close this request type: `+i.RequestType.DaysToCloseBusiness+"</p><p>This request will be serviced by:</br><ul>"+s+"</ul></p><p>To view the request, please click the link above, or copy and paste the below URL into your browser:</br>"+i.getAppLink(),Request:i});await et(r,i.getRelativeFolderPath());let p=i.Pipeline.RequestOrgs()?.map(N=>ae.FindInStore(N)),b=await dt(p),x=Ie.Create({To:b,Title:ct(i,"New"),Body:"<p>Greetings Colleagues,<br><br> A new service request has been opened requiring your attention:<br>"+i.getAppLinkElement()+"</p><p>Estimated days to close this request type: "+i.RequestType.DaysToCloseBusiness+"</p><p>This request will be serviced by:</br><ul>"+s+"</ul></p><p>To view the request, please click the link above, or copy and paste the below URL into your browser:</br>"+i.getAppLink(),Request:i});await et(x,i.getRelativeFolderPath())}function Na(i){window.DEBUG&&console.log("Sending Request Advanced Notification for: ",i)}async function Ea(i,e){window.DEBUG&&console.log("Sending Request Assigned Notification for: ",i),window.DEBUG&&console.log(e);let t=e.data?.Role?.LookupValue,s="";switch(t){case Ve.Subscriber:case Ve.Viewer:s="<p>This notification was generated for information purposes only. You have no pending actions on this request.</p>";break;default:}let o=Ie.Create({Title:ct(i,"Assigned"),Body:`<p>Greetings Colleagues,<br><br>You have been assigned the role of       <strong>${t}</strong> on the following       request:<br>`+i.getAppLinkElement()+"</p>"+s+"<p>To view the request, please click the link above,       or copy and paste the below URL into your browser: <br> "+i.getAppLink()+"</p>",Request:i}),a=new W(e.data?.Assignee),r=ae.FindInStore(e.data?.RequestOrg);if(a?.ID!=r?.UserGroup.ID){let b=await ao(a);o.ToString.Value(b);let x=await si(r);o.CCString.Value(x)}else{let b=await si(r);o.ToString.Value(b)}await _().Notifications.AddEntity(o,i.getRelativeFolderPath())}async function Oa(i,e){window.DEBUG&&console.log("Sending Request Closed Notification for: ",i);let t=await dt([i.RequestorInfo.Requestor()]),s=Ie.Create({To:t,Title:ct(i,"Closed "+i.State.Status()),Body:`<p>Greetings Colleagues,<br><br>The following request has been ${i.State.Status()}:<br>`+i.getAppLinkElement()+"</p><p>This request cannot be re-opened.</p>",Request:i});await et(s,i.getRelativeFolderPath())}async function et(i,e,t=null){let s=_(),o=se(ie.newNotification);return await s.Notifications.AddEntity(i,e),t&&await Promise.all(t.map(async a=>{let r=se(ie.copyAttachment(a.FileLeafRef));await s.Notifications.CopyAttachmentFromPath(a.FileRef,i),Z(r)})),Z(o),!0}async function dt(i){return(await Promise.all(i.map(async t=>t.OrgType?si(t):ao(t)))).filter(t=>t).join("; ")}async function si(i){if(i.PreferredEmail)return i.PreferredEmail;if(i.UserGroup){let e=i.FieldMap.UserGroup.get();return no(e.Title)}}async function ao(i){if(!(!i.IsEnsured&&(i=await Bs(i),!i)))return i.IsGroup?no(i.Title):i.Email}async function no(i){return(await kt(i)).filter(t=>t.Email).map(t=>t.Email).join(";")}function ct(i,e){return`${eo} -${e}- ${i.RequestType.Title} - ${i.Title}`}var Q=String.raw;function re(i){ko.components.register(i.edit,{template:i.editTemplate,viewModel:i}),ko.components.register(i.view,{template:i.viewTemplate,viewModel:i})}var ee=class{constructor(e){Object.assign(this,e)}_id;getUniqueId=()=>(this._id||(this._id="field-"+Math.floor(Math.random()*1e4)),this._id);Errors=ko.pureComputed(()=>this.ShowErrors()?this.isRequired?this.Value()?[]:[new ValidationError("text-field","required-field",this.displayName+" is required!")]:[]:[]);ShowErrors=ko.observable(!1);ValidationClass=ko.pureComputed(()=>{if(this.ShowErrors())return this.Errors().length?"is-invalid":"is-valid"});static viewTemplate=Q`
    <div class="fw-semibold" data-bind="text: displayName"></div>
    <div data-bind="text: toString()"></div>
  `;static editTemplate=Q`<div>Uh oh!</div>`};var La=Q`
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
`,Va=Q`
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
`,ut=class extends ee{constructor(e){super(e)}static viewTemplate=Va;static editTemplate=La;static view="blob-view";static edit="blob-edit";static new="blob-edit"};re(ut);var Ma=Q`
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
`,Ba=Q`
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
`,pt=class extends ee{constructor(e){super(e)}static viewTemplate=Ba;static editTemplate=Ma;static view="checkbox-view";static edit="checkbox-edit";static new="checkbox-edit"};re(pt);var _a=Q`
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
`,mt=class extends ee{constructor(e){super(e)}static editTemplate=_a;static view="date-view";static edit="date-edit";static new="date-edit"};re(mt);var Ua=Q`
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
`,ht=class extends ee{constructor(e){super(e)}static editTemplate=Ua;static view="lookup-view";static edit="lookup-edit";static new="lookup-edit"};re(ht);var Ga=Q`
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
`,$a=Q`
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
`,ft=class extends ee{constructor(e){super(e)}ValueFunc=ko.pureComputed({read:()=>this.Value()?ko.unwrap(this.userOpts).find(t=>t.ID==this.Value().ID):void 0,write:e=>{ko.unwrap(this.userOpts)&&this.Value(e)}});ShowUserSelect=ko.pureComputed(()=>this.spGroupName?ko.unwrap(this.userOpts).length:!1);static viewTemplate=$a;static editTemplate=Ga;static view="people-view";static edit="people-edit";static new="people-edit"};re(ft);var ja=Q`
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
`,oi=class extends ee{constructor(e){super(e),this.Options=e.Options,this.Value=e.Value,this.optionsText=e.optionsText??(t=>t),this.multiple=e.multiple,this.OptionsCaption=e.OptionsCaption??"Select..."}GetSelectedOptions=ko.pureComputed(()=>this.multiple?this.Value():this.Value()?[this.Value()]:[]);InputGroupFocused=ko.observable();setFocus=()=>this.InputGroupFocused(!0);FilterText=ko.observable();FilteredOptions=ko.pureComputed(()=>this.Options().filter(e=>this.GetSelectedOptions().indexOf(e)>=0?!1:this.FilterText()?this.optionsText(e).toLowerCase().includes(this.FilterText().toLowerCase()):!0));addSelection=(e,t)=>{console.log("selected",e),t.target.nextElementSibling&&t.target.nextElementSibling.focus(),this.multiple?this.Value.push(e):this.Value(e)};removeSelection=e=>this.multiple?this.Value.remove(e):this.Value(null);setInputGroupFocus=()=>{this.InputGroupFocused(!0),clearTimeout(this.focusOutTimeout)};removeInputGroupFocus=(e,t)=>{this.focusOutTimeout=window.setTimeout(()=>{this.InputGroupFocused(!1)},0)};static editTemplate=ja;static view="search-select-view";static edit="search-select-edit";static new="search-select-new"};re(oi);var Ha=Q`
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
`,gt=class extends ee{constructor(e){super(e)}static editTemplate=Ha;static view="select-view";static edit="select-edit";static new="select-edit"};re(gt);var Qa=Q`
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
`,Wa=Q`
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
`,bt=class extends ee{constructor(e){super(e)}childrenHaveLoaded=e=>{this.initializeEditor()};getToolbarId=()=>"toolbar-"+this.getUniqueId();initializeEditor(){let e=[["bold","italic","underline","strike"],["link"],["blockquote","code-block"],[{header:1},{header:2}],[{list:"ordered"},{list:"bullet"}],[{script:"sub"},{script:"super"}],[{indent:"-1"},{indent:"+1"}],[{direction:"rtl"}],[{size:["small",!1,"large","huge"]}],[{header:[1,2,3,4,5,6,!1]}],[{color:[]},{background:[]}],[{font:[]}],[{align:[]}],["clean"]];var t=new Quill("#"+this.getUniqueId(),{modules:{toolbar:e},theme:"snow"});let s=this.Value;s.subscribe(o=>{if(o==""){t.setText("");return}t.root.innerHTML!=o&&t.pasteHTML(o)}),t.on("text-change",function(o,a,r){s(t.root.textContent?t.root.innerHTML:"")})}static viewTemplate=Wa;static editTemplate=Qa;static view="text-area-view";static edit="text-area-edit";static new="text-area-edit"};re(bt);var za=Q`
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
`,yt=class extends ee{constructor(e){super(e)}static editTemplate=za;static view="text-view";static edit="text-edit";static new="text-edit"};re(yt);var z=class extends ne{constructor(e){super(e),this.isRichText=e.isRichText,this.attr=e.attr??{}}components=bt};var Qe=class{constructor(e,t){this.includeAssignments=t,this.filter=e}IsLoading=ko.observable();HasLoaded=ko.observable(!1);List=ko.observableArray();load=async()=>{this.IsLoading(!0);let e=new Date,s=(await _().Requests.FindByColumnValue([{column:"RequestStatus",value:this.filter}],{orderByColumn:"Title",sortAsc:!1},{},oe.Views.ByStatus,!1)).results;this.includeAssignments&&s.map(a=>a.Assignments.refresh()),this.List(s);let o=new Date;window.DEBUG&&console.log(`Request by status Set - ${this.filter}: ${s.length} cnt in ${o-e}`),this.HasLoaded(!0),this.IsLoading(!1)};init=async()=>{if(!this.HasLoaded()){if(this.IsLoading())return new Promise((e,t)=>{this.isLoadingSubscription=this.IsLoading.subscribe(s=>{this.isLoadingSubscription.dispose(),e()})});await this.load()}};dispose(){this.isLoadingSubscription&&this.isLoadingSubscription.dispose()}includeAssignments=async()=>{}};var le=new Map;le.set(I.open,new Qe(I.open,!0));le.set(I.fulfilled,new Qe(I.fulfilled));le.set(I.cancelled,new Qe(I.cancelled));le.set(I.rejected,new Qe(I.rejected));var vt=ko.observableArray();var be={New:"New",Edit:"Edit",View:"View"},Ja={New:"request-header-edit",View:"request-header-view",Edit:"request-header-edit"},Ka={New:"request-body-edit",View:"request-body-view",Edit:"request-body-edit"},Lt=class{refreshAll=async()=>{await this.request.refreshAll()};Request=ko.observable();get request(){return this.Request()}DisplayModes=be;DisplayMode=ko.observable();HeaderComponentName=ko.pureComputed(()=>Ja[this.DisplayMode()]);BodyComponentName=ko.pureComputed(()=>Ka[this.DisplayMode()]);ShowActionsArea=ko.pureComputed(()=>this.request.State.IsActive()&&!this.request.IsLoading()&&!this.request.Assignments.AreLoading()&&this.request.Assignments.CurrentStage.list.UserActionAssignments().length);ShowCloseArea=ko.pureComputed(()=>!this.request.IsLoading()&&!this.request.Assignments.AreLoading()&&this.request.Authorization.currentUserCanClose());ShowFulfillArea=ko.pureComputed(()=>!this.request.IsLoading()&&!this.request.Assignments.AreLoading()&&this.request.Authorization.currentUserCanClose());EnableChangeStatusArea=ko.pureComputed(()=>this.request.Authorization.currentUserCanAdvance());newComment={input:new z({displayName:"Please provide additional comments/instructions here",instructions:null,isRichText:!0}),submit:async()=>{let e={Comment:this.newComment.input.Value()};await this.request.Comments.addNew(e),this.newComment.input.Value("")}};submitNewRequest=async()=>{if(!this.request.Validation.validate())return;let e=this.request.RequestType;if(!e)throw"no service type provided";let t=se(ie.save);this.DisplayMode(be.View),this.request.DisplayMode(be.View),this.request.State.Status(I.open);let s=this.request.getRelativeFolderPath();{let r=se(ie.permissions),p=this.request.getFolderPermissions(),b=this.request.getInitialListRefs(),x=this.request.Attachments.list.All().length;if(x&&b.push(this._context.Attachments),await Promise.all(b.map(async N=>{if(!await N.UpsertFolderPath(s)){alert(`Could not create ${N.Title} folder `+s);return}let K=await N.SetFolderPermissions(s,p)})),Z(r),x){let N=this.request.getRelativeFolderPathStaging();await this._context.Attachments.CopyFolderContents(N,s),await this._context.Attachments.DeleteFolderByPath(N)}}let o=this.request.calculateEffectiveSubmissionDate();this.request.Dates.Submitted.set(o),this.request.Dates.EstClosed.set(Pt(o,e.DaysToCloseBusiness)),this.request.RequestOrgs(this.request.Pipeline.Stages().filter(r=>r.RequestOrg!=null).map(r=>r.RequestOrg)),this.request.State.InternalStatus(Ue.inProgress),this.request.State.IsActive(!0),await this._context.Requests.AddEntity(this.request,s),Ze("reqId",this.request.Title),this.request.ActivityQueue.push({activity:B.Created,data:this.request}),this.request.Pipeline.advance(),this.request.Validation.reset(),this.request.LoadedAt(new Date),le.get(I.open).List.push(this.request),Z(t)};editRequestHandler=async()=>{this.DisplayMode(be.Edit)};updateRequestHandler=async()=>{this.DisplayMode(be.View)};cancelChangesHandler=async()=>{this.refreshAll(),this.DisplayMode(be.View)};promptClose=()=>{confirm("Close and finalize request? This action cannot be undone!")&&this.request.closeAndFinalize(I.fulfilled)};promptFulfill=()=>{if(this.request.Pipeline.Stage().ActionType==xe.Closed&&confirm("Close and finalize request? This action cannot be undone!")){this.request.closeAndFinalize(I.fulfilled);return}let e=this.request.Pipeline.Stages().length-this.request.Pipeline.Stage()?.Step;if(e&&confirm(`This request still has ${e} open steps! Are you sure you want to close and finalize it? This action cannot be undone!`)){this.request.closeAndFinalize(I.fulfilled);return}};promptCancel=()=>{confirm("Cancel request? This action cannot be undone!")&&this.request.closeAndFinalize(I.cancelled)};pauseOptions=Object.entries(Ue).filter(([e,t])=>t!=Ue.inProgress).map(([e,t])=>({key:e,value:t}));pauseReason=ko.observable();showPause=ko.pureComputed(()=>this.request.State.Status()==I.open&&this.request.State.InternalStatus()==Ue.inProgress);clickPause=()=>{let e=this.pauseReason();this.pauseReason(null),this.request.pauseRequest(e)};showResume=ko.pureComputed(()=>this.request.State.IsPaused());clickResume=()=>{this.request.resumeRequest()};validationWatcher=e=>{e&&this.request.Authorization.currentUserCanAdvance()&&!this.request.Assignments.CurrentStage.list.InProgress().length&&this.promptAdvance()};nextStageHandler=()=>{if(!this.request.Assignments.CurrentStage.list.InProgress().length){this.request.Pipeline.advance();return}this.promptAdvance()};promptAdvanceModal;promptAdvance=()=>{this.promptAdvanceModal||(this.promptAdvanceModal=new bootstrap.Modal(document.getElementById("modal-advance-request"),{})),this.promptAdvanceModal.show()};confirmAdvanceHandler=()=>{if(!this.request.Pipeline.getNextStage()){this.promptClose(),this.promptAdvanceModal.hide();return}this.request.Pipeline.advance(),this.promptAdvanceModal.hide()};approveRequestHandler=()=>{this.approveRequest()};async approveRequest(){this.promptAdvance()}serviceTypeDefinitionWatcher=e=>{};createNewRequest=async({request:e})=>{let{Requestor:t,Phone:s,Email:o,OfficeSymbol:a}=e.RequestorInfo,r=e.Author.Value;t()||t(new W(F())),r()||r(new W(F())),s()||s(F().WorkPhone),o()||o(F().EMail),a.get()||a.set(F().OfficeSymbol);let{Status:p,InternalStatus:b,IsActive:x}=e.State;p()||p(I.draft),b()||b(I.draft),x()||x(!0),e.LoadedAt(new Date),e.Validation.IsValid.subscribe(this.validationWatcher),this.Request(e),this.DisplayMode(be.New)};viewRequest=({request:e})=>{e.Validation.IsValid.subscribe(this.validationWatcher),this.Request(e),this.DisplayMode(be.View),this.refreshAll()};constructor(){this._context=_()}};var ai={Draft:"text-bg-info",Open:"text-bg-primary",Paused:"text-bg-warning","In Progress":"text-bg-primary",Completed:"text-bg-success",Cancelled:"text-bg-warning",Rejected:"text-bg-danger"},oe=class i{constructor({ID:e=null,Title:t=null,ServiceType:s=null}){this.ID=e,this.Title=t??Qs(),this.LookupValue=t,this._context=_(),e||(this.DisplayMode(be.New),this.State.Status(I.draft)),s&&(this.RequestType=Me.FindInStore(s),this.RequestType._constructor&&(this.RequestBodyBlob=new Oe({displayName:"Service Type Details",isRequired:!1,width:12,entityType:ko.observable(this.RequestType._constructor)}))),this.ActivityQueue.subscribe(this.activityQueueWatcher,this,"arrayChange")}DisplayMode=ko.observable(be.View);Displaymodes=be;get ID(){return this.ObservableID()}set ID(e){this.ObservableID(e)}get Title(){return this.ObservableTitle()}set Title(e){this.ObservableTitle(e)}ObservableID=ko.observable();ObservableTitle=ko.observable();RequestSubject=ko.observable();RequestDescription=new z({displayName:ko.pureComputed(()=>this.RequestType?.DescriptionTitle??"Description"),instructions:ko.pureComputed(()=>this.RequestType?.DescriptionFieldInstructions),isRichText:!0,isRequired:ko.pureComputed(()=>this.RequestType?.DescriptionRequired??!1),width:"12"});RequestorInfo={Requestor:ko.observable(),Phone:ko.observable(),Email:ko.observable(),Office:ko.observable(),OfficeSymbol:new d({displayName:"Office Symbol"})};Author=new k({displayName:"Created By"});State={IsActive:ko.observable(),Status:ko.observable(),StatusClass:ko.pureComputed(()=>ai[this.State.Status()]),InternalStatus:ko.observable(),InternalStatusClass:ko.pureComputed(()=>ai[this.State.InternalStatus()]??ai.Paused),IsPaused:ko.pureComputed(()=>this.State.Status()==I.open&&this.State.InternalStatus()!=Ue.inProgress)};Reporting={MeetingStandard:ko.pureComputed(()=>this.Reporting.AgingDays()<=0),AgingDays:ko.pureComputed(()=>this.Reporting.OpenDays()-this.RequestType.DaysToCloseBusiness),OpenDays:ko.pureComputed(()=>{let e=this.Dates.Closed.Value()??new Date;return Ws(this.Dates.Submitted.Value(),e)})};Dates={Submitted:new D({displayName:"Submitted Date"}),EstClosed:new D({displayName:"Est. Closed Date"}),Closed:new D({displayName:"Closed Date"})};RequestOrgs=ko.observable();RequestType;RequestBodyBlob;Pipeline={Stage:ko.observable(),PreviousStage:ko.observable(),Icon:ko.pureComputed(()=>this.RequestType?.Icon),Stages:ko.pureComputed(()=>{if(!this.RequestType)return[];let e=Ke().filter(s=>s.ServiceType?.ID==this.RequestType?.ID).sort(Hs("Step")),t=Fe.GetCompletedStage();return t.Step=e.length+1,e.push(t),e}),RequestOrgs:ko.pureComputed(()=>this.Pipeline.Stages().filter(e=>e.RequestOrg).map(e=>e.RequestOrg)),getNextStage:ko.pureComputed(()=>{let t=(this.Pipeline.Stage()?.Step??0)+1;return this.Pipeline.Stages()?.find(s=>s.Step==t)}),advance:async()=>{let e=se(ie.pipeline);this.promptAdvanceModal&&this.promptAdvanceModal.hide(),await this.resumeRequest();let t=this.Pipeline.getNextStage();if(t.ActionType==xe.Closed)return console.log("Closing Request"),this.closeAndFinalize(I.fulfilled),Z(e),null;let s=this.Pipeline.Stage();this.Pipeline.PreviousStage(s),this.Pipeline.Stage(t),await this._context.Requests.UpdateEntity(this,["PipelineStage","PipelineStagePrev"]),this.ActivityQueue.push({activity:B.Advanced,data:t}),await this.Assignments.createStageAssignments(t),t.ActionType==xe.Notification&&this.Pipeline.advance(),t.ActionType==xe.Closed&&this.closeAndFinalize(I.fulfilled),Z(e)}};Attachments={AreLoading:ko.observable(),list:{All:ko.observableArray(),Active:ko.pureComputed(()=>this.Attachments.list.All().filter(e=>e.IsActive))},Validation:{Errors:ko.pureComputed(()=>{let e=[],t=this.RequestType?.AttachmentsRequiredCnt??0;return t<0&&(t=1),this.Attachments.list.Active().length<t&&e.push(new Te("attachment-count-mismatch","request-header",`This request has ${this.RequestType.attachmentsRequiredCntString()} required attachment(s)!`)),e})},userCanAttach:ko.pureComputed(()=>this.Authorization.currentUserCanSupplement()),createFolder:async()=>{let e=se(ie.newAttachment),t=this.getRelativeFolderPath(),s=this.getFolderPermissions();try{await this._context.Attachments.UpsertFolderPath(t),await this._context.Attachments.SetFolderPermissions(t,s),this.Attachments.refresh()}catch(o){console.error("Error creating folder: ",o),t=null}finally{Z(e)}return t},newAttachmentFiles:ko.observableArray(),removeFile:e=>{this.Attachments.newAttachmentFiles.remove(e)},addNew:async()=>{let e=await this.Attachments.createFolder();e||alert("Unable to create folder"),await Promise.all(this.Attachments.newAttachmentFiles().map(async t=>{let s=se(ie.uploadAttachment(t.name)),o=t.name.split(".").slice(0,-1).join(".")??t.name;await this._context.Attachments.UploadFileToFolderAndUpdateMetadata(t,t.name,e,{Title:o,RequestId:this.ID,IsActive:!0},({currentBlock:a,totalBlocks:r})=>{s.updateProgress({percentDone:a/r})}),Z(s)})),this.Attachments.newAttachmentFiles([]),this.Attachments.refresh()},refresh:async()=>{if(!this.Title)return;let e=se(ie.refreshAttachments);this.Attachments.AreLoading(!0);try{let t=await this._context.Attachments.GetItemsByFolderPath(this.getRelativeFolderPath(),_e.Views.All);this.Attachments.list.All(t)}catch(t){console.warn("Looks like there are no attachments",t)}this.Attachments.AreLoading(!1),Z(e)},view:e=>{this._context.Attachments.ShowForm("DispForm.aspx","View "+e.Title,{id:e.ID})},userCanRemove:e=>ko.pureComputed(()=>!!this.Authorization.currentUserCanSupplement()),remove:async e=>{console.log("removing",e),e.IsActive=!1,await this._context.Attachments.UpdateEntity(e,["IsActive"]),this.Attachments.refresh()}};Comments={AreLoading:ko.observable(),list:{All:ko.observableArray(),Active:ko.pureComputed(()=>this.Comments.list.All().filter(e=>e.IsActive))},userCanComment:ko.pureComputed(()=>this.Authorization.currentUserCanSupplement()),addNew:async e=>{let t=se(ie.newComment),s=this.getRelativeFolderPath(),o=this.getFolderPermissions();try{let a=await this._context.Comments.UpsertFolderPath(s);await this._context.Comments.SetFolderPermissions(s,o),await this._context.Comments.AddEntity(e,s),this.Comments.refresh()}catch{console.error("Error creating folder: ")}finally{Z(t)}},update:async e=>{},refresh:async()=>{let e=se(ie.refreshComments);this.Comments.AreLoading(!0);let t=this.getRelativeFolderPath(),s=await this._context.Comments.GetItemsByFolderPath(t,Ye.Views.All);this.Comments.list.All(s),this.Comments.AreLoading(!1),Z(e)},sendNotification:async e=>{let t=se(ie.newComment);await so(e,this),e.NotificationSent=!0,await this._context.Comments.UpdateEntity(e,["NotificationSent"]),this.Comments.refresh(),Z(t)},remove:async e=>{let t=se(ie.removeComment);e.IsActive=!1,await this._context.Comments.UpdateEntity(e,["IsActive"]),this.Comments.refresh(),Z(t)}};Assignments={HaveLoaded:ko.observable(!1),AreLoading:ko.observable(),list:{All:ko.observableArray(),InProgress:ko.pureComputed(()=>this.Assignments.list.All().filter(e=>e.Status==O.InProgress)),Dashboard:ko.pureComputed(()=>this.Assignments.list.All()),CurrentUserAssignments:ko.pureComputed(()=>{if(!this.Assignments.list.All().length)return[];let e=F().getGroupIds(),t=F().ActionOffices().map(o=>o.ID);return this.Assignments.list.All().filter(o=>o.Assignee?.ID==F()?.ID||e.includes(o.Assignee?.ID)||t.includes(o.RequestOrg?.ID))})},getFolderUrl:()=>this._context.Assignments.GetFolderUrl(this.getRelativeFolderPath()),CurrentStage:{list:{ActionAssignments:ko.pureComputed(()=>this.Assignments.list.All().filter(e=>e.PipelineStage?.ID==this.Pipeline.Stage()?.ID&&e.isActionable())),InProgress:ko.pureComputed(()=>this.Assignments.list.InProgress().filter(e=>e.PipelineStage?.ID==this.Pipeline.Stage()?.ID)),UserActionAssignments:ko.pureComputed(()=>this.Assignments.list.CurrentUserAssignments().filter(e=>e.PipelineStage?.ID==this.Pipeline.Stage()?.ID&&e.isActionable()))},Validation:{IsValid:ko.pureComputed(()=>!this.Assignments.CurrentStage.Validation.ActiveAssignmentsError()&&!this.Assignments.CurrentStage.Validation.Errors().length),Errors:ko.observableArray(),ActiveAssignmentsError:ko.pureComputed(()=>this.Assignments.CurrentStage.list.UserActionAssignments().find(t=>t.Status==O.InProgress)?(this.Assignments.CurrentStage.Validation.Errors.indexOf(Rt)<0&&this.Assignments.CurrentStage.Validation.Errors.push(Rt),!0):(this.Assignments.CurrentStage.Validation.Errors.remove(Rt),!1))},UserCanAdvance:ko.pureComputed(()=>this.Assignments.CurrentStage.list.UserActionAssignments().length),AssignmentComponents:ko.pureComputed(()=>this.Assignments.CurrentStage.list.UserActionAssignments().map(e=>({request:this,assignment:e,addAssignment:this.Assignments.addNew,completeAssignment:this.Assignments.complete,errors:this.Assignments.CurrentStage.Validation.Errors,actionComponentName:e.getComponentName()})))},refresh:async()=>{this.Assignments.AreLoading(!0);let e=await this._context.Assignments.GetItemsByFolderPath(this.getRelativeFolderPath(),pe.Views.All);e.map(t=>t.RequestOrg=ae.FindInStore(t.RequestOrg)??t.RequestOrg),this.Assignments.list.All(e),this.Assignments.HaveLoaded(!0),this.Assignments.AreLoading(!1)},userCanAssign:ko.pureComputed(()=>{if(!this.State.IsActive())return!1;let e=this.Pipeline.Stage()?.RequestOrg;return e?!!F().isInRequestOrg(e):!1}),addNew:async(e=null)=>{if(!this.ID||!e)return;e.Title=this.Title,e.RequestOrg||(e.RequestOrg=this.Pipeline.Stage()?.RequestOrg),e.PipelineStage||(e.PipelineStage=this.Pipeline.Stage()),e.CustomComponent=e.PipelineStage.ActionComponentName,e.Status=e.Role.initialStatus;let t=this.getRelativeFolderPath();await this._context.Assignments.AddEntity(e,t,this),await this.Assignments.refresh(),this.RequestOrgs().find(s=>s.ID==e.RequestOrg.ID)||(this.RequestOrgs.push(e.RequestOrg),await this._context.Requests.UpdateEntity(this,["RequestOrgs"])),this.ActivityQueue.push({activity:B.Assigned,data:e}),e.Role?.permissions&&this.Authorization.ensureAccess([[e.Assignee,e.Role.permissions]])},view:e=>{this._context.Assignments.ShowForm("DispForm.aspx","View "+e.Assignee.Title,{id:e.ID})},remove:async e=>{if(confirm("Are you sure you want to remove this assignment?")){try{await this._context.Assignments.RemoveEntity(e)}catch(t){console.error("Unable to remove assignment",t);return}this.Assignments.refresh(),this.ActivityQueue.push({activity:B.Unassigned,data:e})}},notify:async e=>{this.ActivityQueue.push({activity:B.Assigned,data:e})},complete:async(e,t,s=!0)=>{let o={ID:e.ID,Status:O[t],Comment:e.Comment,CompletionDate:new Date().toISOString(),ActionTaker:F()};await this._context.Assignments.UpdateEntity(o),await this.resumeRequest(),this.ActivityQueue.push({activity:B[t],data:o}),s&&this.Assignments.refresh()},createStageAssignments:async(e=this.Pipeline.Stage())=>{if(!e?.ActionType||e.ActionType==B.Closed||this.Assignments.list.All().find(s=>s.PipelineStage?.ID==e.ID))return;if(e.AssignmentFunction&&Je[e.AssignmentFunction]){try{let s=Je[e.AssignmentFunction](this,e);await Promise.all(s.map(o=>this.Assignments.addNew(o)))}catch(s){console.warn("Error creating stage assignments",e),alert(s.message);return}return}if(e.WildCardAssignee){try{let s=Je.getWildcard(this,e,e.WildCardAssignee);await Promise.all(s.map(o=>this.Assignments.addNew(o)))}catch(s){console.warn("Error creating stage assignments",e),alert(s.message);return}return}let t=new pe({Assignee:e.Assignee??ae.FindInStore(e.RequestOrg)?.UserGroup,RequestOrg:e.RequestOrg,PipelineStage:e,IsActive:!0,Role:xt[e.ActionType],CustomComponent:e.ActionComponentName});await this.Assignments.addNew(t)}};Actions={AreLoading:ko.observable(),list:{All:ko.observableArray()},refresh:async()=>{let e=se(ie.refreshActions);if(!this.ID)return;this.Actions.AreLoading(!0);let t=await this._context.Actions.GetItemsByFolderPath(this.getRelativeFolderPath(),Xe.Views.All);this.Actions.list.All(t),this.Actions.AreLoading(!1),Z(e)},addNew:async e=>{if(!this.ID||!e)return;let t=se(ie.newAction),s=this.getRelativeFolderPath();e.PipelineStage=e.PipelineStage??this.Pipeline.Stage(),await this._context.Actions.AddEntity(e,s,this.request),this.Actions.refresh(),Z(t)},showDialog:()=>{document.getElementById("dialog-action-log").showModal()},closeDialog:()=>{document.getElementById("dialog-action-log").close()}};ActivityQueue=ko.observableArray();ActivityLogger=new Dt(this.Actions,this.ActivityQueue);IsLoading=ko.observable();LoadedAt=ko.observable();activityQueueWatcher=e=>{e.filter(s=>s.status=="added").map(s=>s.value).map(async s=>{switch(oo(this,s),s.activity){case B.Assigned:case B.Unassigned:break;case B.Rejected:console.warn("Closing request"),await this.closeAndFinalize(I.rejected);break;case B.Advanced:break}})};Validation={validate:()=>(this.Validation.WasValidated(!0),this.Validation.validateHeader(),this.Validation.validateBody(),this.Validation.IsValid()),validateHeader:()=>{this.FieldMap.RequestDescription.validate()},validateBody:()=>this.RequestBodyBlob?.Value()?.validate(),reset:()=>this.Validation.WasValidated(!1),Errors:{Request:ko.pureComputed(()=>{let e=[];return e=e.concat(this.Attachments.Validation.Errors()),e=e.concat(this.FieldMap.RequestDescription.Errors()),e}),ServiceType:ko.pureComputed(()=>this.RequestBodyBlob?.Value()?.Errors()??[]),All:ko.pureComputed(()=>[...this.Validation.Errors.Request(),...this.Validation.Errors.ServiceType(),...this.Validation.CurrentStage.Errors()])},IsValid:ko.pureComputed(()=>!this.Validation.Errors.All().length),WasValidated:ko.observable(!1),CurrentStage:{IsValid:()=>this.Assignments.CurrentStage.Validation.IsValid(),Errors:ko.pureComputed(()=>this.Assignments.CurrentStage.Validation.Errors())}};Authorization={currentUserIsActionOffice:ko.pureComputed(()=>this.Assignments.list.CurrentUserAssignments().find(e=>[Ve.ActionResolver,Ve.Approver].includes(e.ActionType))),currentUserCanAdvance:ko.pureComputed(()=>this.State.IsActive()&&this.Assignments.CurrentStage.list.UserActionAssignments().length),currentUserCanSupplement:ko.pureComputed(()=>{if(this.DisplayMode()==be.New)return!0;let e=F();if(!e)return console.warn("Current user not set!"),!1;if(!this.State.IsActive())return!1;if(this.Assignments.list.CurrentUserAssignments().length||this.RequestorInfo.Requestor()?.ID==e.ID)return!0}),currentUserCanClose:ko.pureComputed(()=>this.State.IsActive()&&this.Assignments.list.CurrentUserAssignments().find(e=>e.isActionable())),ensureAccess:async e=>{let t=this.getRelativeFolderPath(),s=this.getAllListRefs();await Promise.all(s.map(async o=>{await o.EnsureFolderPermissions(t,e)}))},setReadonly:async()=>{let e=this.getRelativeFolderPath(),t=this.getAllListRefs();await Promise.all(t.map(async s=>{await s.SetFolderReadOnly(e)}))}};getAppLink=()=>`${Xs}?reqId=${this.Title}&tab=${Ee.RequestDetail}`;getAppLinkElement=()=>`<a href="${this.getAppLink()}" target="blank">${this.Title}</a>`;getRelativeFolderPath=ko.pureComputed(()=>this.State.Status()==I.draft?this.getRelativeFolderPathStaging():`${this.RequestorInfo.Office()?.Title.replace("/","_")}/${this.ObservableTitle()}`);getRelativeFolderPathStaging=()=>`Staged/${this.ObservableTitle()}`;getFolderUrl=ko.pureComputed(()=>this._context.Requests.GetFolderUrl(this.getRelativeFolderPath()));getFolderPermissions=()=>Ms(this);calculateEffectiveSubmissionDate=()=>{let e=this.Dates.Submitted.get()??new Date;if(e.getUTCHours()>=19||e.getUTCHours()<4){console.log("its after 3, this is submitted tomorrow");let t=Pt(e,1);return t.setUTCHours(13),t.setUTCMinutes(0),t}else return e};refreshAll=async()=>{let e=se(ie.refresh);this.IsLoading(!0),await this.refreshRequest();let t=[this.Attachments.refresh(),this.Actions.refresh(),this.Comments.refresh(),this.Assignments.refresh()];await Promise.all(t),this.LoadedAt(new Date),this.IsLoading(!1),Z(e)};refreshRequest=async()=>{this.ID&&await this._context.Requests.LoadEntity(this)};getAllListRefs(){return this.getInitialListRefs().concat([this._context.Comments,this._context.Attachments])}getInitialListRefs(){return[this._context.Requests,this._context.Actions,this._context.Assignments,this._context.Notifications]}pauseRequest=async(e="Not Provided")=>{this.State.InternalStatus(e),await this._context.Requests.UpdateEntity(this,["InternalStatus"]),this.ActivityQueue.push({activity:B.Paused,data:e})};resumeRequest=async()=>{this.State.IsPaused()&&(this.State.InternalStatus(Ue.inProgress),await this._context.Requests.UpdateEntity(this,["InternalStatus"]),this.ActivityQueue.push({activity:B.Resumed,data:this}))};closeAndFinalize=async e=>{let t=se(ie.closing);this.Assignments.list.InProgress().map(a=>{this.Assignments.complete(a,O.Cancelled,!1)});let s=Fe.GetCompletedStage(),o=this.Pipeline.Stage();this.Pipeline.PreviousStage(o),this.Pipeline.Stage(s),this.State.Status(e),this.State.InternalStatus(e),this.State.IsActive(!1),this.Dates.Closed.set(new Date),await this._context.Requests.UpdateEntity(this,["PipelineStage","PipelineStagePrev","RequestStatus","InternalStatus","IsActive","ClosedDate"]),this.ActivityQueue.push({activity:B.Closed,data:this}),await this.Authorization.setReadonly(),this.refreshAll(),Z(t)};FieldMap={ID:this.ObservableID,Title:this.ObservableTitle,RequestSubject:this.RequestSubject,RequestDescription:this.RequestDescription,Author:this.Author,Requestor:{set:e=>this.RequestorInfo.Requestor(W.Create(e)),get:this.RequestorInfo.Requestor},RequestorPhone:this.RequestorInfo.Phone,RequestorEmail:this.RequestorInfo.Email,RequestorOfficeSymbol:this.RequestorInfo.OfficeSymbol,RequestingOffice:{set:e=>this.RequestorInfo.Office(ae.Create(e)),get:this.RequestorInfo.Office},IsActive:this.State.IsActive,PipelineStage:{factory:Fe.FindInStore,obs:this.Pipeline.Stage},PipelineStagePrev:{factory:Fe.FindInStore,obs:this.Pipeline.PreviousStage},RequestStatus:this.State.Status,InternalStatus:this.State.InternalStatus,RequestSubmitted:this.Dates.Submitted,EstClosedDate:this.Dates.EstClosed,ClosedDate:this.Dates.Closed,RequestOrgs:{set:e=>this.RequestOrgs((e.results??e).map(t=>ae.Create(t))),get:this.RequestOrgs},ServiceType:{set:e=>{let t=Me.FindInStore(e);this.RequestType=t},get:()=>this.RequestType},RequestBodyBlob:{get:()=>this.RequestBodyBlob?.get(),set:e=>{if(!this.RequestBodyBlob)return;this.RequestBodyBlob.set(e);let t=this.RequestBodyBlob.Value();t?.setRequestContext&&t.setRequestContext(this)}}};static CreateByServiceType({ServiceType:e}){let t=new i({ServiceType:e});return t.Author.set(F()),t}static Views={All:["ID","Title","RequestDescription","Requestor","RequestorPhone","RequestorEmail","RequestorOfficeSymbol","RequestingOffice","IsActive","PipelineStage","PipelineStagePrev","RequestStatus","InternalStatus","RequestSubmitted","EstClosedDate","ClosedDate","RequestOrgs","ServiceType","RequestBodyBlob","Author"],ByStatus:["ID","Title","ServiceType","RequestorOfficeSymbol","RequestingOffice","RequestOrgs","Requestor","RequestSubmitted","PipelineStage","EstClosedDate","ClosedDate","RequestStatus","InternalStatus","RequestOrgs"],ByServiceType:["ID","Title","ServiceType","RequestorOfficeSymbol","RequestingOffice","Requestor","RequestStatus","RequestBodyBlob"]};static ListDef={name:"Requests",title:"Requests",fields:i.Views.All}};var St={};ks(St,{Access:()=>ni,AccessFletc:()=>di,BaseServiceDetail:()=>y,CH_Access:()=>ri,CH_Conference:()=>ci,CH_Equip_Repair:()=>pi,CH_Furniture:()=>mi,CH_HR_Training:()=>hi,CH_Mobile:()=>fi,CH_Notice:()=>gi,CH_Overtime:()=>wt,CH_Reconfig:()=>bi,CH_Supplies:()=>yi,CH_Telework:()=>vi,CH_Transport:()=>wi,CH_Voicemail:()=>Si,CashMgmtRequest:()=>Ci,CashierOperationsRequest:()=>Ri,CollectionsRequest:()=>xi,ContractorSupplement:()=>Le,DVCSetup:()=>Ai,DiplomaticPassportVisa:()=>Wi,FPCodesRequest:()=>Ti,FPTravelRequest:()=>ki,FiscalIrregularities:()=>Ki,ITHardware:()=>qi,ITSoftware:()=>Xi,Ironkey:()=>Fi,Locksmith:()=>Ii,Mobile:()=>Di,MotorPool:()=>Pi,Overtime:()=>Ni,Presentation:()=>Oi,PropertySpace:()=>es,Requisition:()=>Li,SDMAdminRequest:()=>Mi,Telework:()=>_i,TemplateRequest:()=>os,TierIRequest:()=>Bi,getApmOrg:()=>Ut,getCorOrg:()=>Ui,getGtmOrg:()=>Gt});var y=class extends we{constructor(e){super(e),e?.Request&&(this.Request=e.Request)}Request;FieldMap={...this.FieldMap,Request:this.Request}};var ni=class i extends y{constructor(e){super(e)}accessTypeOpts=["Normal work day","24/7","FLETC","Other"];employeeTypeOpts=["CGFS Government","CGFS Contractor","Other"];AccessType=new h({isRequired:!0,displayName:"Access Type",options:this.accessTypeOpts});EmployeeType=new h({isRequired:!0,displayName:"Employee Type",options:this.employeeTypeOpts});FullName=new d({displayName:"Full Name",isRequired:!0});BadgeNum=new d({displayName:"Badge Num",isRequired:!0});ExpirationDate=new D({displayName:"Expiration Date",isRequired:!0});Locations=new d({displayName:"Locations",isRequired:!0});FieldMap={...this.FieldMap,AccessType:this.AccessType,EmployeeType:this.EmployeeType,FullName:this.FullName,BadgeNum:this.BadgeNum,ExpirationDate:this.ExpirationDate,Locations:this.Locations};static Views={All:["ID","Title","AccessType","EmployeeType","FullName","BadgeNum","ExpirationDate","Locations","Request"]};static ListDef={name:"st_access",title:"st_access",isServiceType:!0,fields:i.Views.All};static uid="access"};var ri=class i extends y{constructor(e){super(e)}accessTypeOpts=["Normal work day","24/7","Permanant","Temporary"];employeeTypeOpts=["CGFS Government","CGFS Contractor","Other"];AccessDates=new Oe({displayName:"Access Dates",entityType:li,multiple:!0,width:12,isRequired:!0});AccessType=new h({isRequired:!0,displayName:"Access Type",options:this.accessTypeOpts});BadgeNum=new d({displayName:"Badge Num",isRequired:!0});EmployeeType=new h({isRequired:!0,displayName:"Employee Type",options:this.employeeTypeOpts});Supervisor=new k({displayName:"Supervisor",isRequired:!0});FieldMap={...this.FieldMap,AccessDates:this.AccessDates,AccessType:this.AccessType,BadgeNum:this.BadgeNum,EmployeeType:this.EmployeeType,FullName:this.FullName,Locations:this.Locations,Supervisor:this.Supervisor};static Views={All:["ID","Title","AccessType","AccessDates","BadgeNum","EmployeeType","FullName","Locations","Supervisor","Request"]};static ListDef={name:"st_ch_access",title:"st_ch_access",isServiceType:!0,fields:i.Views.All};static uid="ch_access"},li=class extends we{FieldMap={StartDate:new D({displayName:"Start Date",type:M.date,isRequired:!0}),EndDate:new D({displayName:"End Date",type:M.date,isRequired:!0})}};var Xa=R`
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
`,Vt=class extends He{constructor(e){super(e),this.request=e.request,this.serviceType=e.request.RequestBodyBlob?.Value()}linkGenerateEmail=ko.pureComputed(()=>{let e="New FLETC Access Request",t="backlundpf@state.gov",s="",o=`A new access request has been submitted:
Full Name: 	${this.serviceType.FieldMap.FullName.toString()}Employee Type: 	${this.serviceType.FieldMap.EmployeeType.toString()}`;return`https://outlook.office.com/mail/deeplink/compose?to=${t}&cc=${s}&subject=${e}&body=${o}`});static name="generate-access-control-email";static template=Xa};J(Vt);var di=class i extends y{constructor(e){super(e)}FieldMap={...this.FieldMap,Supervisor:new k({displayName:"Supervisor",isRequired:!0}),EmployeeType:new h({displayName:"Employee Type",options:["Direct Hire","Contractor","Visitor"],isRequired:!0}),FullName:new d({displayName:"Full Name",isRequired:!0})};static Views={All:["ID","Title","Supervisor","EmployeeType","FullName"]};static ListDef={name:"st_ch_access_fletc",title:"st_ch_access_fletc",fields:i.Views.All};static uid="ch_accessFletc"};var ci=class extends y{constructor(e){super(e)}FieldMap={...this.FieldMap,ConferenceDates:new Oe({displayName:"Conference Dates",entityType:ui,multiple:!0,width:12,isRequired:!0}),AVNeeds:new z({displayName:"A/V Needs",isRequired:!0}),ConferenceRoom:new h({displayName:"Conference Room",options:["Bldg. F Auditorium (Side A & B)","Bldg. F Auditorium (Side A Only)","Bldg. F Auditorium (Side B Only)","Bldg. F Dining Rooms"],isRequired:!0})};static uid="ch_conference"},ui=class extends we{FieldMap={StartDate:new D({displayName:"Start Date",type:M.datetime,isRequired:!0}),EndDate:new D({displayName:"End Date",type:M.datetime,isRequired:!0})}};var pi=class i extends y{constructor(e){super(e)}FieldMap={...this.FieldMap,Location:new d({displayName:"Location",isRequired:!0}),RepairType:new h({isRequired:!0,displayName:"Type",options:["Copier","Fax Machine","Appliance","Furniture","Other"]})};static Views={All:["ID","Title","Location","RepairType"]};static ListDef={name:"st_ch_equip_repair",title:"st_ch_equip_repair",fields:i.Views.All};static uid="ch_equip_repair"};var mi=class i extends y{constructor(e){super(e)}FieldMap={...this.FieldMap,Location:new d({isRequired:!0,displayName:"Location"}),FurnitureType:new h({isRequired:!0,displayName:"Type",options:["Desk Adjustment","Chair Adjustment","Filing Cabinet","Other"]}),Supervisor:new k({displayName:"Supervisor",isRequired:!0})};static Views={All:["ID","Title","Location","FurnitureType","Supervisor"]};static ListDef={name:"st_ch_furniture",title:"st_ch_furniture",fields:i.Views.All};static uid="ch_furniture"};var hi=class i extends y{constructor(e){super(e)}FieldMap={...this.FieldMap,EmployeeType:new h({displayName:"Employee Type",options:["Direct Hire","Contractor"],isRequired:!0}),CourseTitle:new d({displayName:"Course Title",isRequired:!0}),CourseNumber:new d({displayName:"Course Number"}),Vendor:new d({displayName:"Training Provider/Vendor",isRequired:!0}),Date1:new D({displayName:"Course Date",isRequired:!0}),Cost:new d({displayName:"Training Cost"}),HiringManager:new k({displayName:"Hiring Manager",isRequired:!0})};static Views={All:["ID","Title","EmployeeType","CourseTitle","CourseNumber","Vendor","Date1","Cost","HiringManager"]};static ListDef={name:"st_ch_hr_training",title:"st_ch_hr_training",fields:i.Views.All};static uid="ch_hr_training"};var fi=class i extends y{constructor(e){super(e)}FieldMap={...this.FieldMap,Supervisor:new k({displayName:"Supervisor",isRequired:!0}),PhoneNum:new d({displayName:"Phone Number"}),ServiceType:new h({displayName:"Service Type",options:["New Temporary (include dates in Justification)","Replacement/Upgrade","Return/Deactivation","Other"],isRequired:!0}),Serial:new d({displayName:"Serial Number"}),Carrier:new d({displayName:"Carrier",isRequired:!1})};static Views={All:["ID","Title","Supervisor","PhoneNum","ServiceType","Serial","Carrier"]};static ListDef={name:"st_ch_mobile",title:"st_ch_mobile",fields:i.Views.All};static uid="ch_mobile"};var gi=class i extends y{constructor(e){super(e)}FieldMap={...this.FieldMap,DistributionGroup:new h({displayName:"Distribution Group",options:["All CGFS CHS [Direct hires/contractors]","All CHS Bureaus + Passport Center [Direct hires/contractors]","GS 15 managing director distro list","Supervisors CHS"],isRequired:!0}),NoticeDates:new z({displayName:"Notification Dates",instructions:"*Please also include reminder dates.",isRequired:!0})};static Views={All:["ID","Title","DistributionGroup","NoticeDates"]};static ListDef={name:"st_ch_notice",title:"st_ch_notice",fields:i.Views.All};static uid="ch_notice"};var bi=class i extends y{constructor(e){super(e)}FieldMap={...this.FieldMap,ReconfigType:new h({displayName:"Service Type",options:["Office Furniture","Construction","Electrical Cabling","Other"],isRequired:!0}),Location:new d({displayName:"Location",isRequired:!0}),Supervisor:new k({displayName:"Supervisor",isRequired:!0})};static Views={All:["ID","Title","Location","ReconfigType","Supervisor"]};static ListDef={name:"st_ch_reconfig",title:"st_ch_reconfig",fields:i.Views.All};static uid="ch_reconfig"};var yi=class i extends y{constructor(e){super(e)}FieldMap={...this.FieldMap,Vendor:new d({displayName:"Supplies Requested",isRequired:!0}),ItemNum:new d({displayName:"Item/Product Num"}),Quantity:new d({displayName:"Quantity",isRequired:!0})};static Views={All:["ID","Title","Vendor","ItemNum","Quantity"]};static ListDef={name:"st_ch_supplies",title:"st_ch_supplies",fields:i.Views.All};static uid="ch_supplies"};var vi=class i extends y{constructor(e){super(e)}departmentOptions=requestOrgStore().filter(e=>e.OrgType==OrgTypes.Department).map(e=>e.Title);FieldMap={...this.FieldMap,FullName:new k({displayName:"Contractor",isRequired:!0}),ManagerDept:new k({displayName:"Dept Manager"}),ManagerTask:new k({displayName:"Task Manager",isRequired:!0}),Department:new h({displayName:"Department",options:this.departmentOptions,isRequired:!0}),RequisitionOrder:new d({displayName:"Requisition Number/Task Order",isRequired:!0}),LaborCategory:new d({displayName:"Labor Category (LCAT)",isRequired:!0}),ContractorType:new h({displayName:"Contractor Type",options:["SCA","Non-SCA"],isRequired:!0}),TeleworkType:new h({displayName:"Telework Type",options:["Core","Situational"],isRequired:!0}),MaxEligibility:new h({displayName:"Max Eligibility",options:["80%","60%","40%","20%","None"],isRequired:!0})};static Views={All:["ID","Title","FullName","ManagerDept","ManagerTask","Department","RequisitionOrder","LaborCategory","ContractorType","TeleworkType","MaxEligibility"]};static ListDef={name:"st_ch_telework",title:"st_ch_telework",fields:i.Views.All};static uid="ch_telework"};var wi=class i extends y{constructor(e){super(e)}FieldMap={...this.FieldMap,InvoiceNum:new d({displayName:"Invoice Num",isRequired:!0}),InvoiceAmount:new d({displayName:"Invoice Amount",isRequired:!0}),InvoiceDate:new D({displayName:"Invoice Date",isRequired:!0}),InvoiceReceivedDate:new D({displayName:"Invoice Received Date",isRequired:!0}),Vendor:new d({displayName:"Vendor",isRequired:!0})};static Views={All:["ID","Title","InvoiceNum","InvoiceAmount","InvoiceDate","InvoiceReceivedDate","Vendor"]};static ListDef={name:"st_ch_transport",title:"st_ch_transport",fields:i.Views.All};static uid="ch_transport"};var Si=class i extends y{constructor(e){super(e)}FieldMap={...this.FieldMap,Employee:new k({displayName:"Employee Name",isRequired:!0}),Phone:new d({displayName:"Phone Number",isRequired:!0}),Location:new d({displayName:"Location"})};static Views={All:["ID","Title","Employee","Phone","Location"]};static ListDef={name:"st_ch_voicemail",title:"st_ch_voicemail",fields:i.Views.All};static uid="ch_voicemail"};var Le=class i extends y{constructor(e){super(e),window.DEBUG&&console.log("new contractor supplement",e)}ContractorTypeOptsArr=["SCA","Non-SCA"];TaskOrderNumber=new d({displayName:"Task Order Number",isRequired:!0});RequisitionNumber=new d({displayName:"Requisition Number",isRequired:!0});LaborCategory=new d({displayName:"Labor Category",isRequired:!0});ContractorType=new h({displayName:"Contractor Type",options:["SCA","Non-SCA"],isRequired:!0});Contractor=new k({displayName:"Contractor",isRequired:!0,Visible:ko.observable(!1)});FieldMap={...this.FieldMap,TaskOrderNumber:this.TaskOrderNumber,RequisitionNumber:this.RequisitionNumber,LaborCategory:this.LaborCategory,ContractorType:this.ContractorType,Contractor:this.Contractor};static Views={All:["ID","Title","TaskOrderNumber","LaborCategory","RequisitionNumber","ContractorType","Request","Contractor"],APMUpdate:["TaskOrderNumber","LaborCategory","ContractorType","RequisitionNumber"]};static ListDef={name:"st_ch_overtime_supplement",title:"st_ch_overtime_supplement",fields:i.Views.All};static uid="contractor_supplement"};var Ai=class i extends y{constructor(e){super(e)}FieldMap={...this.FieldMap,DateOfDVC:new D({displayName:"Date of DVC",isRequired:!0}),Location:new d({displayName:"Location",isRequired:!0}),Duration:new d({displayName:"Duration",isRequired:!0}),FarEndPOC:new d({displayName:"Far End POC",isRequired:!0}),ConnectionType:new h({displayName:"Connection Type",options:["OpenNet","ISDN","IP"],isRequired:!0}),CallType:new h({displayName:"Call Type",options:["Incoming","Outgoing"],isRequired:!0}),DVCDialInNum:new d({displayName:"DVC Dial-in Number",isRequired:!0})};static Views={All:["ID","Title","DateOfDVC","Location","Duration","FarEndPOC","ConnectionType","CallType","DVCDialInNum"]};static ListDef={name:"st_dvc_setup",title:"st_dvc_setup",fields:i.Views.All};static uid="dvc_setup"};var Ci=class i extends y{constructor(e){super(e)}FieldMap={...this.FieldMap,Subcategory:new h({displayName:"Subcategory",options:["Accommodation Exchange","Annual Cash Waivers","Debt Collection","Fiscal Irregularities","One-Time Cash Waivers","Proceeds of Sale","Suspense Deposits Abroad"],isRequired:!0})};static Views={All:["ID","Title","Subcategory"]};static ListDef={name:"st_fp_cash_mgmt",title:"st_fp_cash_mgmt",fields:i.Views.All};static uid="fp_cash_mgmt"};var Ri=class i extends y{constructor(e){super(e)}Subcategory=new h({displayName:"Subcategory",options:["Annual Cash Waivers","Class B Cashiering","Occasional Money Holders","One-Time Cash Waivers","United States Treasury Checks"],isRequired:!0});MRN=new d({displayName:"MRN"});FieldMap={...this.FieldMap,Subcategory:this.Subcategory,MRN:this.MRN};fromEmail=e=>Ya(this,e);static Views={All:["ID","Title","Subcategory"]};static ListDef={name:"st_fp_cash_mgmt",title:"st_fp_cash_mgmt",fields:i.Views.All};static uid="fp_cashier_operations"};function Ya(i,e){i.FieldMap.Subcategory.set("Annual Cash Waivers");let t=document.createElement("div");t.innerHTML=e;let s=t.querySelectorAll("tr");for(let o of s){if(!o.innerText?.includes("MRN:"))continue;console.log(o);let r=o.querySelector("td:nth-child(2) a").innerText;i.FieldMap.MRN.set(r)}}var Ti=class i extends y{constructor(e){super(e)}FieldMap={...this.FieldMap,Subcategory:new h({displayName:"Subcategory",options:["Allotment and Allowance Codes","Domestic Organization Structure and Codes","Function Classification Codes","Fund Symbols","Object Classification Codes","Overseas Organization Classification Codes","Revenue Source Codes"],isRequired:!0})};static Views={All:["ID","Title","Subcategory"]};static ListDef={name:"st_fp_codes",title:"st_fp_codes",fields:i.Views.All};static uid="fp_codes"};var xi=class i extends y{constructor(e){super(e)}FieldMap={...this.FieldMap,Subcategory:new h({displayName:"Subcategory",options:["Debt Collection","Proceeds of Sale","Suspense Deposits Abroad (SDA)"],isRequired:!0})};static Views={All:["ID","Title","Subcategory"]};static ListDef={name:"st_fp_collections",title:"st_fp_collections",fields:i.Views.All};static uid="fp_collections"};var ki=class i extends y{constructor(e){super(e)}FieldMap={...this.FieldMap,Subcategory:new h({displayName:"Subcategory",options:["Advances","Claims","Gifts of Travel","Mileage Rates (general topic)","Travel Card Program"],isRequired:!0})};static Views={All:["ID","Title","Subcategory"]};static ListDef={name:"st_fp_travel",title:"st_fp_travel",fields:i.Views.All};static uid="fp_travel"};var qi=class i extends y{constructor(e){super(e)}FieldMap={...this.FieldMap,Name:new d({displayName:"Hardware Name",isRequired:!0}),Quantity:new d({displayName:"Quantity",isRequired:!0}),POCName:new d({displayName:"POC",isRequired:!0}),Cost:new d({displayName:"Cost",isRequired:!0}),RequestType:new h({displayName:"Request Type",options:["New","Maintenance Renewal"],isRequired:!0}),PurchaseFrequency:new h({displayName:"Purchase Frequency",options:["One Time","Recurring"],isRequired:!0}),ApprovedPurchase:new h({displayName:"Approved Purchase",options:["Yes","No"],isRequired:!0}),FundingSource:new h({displayName:"Funding Source",options:["Project","Contract","Other"],isRequired:!0})};static Views={All:["ID","Title","Name","Quantity","POCName","Cost","RequestType","PurchaseFrequency","ApprovedPurchase","FundingSource"]};static ListDef={name:"st_IT_hardware",title:"st_IT_hardware",fields:i.Views.All};static uid="it_hardware"};var Fi=class i extends y{constructor(e){super(e)}FieldMap={...this.FieldMap,UserName:new k({displayName:"User Name",isRequired:!0}),EmployeeType:new h({displayName:"Employee Type",options:["Direct Hire","Contractor"],isRequired:!0}),RequestType:new h({displayName:"Request Type",options:["New","Replacement"],isRequired:!0}),Supervisor:new k({displayName:"COR/Supervisor",isRequired:!0})};static Views={All:["ID","Title","UserName","EmployeeType","RequestType","Supervisor"]};static ListDef={name:"st_ironkey",title:"st_ironkey",fields:i.Views.All};static uid="ironkey"};var Ii=class i extends y{constructor(e){super(e)}FieldMap={...this.FieldMap,Location:new d({displayName:"Location",isRequired:!0}),LockType:new d({displayName:"Lock Type",isRequired:!0})};static Views={All:["ID","Title"]};static ListDef={name:"st_locksmith",title:"st_locksmith",fields:i.Views.All};static uid="locksmith"};var Di=class i extends y{constructor(e){super(e)}FieldMap={...this.FieldMap,User:new k({displayName:"User Name",isRequired:!0}),EmployeeType:new h({displayName:"Employee Type",options:["FTE","Contractor"],isRequired:!0}),RequestType:new h({displayName:"Request Type",options:["New","Broken/Lost/Stolen","Accessories"],isRequired:!0}),PlanType:new h({displayName:"Plan Type",options:["Domestic","Global"],isRequired:!0})};static Views={All:["ID","Title","User","EmployeeType","RequestType","PlanType"]};static ListDef={name:"st_mobile_phone",title:"st_mobile_phone",fields:i.Views.All};static uid="mobile"};var Pi=class i extends y{constructor(e){super(e)}FieldMap={...this.FieldMap,DateAndTime:new D({displayName:"Date and Time",type:M.datetime,isRequired:!0}),DriverPOC:new d({displayName:"Driver POC",isRequired:!0})};static Views={All:["ID","Title","DateAndTime","DriverPOC"]};static ListDef={name:"st_motor_pool",title:"st_motor_pool",fields:i.Views.All};static uid="motor_pool"};var Ni=class i extends y{constructor(e){super(e)}FieldMap={...this.FieldMap,FullName:new k({displayName:"Contractor",isRequired:!0}),ManagerGov:new k({displayName:"Gov Manager",isRequired:!0}),ManagerGTM:new k({displayName:"COR/GTM",isRequired:!0}),Office:new h({displayName:"Department",options:F().RequestingOffices().map(e=>e.Title),isRequired:!0}),RequisitionNumber:new d({displayName:"Requisition Number/Task Order",isRequired:!0}),Task:new d({displayName:"Project Task",isRequired:!0}),Hours:new d({displayName:"Overtime Hours Total",isRequired:!0}),ContractorType:new h({displayName:"Contractor Type",options:["SCA","Non-SCA"],isRequired:!0}),DatesRaw:new BlobField({displayName:"Overtime Dates",isRequired:!0,width:12,multiple:!0,entityType:ko.observable(Ei)})};static Views={All:["ID","Title","FullName","ManagerGov","ManagerGTM","Office","RequisitionNumber","Task","Hours","ContractorType","DatesRaw"]};static ListDef={name:"st_overtime",title:"st_overtime",fields:i.Views.All};static uid="overtime"},Ei=class extends we{constructor(){super()}FieldMap={date:new D({displayName:"Date",isRequired:!0}),hours:new d({displayName:"# of Hours",isRequired:!0}),label:new d({displayName:"Note/Label",isRequired:!1})}};var Oi=class i extends y{constructor(e){super(e)}FieldMap={...this.FieldMap,PresentationDate:new D({displayName:"Presentation Date and Time",type:M.datetime,isRequired:!0}),Location:new d({displayName:"Location",isRequired:!0}),Duration:new d({displayName:"Duration",isRequired:!0}),POC:new d({displayName:"POC",isRequired:!0})};static Views={All:["ID","Title","PresentationDate","Location","Duration","POC"]};static ListDef={name:"st_presentation",title:"st_presentation",fields:i.Views.All};static uid="presentation"};var Li=class i extends y{constructor(e){super(e),this.Request=e}Type=ko.observable();Quantity=ko.observable();Items=ko.observableArray();FieldMap={...this.FieldMap,RequisitionType:new h({displayName:"Requisition Type",isRequired:!1,options:["Requisition","De-Obligation","Re-Alignment"]}),Quantity:new d({displayName:"Quantity of requisitions",isRequired:!1}),ItemsBlob:new BlobField({displayName:"Procurement Items",isRequired:!1,width:12,multiple:!0,entityType:ko.observable(Vi)})};static Views={All:["ID","Title","RequisitionType","Quantity","ItemsBlob"]};static ListDef={name:"st_requisition",title:"st_requisition",fields:i.Views.All};static uid="requisition"},Vi=class extends we{constructor(){super()}FieldMap={title:new d({displayName:"Title",isRequired:!0})}};var Mi=class i extends y{constructor(e){super(e)}FieldMap={...this.FieldMap,Category:new h({displayName:"Category",options:["Category 1","Category 2","Category 3"],isRequired:!1}),DatePromised:new D({displayName:"Date Promised",type:M.date,isRequired:!1}),DateCompleted:new D({displayName:"Date Completed",type:M.date,isRequired:!1})};static Views={All:["ID","Title"]};static ListDef={name:"st_sdm_admin_request",title:"st_sdm_admin_request",fields:i.Views.All};static uid="sdm_admin_request"};var Bi=class i extends y{constructor(e){super(e)}FieldMap={...this.FieldMap,Subject:new d({displayName:"Title",instructions:`Brief one line summary identifying the issue.<br>
      (Team Name - Action Name - Brief description of Issue)`,isRequired:!0}),EmployeeId:new d({displayName:"Employee ID",instructions:"Required if applicable. Please do NOT include employee SSN.",isRequired:!0}),AnalystPOC:new k({displayName:"Analyst POC",instructions:"Name of the incident reporter.",isRequired:!0}),QWINumber:new d({displayName:"QWI Number",instructions:"(example: GFS-WI-APP-###)",isRequired:!0}),QWIStep:new d({displayName:"QWI Step",instructions:"What step in the QWI were you not able to complete successfully?",isRequired:!0}),IssueDate:new D({displayName:"Issue Date/Pay-Period of Action",type:M.date,instructions:"(Needed to allow determination of software version being used)",isRequired:!0}),DISAction:new d({displayName:"DIS Action",instructions:"Required if applicable - if associated with a particular employee, this will be applicable",isRequired:!0}),DISRequestCode:new d({displayName:"DIS Request Code",instructions:"Required if applicable - if associated with a particular action in DIS, this will be applicable",isRequired:!0}),PayImpacting:new De({displayName:"Pay Impacting",instructions:"Does the action impact an employee's pay if the issue is not resolved immediately? Please provide any necessary information in the instructions."}),ImpactCount:new d({displayName:"Number of Employees Impacted",isRequired:!0}),ResolutionDate:new D({displayName:"Required Date for Resolution",instructions:"Enter date required for resolution. What is the last day this action needs to be successfully completed before the employee's pay is negatively impacted?",type:M.date,isRequired:!1}),PayrollOpIssue:new De({displayName:"Payroll Operational Issue - Yes/No",instructions:"Process did not finish or unexpected processing results - from OPS"}),NewRequirement:new d({displayName:"New Requirement or request to modify existing functionality?",instructions:"What changed or is expected to change?",isRequired:!1}),CompliancePolicy:new d({displayName:"Compliance and Policy",instructions:"Did policy change? Is GFACS not compliant?",isRequired:!1}),SecurityRoleChange:new d({displayName:"Security Role Change?",isRequired:!1}),DataUpdateRequest:new d({displayName:"Data Update/Execution Form (EF) request",instructions:"What needs to be update? Specific fields, dates? When is it needed by?",isRequired:!1}),QueryRequest:new z({displayName:"Query Request",instructions:"What needs to be update? Specific fields, dates? When is it needed by?",isRequired:!1}),DatabaseIssues:new z({displayName:"Database operation/output issues",instructions:"e.g. error message clarification",isRequired:!1})};static Views={All:["ID","Title"]};static ListDef={name:"st_sdm_tier_I",title:"st_sdm_tier_I",fields:i.Views.All};static uid="sdm_tier_I"};var _i=class i extends y{constructor(e){super(e)}OfficeOptions=F().RequestingOffices().map(e=>e.Title);FieldMap={...this.FieldMap,FullName:new k({displayName:"Contractor",isRequired:!0}),ManagerDept:new k({displayName:"Dept Manager",isRequired:!1}),ManagerTechnical:new k({displayName:"Government Technical Monitor",isRequired:!0,Visible:ko.pureComputed(()=>!this.FieldMap.NoGTM.Value())}),NoGTM:new De({displayName:"Check here if no GTM for this contract"}),COR:new k({displayName:"COR",isRequired:!0}),Office:new h({displayName:"Office",options:this.OfficeOptions,isRequired:!0}),RequisitionOrder:new d({displayName:"Requisition Number/Task Order",isRequired:!0}),LaborCategory:new d({displayName:"Labor Category (LCAT)",isRequired:!0}),ContractorType:new h({displayName:"Contractor Type",options:["SCA","Non-SCA"],isRequired:!0}),TeleworkType:new h({displayName:"Telework Type",options:["Core","Situational"],isRequired:!0}),MaxEligibility:new h({displayName:"Max Eligibility",options:["80%","60%","40%","20%","None"],isRequired:!0}),DaysWeek1:new h({displayName:"Week 1",options:["Sun","Mon","Tues","Wed","Thurs","Fri","Sat"],multiple:!0,isRequired:!1}),DaysWeek2:new h({displayName:"Week 2",options:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],multiple:!0,isRequired:!1})};static Views={All:["ID","Title","FullName","ManagerDept","ManagerTechnical","NoGTM","COR","Office","RequisitionOrder","LaborCategory","ContractorType","TeleworkType","MaxEligibility","DaysWeek1","DaysWeek2"]};static ListDef={name:"st_telework",title:"st_telework",fields:i.Views.All};static uid="telework"};var ro=R`
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
`;var lo=R`
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
`;var co=R`
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
`;var Bt=class extends je{constructor(e){super(e),window.DEBUG&&console.log("Hello from APM Actions module."),this._context=_(),this.ServiceType=e.request.RequestBodyBlob?.Value(),this.Errors=e.errors,this.Request=e.request,this.newEntity=new wt,this.newEntity.fromJSON(this.ServiceType.toJSON()),this.init()}newEntity=null;HasLoaded=ko.observable(!1);Editing=ko.observable(!0);DisplayMode=ko.pureComputed(()=>this.Editing()?"edit":"view");init=async()=>{window.DEBUG&&console.log("setting supplement"),await this.newEntity.setRequestContext(this.Request),this.newEntity.ContractorSupplementField.Value()||this.newEntity.ContractorSupplementField.Value(new Le({Title:this.Request.Title,Request:this.Request}));let e=this.validate(!1);this.assignment.Status!=O.InProgress&&this.Editing(!1),this.IsCompleted(!e.length),this.HasLoaded(!0)};hasBeenValidated=ko.observable(!1);hasBeenSaved=ko.observable(!1);IsCompleted=ko.observable(!1);validate=(e=!0)=>{if(!this.newEntity)return[];let t=[];return this.newEntity.GTM.validate(e).length&&t.push(new Te(Mt,"required-field","Please provide a GTM.")),this.newEntity.COR.validate(e).length&&t.push(new Te(Mt,"required-field","Please provide a COR.")),this.newEntity.ContractorSupplementField.Value().validate(e).length&&t.push(new Te(Mt,"required-field","Please provide the contractor supplemental information.")),this.Errors(this.Errors().filter(s=>s.source!=Mt).concat(t)),t};ShowSupplementComponent=ko.pureComputed(()=>this.newEntity.GTM.IsValid()&&this.newEntity.COR.IsValid());submit=async()=>{this.hasBeenValidated(!0),!this.validate().length&&(this.newEntity.ContractorSupplementField.Value().Request=this.Request,await this.newEntity.ContractorSupplement.create(this.newEntity.ContractorSupplementField.Value()),this.Request.RequestBodyBlob.Value(this.newEntity),await this._context.Requests.UpdateEntity(this.Request,["RequestBodyBlob"]),this.assignment.Status!=O.Approved,await this.completeAssignment(this.assignment,O.Approved),this.hasBeenSaved(!0),this.IsCompleted(!0))};update=async()=>{this.hasBeenValidated(!0),!this.validate().length&&(this.Request.RequestBodyBlob.Value(this.newEntity),await this._context.Requests.UpdateEntity(this.Request,["RequestBodyBlob"]),await this.newEntity.ContractorSupplement.update(Le.Views.APMUpdate),this.hasBeenSaved(!0),this.Editing(!1))};static name="APMActions";static template=co},Mt="apm-actions";var uo=R`
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
`;var _t=class extends je{constructor(e){super(e),this._context=_(),this.ServiceType=e.request.RequestBodyBlob?.Value(),this.Errors=e.errors,this.Request=e.request,this.apmWatcher(this.ServiceType?.APM.get()),this.gtmWatcher(this.ServiceType?.GTM.get());let t=this.validate(!1);this.assignment.Status!=O.InProgress&&this.Editing(!1)}Editing=ko.observable(!0);APM=new k({displayName:"APM",isRequired:!0,spGroupName:ko.pureComputed(()=>ko.unwrap(Ut)?.UserGroup?.Title)});GTM=new k({displayName:"GTM",isRequired:!1,spGroupName:ko.pureComputed(()=>ko.unwrap(Gt)?.UserGroup?.Title)});hasBeenValidated=ko.observable(!1);hasBeenSaved=ko.observable(!1);validate=(e=!0)=>{if(!this.ServiceType)return[];let t=[];return this.APM.validate(e).length&&t.push(new Te(po,"gov-manager-actions","Please provide a valid APM.")),this.Errors(this.Errors().filter(s=>s.source!=po).concat(t)),t};apmWatcher=e=>{this.APM.get()||this.APM.set(e)};gtmWatcher=e=>{this.GTM.get()||this.GTM.set(e)};submit=async()=>{this.hasBeenValidated(!0),!this.validate().length&&(console.log(this),this.ServiceType.APM.set(this.APM.get()),this.GTM.get()?this.ServiceType.GTM.set(this.GTM.get()):this.ServiceType.GTM.get()&&this.ServiceType.GTM.set(null),await this._context.Requests.UpdateEntity(this.Request,["RequestBodyBlob"]),this.assignment.Status!=O.Approved&&await this.completeAssignment(this.assignment,O.Approved),this.Editing(!1),this.hasBeenSaved(!0))};static name="GovManagerActions";static template=uo},po="gov-manager-actions";var ji={view:"svc-ch_overtime-view",edit:"svc-ch_overtime-edit",new:"svc-ch_overtime-edit"};J(Bt);J(_t);var Ut=ko.pureComputed(()=>ge().find(i=>i.Title.toUpperCase()=="CGFS/APMS")),Gt=ko.pureComputed(()=>ge().find(i=>i.Title.toUpperCase()=="CGFS/GTMS")),Ui=ko.pureComputed(()=>ge().find(i=>i.Title.toUpperCase()=="CGFS/CORS")),Gi=class extends qe{constructor(e){super(e)}static name=ji.view;static template=ro},$i=class extends Ae{constructor(e){super(e)}static name=ji.edit;static template=lo};J($i);J(Gi);var wt=class i extends y{constructor(e){super(e)}setRequestContext=async e=>{this.Request=e,await this.ContractorSupplement.findByRequest(this.Request)};RequestSubmitted=ko.pureComputed(()=>this.Request?.Pipeline?.Stage());RequestStage2=ko.pureComputed(()=>this.Request?.Pipeline?.Stage()?.Step==2);Contractor=new k({displayName:"Contractor",isRequired:!0});GovManager=new k({displayName:"Gov Manager",isRequired:!0});GTM=new k({displayName:"GTM",isRequired:this.RequestStage2,Visible:this.RequestSubmitted,spGroupName:ko.pureComputed(()=>ko.unwrap(Gt)?.UserGroup?.Title)});APM=new k({displayName:"APM",isRequired:this.RequestSubmitted,Visible:this.RequestSubmitted,spGroupName:ko.pureComputed(()=>ko.unwrap(Ut)?.UserGroup?.Title)});COR=new k({displayName:"COR",isRequired:this.RequestStage2,Visible:this.RequestSubmitted,spGroupName:ko.pureComputed(()=>ko.unwrap(Ui)?.UserGroup?.Title)});ContractorSupplementField=new Pe({displayName:"Contractor Supplement",Visible:ko.observable(!1),type:Le,lookupCol:"LaborCategory",isRequired:!1,multiple:!1});ContractorSupplement={set:_().Set(Le),findByRequest:async e=>{let s=(await this.ContractorSupplement.set.FindByColumnValue([{column:"Title",op:"eq",value:e.Title}],{},{},Le.Views.All,!1))?.results?.pop();s&&this.ContractorSupplementField.Value(s)},update:async(e=null)=>{await this.ContractorSupplement.set.UpdateEntity(this.ContractorSupplementField.Value(),e)},VisibleOnForm:ko.pureComputed(()=>{}),create:async(e=this.ContractorSupplementField.Value())=>{let t=this.Request.getRelativeFolderPath(),s=this.ContractorSupplement.getPermissions(),o=await this.ContractorSupplement.set.UpsertFolderPath(t);await this.ContractorSupplement.set.SetFolderPermissions(t,s),e.Contractor.set(this.Contractor.get()),await this.ContractorSupplement.set.AddEntity(e,t,this.Request),this.ContractorSupplementField.Value(e)},getPermissions:()=>{let e=ge().find(a=>a.Title.toUpperCase()=="CGFS/EX/BUDGET")?.UserGroup,t=ge().find(a=>a.Title.toUpperCase()=="CGFS/EX")?.UserGroup,s=Ui()?.UserGroup;return[[F(),Y.RestrictedContribute],[this.APM.get(),Y.RestrictedContribute],[this.GTM.get(),Y.RestrictedContribute],[this.COR.get(),Y.RestrictedContribute],[e,Y.RestrictedContribute],[t,Y.RestrictedContribute],[s,Y.RestrictedContribute]]}};supplementComponents=Be;FieldMap={FullName:this.Contractor,GovManager:this.GovManager,GTM:this.GTM,APM:this.APM,COR:this.COR,DateStart:new D({displayName:"Start Date",type:M.date,isRequired:!0}),DateEnd:new D({displayName:"End Date (Within Month Range)",type:M.date,isRequired:!0}),Hours:new d({displayName:"Overtime Hours (Not to Exceed)",isRequired:!0,attr:{type:"number"}})};components=ji;static Views={All:["ID","Title","FullName","GovManager","GTM","APM","COR","DateStart","DateEnd","Hours","ContractorSupplement","Request"],APMUpdate:["COR","GTM"]};static ListDef={name:"st_ch_overtime",title:"st_ch_overtime",isServiceType:!0,fields:i.Views.All};static uid="ch_overtime"};var mo=R`
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
    <div class="row row-cols-2" data-bind="using: FieldMap">
      <div
        class="col pb-2"
        data-bind="component: {name: Supervisor.components.edit, params: Supervisor}"
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
`;var ho=R`
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
`;var fo={Passport:"Passport",Visa:"Visa"},go={New:"New",Renewal:"Renewal"},zi={view:"svc-diplomatic_passport-view",edit:"svc-diplomatic_passport-edit",new:"svc-diplomatic_passport-edit"},Hi=class extends Ae{constructor(e){super(e)}static name=zi.edit;static template=mo},Qi=class extends qe{constructor(e){super(e)}static name=zi.view;static template=ho};J(Hi);J(Qi);var Wi=class i extends y{constructor(e){super(e)}TypesSelected=ko.pureComputed(()=>this.FieldMap.RequestType.Value()&&this.FieldMap.DocumentType.Value());ShowPassportInfo=ko.pureComputed(()=>{let e=this.FieldMap.RequestType.Value(),t=this.FieldMap.DocumentType.Value();return!(!e||!t||t==fo.Passport&&e==go.New)});FieldMap={...this.FieldMap,DocumentType:new h({displayName:"Document Type",options:Object.values(fo),isRequired:!0}),RequestType:new h({displayName:"Request Type",options:Object.values(go),isRequired:!0}),Supervisor:new k({displayName:"Supervisor",isRequired:!0}),Grade:new d({displayName:"Grade/Rank",isRequired:!0,Visible:this.TypesSelected}),JobTitle:new d({displayName:"Job Title",isRequired:!0,Visible:this.TypesSelected}),DestinationCity:new d({displayName:"Destination City",isRequired:!0,Visible:this.TypesSelected}),DestinationCountry:new d({displayName:"Destination Country",isRequired:!0,Visible:this.TypesSelected}),Departure:new D({displayName:"Departure",type:M.date,isRequired:!0,Visible:this.TypesSelected}),Return:new D({displayName:"Return",type:M.date,isRequired:!0,Visible:this.TypesSelected}),BirthLocation:new d({displayName:"State/Country of Birth",isRequired:!0,Visible:this.TypesSelected}),DateOfBirth:new D({displayName:"Date of Birth",type:M.date,isRequired:!0,Visible:this.TypesSelected}),Gender:new d({displayName:"Gender",isRequired:!0,Visible:this.TypesSelected}),PassportDateIssued:new D({displayName:"Issue Date (of most recent Passport)",type:M.date,isRequired:!0,Visible:this.ShowPassportInfo}),PassportDateExpiration:new D({displayName:"Expiration Date (of most recent Passport)",type:M.date,isRequired:!0,Visible:this.ShowPassportInfo}),FullName:new d({displayName:"Full Name (as it appears on passport)",isRequired:!0,Visible:this.ShowPassportInfo}),PassportNum:new d({displayName:"Passport #",isRequired:!0,Visible:this.ShowPassportInfo}),Justification:new z({displayName:"Justification (if passport is expedited)",isRequired:!1,width:12,Visible:this.TypesSelected})};TravelFields=ko.pureComputed(()=>[this.FieldMap.DestinationCountry,this.FieldMap.DestinationCity,this.FieldMap.Departure,this.FieldMap.Return]);PersonalFields=ko.pureComputed(()=>[this.FieldMap.DateOfBirth,this.FieldMap.BirthLocation,this.FieldMap.Gender]);PassportFields=ko.pureComputed(()=>[this.FieldMap.PassportDateIssued,this.FieldMap.PassportDateExpiration,this.FieldMap.FullName,this.FieldMap.PassportNum]);components=zi;static Views={All:["ID","Title"]};static ListDef={name:"st_diplomatic_passport",title:"st_diplomatic_passport",fields:i.Views.All};static uid="diplomatic_passport"};var bo=R`
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
`;var yo={...Be,edit:"svc-fiscal-irreg-edit",new:"svc-fiscal-irreg-edit"},Ji=class extends Ae{constructor(e){super(e)}static name=yo.edit;static template=bo};J(Ji);var Ki=class extends y{constructor(e){super(e)}CaseNumber=new d({displayName:"Case Number",isRequired:!1});PostLocation=new d({displayName:"Post Location",isRequired:!0});PointOfContact=new k({displayName:"Point(s) of Contact",isRequired:!0,multiple:!0});CableMRN=new d({displayName:"Cable MRN",isRequired:!1});CableDate=new D({displayName:"Cable Date",type:M.date,isRequired:!1});USDValue=new d({displayName:"US Dollar Value",isRequired:!0,attr:{type:"number",min:"0"}});FIType=new h({displayName:"Type of Irregularity",options:["Shortage","Overage"],isRequired:!0});ShowShortageDocs=ko.pureComputed(()=>this.USDValue.Value()&&this.FIType.Value()=="Shortage");FieldMap={...this.FieldMap,CaseNumber:this.CaseNumber,PostLocation:this.PostLocation,PointOfContact:this.PointOfContact,CableMRN:this.CableMRN,CableDate:this.CableDate,USDValue:this.USDValue,FIType:this.FIType};components=yo;static uid="fp_fiscal_irreg"};var Ap=R`
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
`;var Za=R`
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
`,$t=class extends He{constructor(e){super(e),this.request=e.request,this.requestBody=e.request.RequestBodyBlob.Value()}createProcurement=async()=>{let e="<ul>";Object.values(this.requestBody.FieldMap).forEach(p=>{p&&(e+=`<li>${p.displayName}: ${p.toString()}</li>`)}),e+="</ul>";let t=me().find(p=>p.UID=="procurement"),s=oe.CreateByServiceType({ServiceType:t});s.FieldMap.RequestDescription.set(e),s.FieldMap.RequestingOffice.set(this.request.FieldMap.RequestingOffice.get()),s.FieldMap.Requestor.set(this.request.FieldMap.Requestor.get()),s.FieldMap.RequestorEmail(this.request.FieldMap.RequestorEmail()),s.FieldMap.RequestorPhone(this.request.FieldMap.RequestorPhone()),s.FieldMap.RequestorOfficeSymbol.set(this.request.FieldMap.RequestorOfficeSymbol.get());let o=this.request.getRelativeFolderPath(),a=await s.Attachments.createFolder(),r=_();try{await r.Attachments.CopyFolderContents(o,a),s.Attachments.refresh()}catch(p){console.error("Error copying files: ",p)}window.WorkOrder.App.NewRequest({request:s})};static name="create-procurement";static template=Za};J($t);var Xi=class i extends y{constructor(e){super(e)}CostThreshold=ko.pureComputed(()=>parseInt(this.FieldMap.Cost.Value())>500);FieldMap={...this.FieldMap,Name:new d({displayName:"Software Name",isRequired:!0}),Quantity:new d({displayName:"Quantity",isRequired:!0}),POCName:new d({displayName:"POC",isRequired:!0}),Cost:new d({displayName:"Cost (USD)",isRequired:!0}),RequestType:new h({displayName:"Request Type",options:["New","Maintenance Renewal"],isRequired:!0}),PurchaseFrequency:new h({displayName:"Purchase Frequency",options:["One Time","Recurring"],isRequired:this.CostThreshold}),ApprovedPurchase:new h({displayName:"Approved Purchase",options:["Yes","No"],isRequired:this.CostThreshold}),FundingSource:new h({displayName:"Funding Source",options:["Project","Contract","Other"],isRequired:this.CostThreshold})};static Views={All:["ID","Title","Request"]};static ListDef={name:"st_it_software",title:"st_it_software",fields:i.Views.All};static uid="it_software"};var vo=R`
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
`;var wo=R`
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
`;var ts={view:"svc-prop_space-view",edit:"svc-prop_space-edit",new:"svc-prop_space-edit"},Yi=class extends Ae{constructor(e){super(e)}static name=ts.edit;static template=vo},Zi=class extends qe{constructor(e){super(e)}static name=ts.view;static template=wo};J(Yi);J(Zi);var es=class i extends y{constructor(e){super(e)}serviceTypes={Property:"Property",Space:"Space"};propertySvcTypes={Inventory:"Inventory Request",Move:"Property move from one space to another",Excess:"Property excess request",Loanable:"Loanable Property"};propertyTypeOptions=["Backpack","Computer Monitor","Computer Speakers","Headset","Keyboard","Mouse","PIV Card Reader","Web Camera"];spaceSvcTypes={Move:"Moving from one space to another",New:"Request for new office space"};ShowEndofLoanAlert=ko.pureComputed(()=>this.FieldMap.PropOrSpace.Value()==this.serviceTypes.Property&&this.FieldMap.PropRequestType.Value()==this.propertySvcTypes.Loanable);FieldMap={...this.FieldMap,PropOrSpace:new h({displayName:" Type",options:Object.values(this.serviceTypes),isRequired:!0}),PropRequestType:new h({displayName:"Property Request Type",options:Object.values(this.propertySvcTypes),isRequired:!0,Visible:ko.pureComputed(()=>this.FieldMap.PropOrSpace.Value()==this.serviceTypes.Property)}),LocationChoice:new h({displayName:"Location",options:["On Premise","Off Premise"],isRequired:!0,Visible:ko.pureComputed(()=>this.FieldMap.PropOrSpace.Value()==this.serviceTypes.Property&&this.FieldMap.PropRequestType.Value()==this.propertySvcTypes.Inventory)}),SpaceRequestType:new h({displayName:"Space Request Type",options:Object.values(this.spaceSvcTypes),isRequired:!0,Visible:ko.pureComputed(()=>this.FieldMap.PropOrSpace.Value()==this.serviceTypes.Space)}),NumberEmployees:new d({displayName:"Number of Employees",isRequired:!0,Visible:ko.pureComputed(()=>this.FieldMap.PropOrSpace.Value()==this.serviceTypes.Space&&this.FieldMap.SpaceRequestType.Value()==this.spaceSvcTypes.New)}),Timeframe:new d({displayName:"New Location",isRequired:!0,Visible:ko.pureComputed(()=>this.FieldMap.PropOrSpace.Value()==this.serviceTypes.Space)}),CurrentLocation:new d({displayName:"Current Location",isRequired:!0,Visible:ko.pureComputed(()=>{let e=this.FieldMap.PropOrSpace.Value();if(!e)return!1;if(e==this.serviceTypes.Property)return this.FieldMap.PropRequestType.Value()==this.propertySvcTypes.Move||this.FieldMap.PropRequestType.Value()==this.propertySvcTypes.Excess;if(e==this.serviceTypes.Space)return this.FieldMap.SpaceRequestType.Value()==this.spaceSvcTypes.Move})}),NewLocation:new d({displayName:"New Location",isRequired:!0,Visible:ko.pureComputed(()=>{let e=this.FieldMap.PropOrSpace.Value();if(!e)return!1;if(e==this.serviceTypes.Property)return this.FieldMap.PropRequestType.Value()==this.propertySvcTypes.Move;if(e==this.serviceTypes.Space)return this.FieldMap.SpaceRequestType.Value()==this.spaceSvcTypes.Move})}),NumberItems:new d({displayName:"Number of Items",isRequired:!0,Visible:ko.pureComputed(()=>{let e=this.FieldMap.PropOrSpace.Value();return e?e==this.serviceTypes.Property?this.FieldMap.PropRequestType.Value():this.FieldMap.SpaceRequestType.Value()==this.spaceSvcTypes.Move:!1})}),PropertyType:new h({displayName:"Type of Property",options:this.propertyTypeOptions,multiple:!0,isRequired:!0,Visible:ko.pureComputed(()=>this.FieldMap.PropOrSpace.Value()==this.serviceTypes.Property&&this.FieldMap.PropRequestType.Value())})};components=ts;static Views={All:["ID","Title","PropOrSpace","PropRequestType","LocationChoice","SpaceRequestType","NumberEmployees","Timeframe","CurrentLocation","NewLocation","NumberItems","PropertyType"]};static ListDef={name:"st_property_space",title:"st_property_space",fields:i.Views.All};static uid="property_space"};var So=R`
  <div>
    <div class="row row-cols-2" data-bind="foreach: FormFields">
      <div
        class="col pb-2"
        data-bind="component: {name: components.view, params: $data}"
      ></div>
    </div>
  </div>
`;var Ao=R`
  <div>
    <div class="row row-cols-2" data-bind="foreach: FormFields">
      <div
        class="col pb-2"
        data-bind="component: {name: components.edit, params: $data}"
      ></div>
    </div>
  </div>
`;var as={view:"svc-template-view",edit:"svc-template-edit",new:"svc-template-edit"},um=ko.pureComputed(()=>ge().find(i=>i.Title.toUpperCase()=="CGFS/APMS")),is=class extends qe{constructor(e){super(e)}static name=as.view;static template=So},ss=class extends Ae{constructor(e){super(e)}static name=as.edit;static template=Ao};J(ss);J(is);var os=class i extends y{constructor(e){super(e)}FieldMap={...this.FieldMap,SamplePeople:new k({displayName:"Supervisor",isRequired:!1}),SampleMultiPeople:new k({displayName:"Multiple People",isRequired:!1,multiple:!0}),SampleGroupPeople:new k({displayName:"Group People",isRequired:!1}),SampleSelect:new h({displayName:" Type",options:["FTE","Contractor"],isRequired:!1}),SampleText:new d({displayName:"FullName",isRequired:!1}),SampleTextArea:new z({displayName:"NotificationDates",isRequired:!1}),SampleDate:new D({displayName:"ExpirationDate",type:M.date,isRequired:!1}),SampleCheckbox:new De({displayName:"SpecialOrder"}),SampleLookup:new Pe({displayName:"Request Org",type:ae,lookupCol:"Title",Options:ge,isRequired:!1,multiple:!1}),SampleMultiLookup:new Pe({displayName:"Service Types",type:Me,lookupCol:"Title",Options:me,isRequired:!1,multiple:!0})};components=as;static Views={All:["ID","Title"]};static ListDef={name:"st_template",title:"st_template",fields:i.Views.All};static uid="template"};var en=i=>{let e=null;for(let t in St)if(St[t].uid==i){e=St[t];break}return e};var me=ko.observableArray(),Me=class i{constructor(e){this.ID=e.ID,this.Title=e.Title,this.LookupValue=e.Title,this.Loaded=!1,Object.assign(this,e)}getRepositoryListName=()=>`st_${this.UID}`;getListDef=()=>{if(!this.HasTemplate)return null;let e=this.getRepositoryListName();return{title:e,name:e}};_listRef=null;getListRef=()=>{if(!this.HasTemplate)return null;if(!this._initialized)throw new Error("Accessing constructor before initialization");return this._listRef||(this._listRef=tt.Set(this._constructor)),this._listRef};_constructor=null;instantiateEntity=async e=>!this.HasTemplate||!this.UID?null:(this._initialized||await this.initializeEntity(),this._constructor?new this._constructor(e):null);_initialized=!1;initializeEntity=async()=>{if(this._initialized||!this.HasTemplate||!this.UID)return;if(this._constructor){console.warn("Service type was already initialized"),this._initialized=!0;return}let e=null;try{e=en(this.UID),e||console.error("Could not find service module",this),this._constructor=e}catch(t){console.error("Cannot import service type module",t,this)}finally{this._initialized=!0}};userCanInitiate=e=>this.Active?e.hasSystemRole(ze.Admin)?!0:this.RequestingOrgs.length>0?this.RequestingOrgs.find(t=>e.isInRequestOrg(t))!==void 0:!0:!1;attachmentsRequiredCntString=()=>this.AttachmentsRequiredCnt?this.AttachmentsRequiredCnt<0?"multiple":this.AttachmentsRequiredCnt:"no";static FindInStore=function(e){return!e||!e.ID?null:me().find(t=>t.ID==e.ID)};static Views={All:["ID","Title","Active","HasTemplate","DescriptionTitle","DescriptionRequired","DescriptionFieldInstructions","Description","Icon","AttachmentsRequiredCnt","AttachmentDescription","DaysToCloseBusiness","UID","ReportingOrgs","RequestingOrgs"]};static ListDef={name:"ConfigServiceTypes",title:"ConfigServiceTypes",fields:i.Views.All}};var jt=class i extends we{constructor({ID:e,Title:t}){super(),this.ID=e,this.Title=t,this.LookupValue=t}From=new d({displayName:"From"});To=new d({displayName:"To"});CC=new d({displayName:"CC"});Title=new d({displayName:"Subject"});Body=new z({displayName:"Body",isRichText:!0});FieldMap={To:this.To,From:this.From,CC:this.CC,Title:this.Title,Body:this.Body};getStagedAttachmentsFolderPath=()=>"Staged/"+this.ID;static Views={All:["ID","Title","From","To","CC","Body"]};static ListDef={name:"RequestIngest",title:"RequestIngest",fields:i.Views.All}};var Co=!1,ns=null;function xo(){ns||(ns=new tt)}function _(){return ns}var rs=class{constructor(){}CopyFileAsync=async function(e,t){return Os(e,t)};virtualSets=new Map;Set=e=>{let t=e.ListDef.name,s=Object.values(this).filter(o=>o.constructor.name==ye.name).find(o=>o.ListDef?.name==t);if(s)return s;if(!this.virtualSets.has(t)){let o=new ye(e);return this.virtualSets.set(t,o),o}return this.virtualSets.get(t)}},tt=class extends rs{constructor(){super()}Actions=new ye(Xe);Assignments=new ye(pe);Attachments=new ye(_e);Comments=new ye(Ye);Notifications=new ye(Ie);Requests=new ye(oe);RequestIngests=new ye(jt);ConfigHolidays=new ye(Ft);ConfigRequestOrgs=new ye(ae);ConfigPipelines=new ye(Fe);ConfigServiceTypes=new ye(Me)},ye=class{constructor(e){if(!e.ListDef){console.error("Missing entityType listdef for",e);return}this.entityType=e;try{let t=new Set;e.Views?.All?.map(o=>t.add(o));let s=new this.entityType({ID:null,Title:null});s.FieldMap&&Object.keys(s.FieldMap).map(o=>t.add(o)),this.AllDeclaredFields=[...t]}catch(t){console.warn("Could not instantiate",e),console.warn(t),this.AllDeclaredFields=e.Views?.All??[]}this.ListDef=e.ListDef,this.Views=e.Views,this.Title=e.ListDef.title,this.Name=e.ListDef.name,this.ListRef=new Ls(e.ListDef),this.entityConstructor=this.entityType.FindInStore||this.entityType.Create||this.entityType}FindById=async(e,t=this.AllDeclaredFields)=>{let s=await this.ListRef.findByIdAsync(e,t);if(!s)return null;let o=new this.entityType(s);return Ne(s,o),o};FindByColumnValue=async(e,{orderByColumn:t,sortAsc:s},{count:o=null},a=this.AllDeclaredFields,r=!1)=>{let p=o!=null;o=o??5e3;let b=await this.ListRef.findByColumnValueAsync(e,{orderByColumn:t,sortAsc:s},{count:o},a,r),x={_next:b._next,results:b.results.map(U=>{let K=new this.entityConstructor(U);return Ne(U,K),K})};if(p)return x;let N={results:x.results};for(;x._next;)x=await this.LoadNextPage(x),N.results.concat(x.results);return N};LoadNextPage=async e=>{let t=await this.ListRef.loadNextPage(e);return{_next:t._next,results:t.results.map(s=>{let o=new this.entityType(s);return Ne(s,o),o})}};ToList=async(e=this.Views.All)=>(await this.ListRef.getListItemsAsync({fields:e})).map(s=>{let o=new this.entityType(s);return Ne(s,o),o});LoadEntity=async function(e){if(!e.ID)return console.error("entity missing Id",e),!1;let t=await this.ListRef.findByIdAsync(e.ID,this.ListDef.fields);return t?(Ne(t,e),!0):(console.warn("ApplicationDbContext Could not find entity",e),!1)};AddEntity=async function(e,t,s=null){let a=To.bind(this)(e);s&&(a.Title=s.Title,a.Request=s),Co&&console.log(a);let r=await this.ListRef.createListItemAsync(a,t);Ne({ID:r},e)};UpdateEntity=async function(e,t=null){let s=To.bind(this)(e,t);return s.ID=typeof e.ID=="function"?e.ID():e.ID,Co&&console.log(s),this.ListRef.updateListItemAsync(s)};RemoveEntity=async function(e){return e.ID?(await this.ListRef.deleteListItemAsync(e.ID),!0):!1};SetItemPermissions=async function(e,t,s=!1){let o=t.filter(a=>a[0]&&a[1]).map(a=>[a[0].getKey(),a[1]]);return this.ListRef.setItemPermissionsAsync(e,o,s)};GetItemPermissions=function(e){return this.ListRef.getItemPermissionsAsync(e)};GetFolderUrl=function(e=""){return this.ListRef.getServerRelativeFolderPath(e)};GetItemsByFolderPath=async function(e,t=this.AllDeclaredFields){return(await this.ListRef.getFolderContentsAsync(e,t)).map(o=>{let a=new this.entityType(o);return Ne(o,a),a})};UpsertFolderPath=async function(e){return this.ListRef.upsertFolderPathAsync(e)};DeleteFolderByPath=function(e){return this.ListRef.deleteFolderByPathAsync(e)};SetFolderReadOnly=async function(e){return this.ListRef.setFolderReadonlyAsync(e)};SetFolderPermissions=async function(e,t,s=!0){let o=t.filter(a=>a[0]&&a[1]).map(a=>[a[0].getKey(),a[1]]);return this.ListRef.setFolderPermissionsAsync(e,o,s)};EnsureFolderPermissions=async function(e,t){let s=t.filter(o=>o[0]&&o[1]).map(o=>[o[0].LoginName??o[0].Title,o[1]]);return this.ListRef.ensureFolderPermissionsAsync(e,s)};UploadFileToFolderAndUpdateMetadata=async function(e,t,s,o,a){let r=await this.ListRef.uploadFileToFolderAndUpdateMetadata(e,t,s,o,a),p=await this.ListRef.getById(r,this.AllDeclaredFields),b=new this.entityConstructor(p);return Ne(p,b),b};UploadNewDocument=async function(e,t){return this.ListRef.uploadNewDocumentAsync(e,"Attach a New Document",t)};CopyFolderContents=async function(e,t){return this.ListRef.copyFilesAsync(e,t)};CopyFileAsync=async function(e,t){return this.ListRef.copyFileAsync(e,t)};CopyAttachmentFromPath=async function(e,t,s=null){return this.ListRef.copyAttachmentFromPath(e,t,s)};ShowForm=async function(e,t,s){return new Promise((o,a)=>this.ListRef.showModal(e,t,s,o))};EnsureList=async function(){}};function Ne(i,e){!i||!e||Object.keys(i).forEach(t=>{tn(t,i[t],e)})}function tn(i,e,t){if(t.FieldMap&&t.FieldMap[i]){sn(e,t.FieldMap[i]);return}if(t[i]&&typeof t[i]=="function"){t[i](e);return}t[i]=e}function sn(i,e){if(typeof e=="function"){e(i);return}if(typeof e!="object"){e=i;return}if(e.set&&typeof e.set=="function"){e.set(i);return}if(e.obs){if(!i){e.obs(null);return}let t=Array.isArray(i)?i.map(s=>Ro(s,e)):Ro(i,e);e.obs(t);return}e=i}function Ro(i,e){return e.factory?e.factory(i):i}function To(i,e=null){let t={},s=new Set([]);this?.ListDef?.fields&&this.ListDef.fields.forEach(r=>s.add(r)),i.FieldMap&&Object.keys(i.FieldMap).forEach(r=>s.add(r));let o=[...s];return(e??(i.FieldMap?Object.keys(i.FieldMap):null)??Object.keys(i)).filter(r=>o.includes(r)).map(r=>{if(i.FieldMap&&i.FieldMap[r]){t[r]=on(i.FieldMap[r]);return}t[r]=i[r]}),t}function on(i){return typeof i=="function"?i():i.get&&typeof i.get=="function"?i.get():i.obs?i.obs():i}var Oe=class i extends ne{constructor(e){super(e),this.entityType=e.entityType,this.multiple=e.multiple,this.multiple&&(this.Value=ko.observableArray()),ko.isObservable(this.entityType)&&this.entityType.subscribe(this.updateEntityTypeHandler),this.updateEntityTypeHandler(ko.unwrap(this.entityType))}toString=ko.pureComputed(()=>`${this.Value()?.length??"0"} items`);toJSON=ko.pureComputed(()=>this.multiple?this.Value().map(e=>e.toJSON()):this.Value()?.toJSON());fromJSON=e=>{if(e){if(!this.multiple){this.Value()?.fromJSON(e);return}this.Value.removeAll(),e.map(t=>{let s=new this.entityConstructor;s.fromJSON(t),this.Value.push(s)})}};get=()=>JSON.stringify(this.toJSON());blob;set=e=>{window.DEBUG&&console.log(e),this.blob=e,e?.constructor!=i&&this.fromJSON(JSON.parse(e))};get entityConstructor(){return ko.utils.unwrapObservable(this.entityType)}Cols=ko.pureComputed(()=>ko.unwrap(this.entityType)?new this.entityConstructor().FormFields():[]);NewItem=ko.observable();submit=()=>{(this.NewItem()?.validate()).length||(this.Value.push(this.NewItem()),this.NewItem(new this.entityConstructor))};add=e=>this.Value.push(e);remove=e=>this.Value.remove(e);updateEntityTypeHandler=e=>{e&&(this.multiple?this.NewItem(new this.entityConstructor):this.Value(new this.entityConstructor),this.blob&&this.fromJSON(JSON.parse(this.blob)))};applyValueToTypedValues=()=>{if(!this.Value()||!this.TypedValue())return;if(!this.multiple){Ne(this.Value(),this.TypedValue());return}let e=this.Value()?.map(t=>{let s=new this.entityConstructor;return Ne(t,s),s});this.TypedValues(e)};components=ut};var De=class extends ne{constructor(e){super(e)}components=pt};var M={date:"date",datetime:"datetime-local"},D=class extends ne{constructor(e){super(e),this.type=e.type??M.date}toString=ko.pureComputed(()=>{switch(this.type){case M.date:return this.toLocaleDateString();case M.datetime:return this.toLocaleString();default:return""}});toSortableDateString=()=>this.Value()?.format("yyyy-MM-dd");toLocaleDateString=()=>this.Value()?.toLocaleDateString();toLocaleString=()=>this.Value()?.toLocaleString();toInputDateString=()=>{let e=this.Value();return[e.getUTCFullYear().toString().padStart(4,"0"),(e.getUTCMonth()+1).toString().padStart(2,"0"),e.getUTCDate().toString().padStart(2,"0")].join("-")};toInputDateTimeString=()=>this.Value().format("yyyy-MM-ddThh:mm");get=ko.pureComputed(()=>!this.Value()||isNaN(this.Value().valueOf())?null:this.Value().toISOString());set=e=>{if(!e)return null;e.constructor.getName()!="Date"&&(e=new Date(e)),e.getTimezoneOffset(),this.Value(e)};inputBinding=ko.pureComputed({read:()=>{if(!this.Value())return null;switch(this.type){case M.date:return this.toInputDateString();case M.datetime:return this.toInputDateTimeString();default:return null}},write:e=>{e&&this.Value(new Date(e))}});components=mt};var Pe=class extends ne{constructor({displayName:e,type:t,isRequired:s=!1,Visible:o,Options:a=null,optionsText:r=null,multiple:p=!1,lookupCol:b=null}){super({Visible:o,displayName:e,isRequired:s}),a?this.Options=a:this.isSearch=!0,this.multiple=p,this.Value=p?ko.observableArray():ko.observable(),this.entityType=t,this.lookupCol=b??"Title",this.optionsText=r??(x=>x[this.lookupCol])}_entitySet;get entitySet(){return this._entitySet||(this._entitySet=_().Set(this.entityType)),this._entitySet}isSearch=!1;Options=ko.observableArray();IsLoading=ko.observable(!1);HasLoaded=ko.observable(!1);refresh=async()=>{if(this.Value()){if(this.IsLoading(!0),!this.multiple){await this.entitySet.LoadEntity(this.Value()),this.IsLoading(!1),this.HasLoaded(!0);return}await Promise.all(this.Value().map(async e=>await this.entitySet.LoadEntity(e))),this.IsLoading(!1),this.HasLoaded(!0)}};ensure=async()=>{if(!this.HasLoaded()){if(this.IsLoading())return new Promise((e,t)=>{let s=this.IsLoading.subscribe(o=>{o||(s.dispose(),e())})});await this.refresh()}};toString=ko.pureComputed(()=>this.Value()?this.multiple?this.Value().map(e=>qo(e,this.lookupCol)).join(", "):qo(this.Value(),this.lookupCol):"");get=()=>{if(!this.Value())return;if(this.multiple)return this.Value().map(t=>({ID:t.ID,LookupValue:t.LookupValue,Title:t.Title}));let e=this.Value();return{ID:e.ID,LookupValue:e.LookupValue,Title:e.Title}};set=e=>{if(!e){this.Value(e);return}if(this.multiple){let t=Array.isArray(e)?e:e.results??e.split("#;");this.Value(t.map(s=>this.findOrCreateNewEntity(s)));return}this.Value(this.findOrCreateNewEntity(e)),e&&!this.toString()&&this.ensure()};findOrCreateNewEntity=e=>{if(this.entityType.FindInStore){let t=this.entityType.FindInStore(e);if(t)return t;console.warn(`Could not find entity in store: ${this.entityType.name}`,e)}return this.entityType.Create?this.entityType.Create(e):new this.entityType(e)};components=ht};function qo(i,e){if(i.FieldMap&&i.FieldMap[e]){let t=i.FieldMap[e];return typeof t=="function"?t():t.toString&&typeof t.toString=="function"?t.toString():t.get&&typeof t.get=="function"?t.get():t.obs?t.obs():t}return i[e]??""}var k=class extends ne{constructor(e){super(e),this.spGroupName=e.spGroupName??null,this.multiple=e.multiple??!1,this.Value=this.multiple?ko.observableArray():ko.observable(),ko.isObservable(this.spGroupName)&&this.spGroupName.subscribe(this.spGroupNameChangedHandler),ko.unwrap(this.spGroupName)&&this.spGroupNameChangedHandler(ko.unwrap(this.spGroupName))}spGroupId=ko.observable();userOpts=ko.observableArray();expandUsers=ko.observable(!1);spGroupNameChangedHandler=async e=>{e||(this.userOpts.removeAll(),this.spGroupId(null));let t=await $e(e);this.spGroupId(t.ID);let s=await kt(e);this.userOpts(s.sort(at))};pickerOptions=ko.pureComputed(()=>{let e=ko.unwrap(this.spGroupId),t={AllowMultipleValues:this.multiple};return e&&(t.SharePointGroupID=e),t});toString=ko.pureComputed(()=>this.multiple?this.Value()?.map(e=>e.Title):this.Value()?.Title);set=e=>{if(!this.multiple){this.Value(W.Create(e));return}if(!e){this.Value.removeAll();return}let t=e.results??e;if(!t.length){this.Value.removeAll();return}this.Value(t.map(s=>W.Create(s)))};components=ft};var h=class extends ne{constructor({displayName:e,isRequired:t=!1,Visible:s,options:o,multiple:a=!1,optionsText:r,instructions:p}){super({Visible:s,displayName:e,isRequired:t,instructions:p}),ko.isObservable(o)?this.Options=o:this.Options(o),this.multiple=a,this.Value=a?ko.observableArray():ko.observable(),this.optionsText=r}toString=ko.pureComputed(()=>this.multiple?this.Value().join(", "):this.Value());get=()=>this.Value();set=e=>{if(e&&this.multiple){Array.isArray(e)?this.Value(e):this.Value(e.results??e.split(";#"));return}this.Value(e)};Options=ko.observableArray();components=gt};var d=class extends ne{constructor(e){super(e),this.attr=e.attr??{}}components=yt};var Ie=class i{constructor(){}static Create({To:e="",CC:t="",Title:s="",Body:o="",Request:a=null}){let r=new i;return r.ToString.Value(e),r.CCString.Value(t),r.Title.Value(s),r.Body.Value(o),r.Request.Value(a),r}Title=new d({displayName:"Subject",isRequired:!0});ToString=new d({displayName:"To",isRequired:!0,instructions:"Use ; to separate emails (e.g. smithj@state.gov;carls@state.gov;)"});To=new k({displayName:"To (people)",multiple:!0});CCString=new d({displayName:"CC",isRequired:!0,instructions:"Use ; to separate emails (e.g. smithj@state.gov;carls@state.gov;)"});CC=new k({displayName:"CC (people)",multiple:!0});BCCString=new d({displayName:"BCC",isRequired:!1});BCC=new k({displayName:"BCC (people)",multiple:!0});sendAsOpts=ko.pureComputed(()=>{let e=ko.unwrap(F);return e?e?.ActionOffices().map(s=>s.PreferredEmail).filter(s=>s)??[]:[]});SendAs=new h({displayName:"Send From (optional)",options:this.sendAsOpts,instructions:"*only pre-approved mailboxes are supported."});Body=new z({displayName:"Body",isRichText:!0});Sent=new D({displayName:"Sent On"});Request=new Pe({type:oe});FieldMap={Title:this.Title,ToString:this.ToString,To:this.To,CCString:this.CCString,CC:this.CC,BCCString:this.BCCString,BCC:this.BCC,SendAs:this.SendAs,Body:this.Body,Sent:this.Sent};static Views={All:["ID","Title","To","ToString","CC","CCString","BCC","Body","Sent","Request","DateToSend","FileRef"]};static ListDef={name:"Notifications",title:"Notifications",fields:this.Views.All}};var Fo=R`
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
`;var ls=class extends V{PendingRows=ko.pureComputed(()=>vt().map(e=>new ds(e)));ConvertToOptions=ko.pureComputed(()=>me().filter(e=>e.userCanInitiate(F())));deleteItem=async({requestIngest:e})=>{let t=_(),s=e.getStagedAttachmentsFolderPath();await t.Attachments.DeleteFolderByPath(s),await t.RequestIngests.RemoveEntity(e),vt(await t.RequestIngests.ToList())};static name="pending-request-ingests";static template=Fo},ds=class{constructor(e){this.requestIngest=e,this.ConvertTo.subscribe(this.onConvertToChangeHandler)}ShowBody=ko.observable(!1);ConvertTo=ko.observable();onConvertToChangeHandler=e=>{if(!e)return null;this.ConvertTo(null),this.ShowBody(!1),console.log("converting to...",e),an(e,this.requestIngest)}};async function an(i,e){await i.initializeEntity();let t=new oe({ServiceType:i}),s=e.Body.Value();t.RequestBodyBlob?.Value()?.fromEmail&&t.RequestBodyBlob?.Value()?.fromEmail(s),t.RequestDescription.Value(s);let o=_(),a=e.getStagedAttachmentsFolderPath();if((await o.Attachments.GetItemsByFolderPath(a,_e.Views.All)).length){console.log("Copying attachments");let p=await t.Attachments.createFolder();await o.Attachments.CopyFolderContents(a,p),await t.Attachments.refresh()}window.WorkOrder.App.NewRequest({request:t})}function We(i){return i=i.startsWith("#")?i:"#"+i,new DataTable(i,{dom:"<'ui stackable grid'<'row'<'eight wide column'l><'right aligned eight wide column'f>><'row dt-table'<'sixteen wide column'tr>><'row'<'six wide column'i><'d-flex justify-content-center'B><'right aligned six wide column'p>>>",buttons:["copy","csv","excel","pdf","print"],order:[[0,"desc"]],iDisplayLength:25,deferRender:!0,bDestroy:!0,initComplete:function(){this.api().columns().every(function(){var e=this,t=$(e.header()).closest("table"),s=$(e.footer()),o=$('<search-select class=""><option value=""></option></search-select>');switch(s.attr("data-filter")){case"select-filter":o.attr("multiple","true");case"single-select-filter":o.appendTo(s.empty()).on("change",function(){var p=this.selectedOptions.map(x=>x.value);p?p=p.map(function(x){return x?"^"+$.fn.dataTable.util.escapeRegex(x)+"$":null}):p=[];var b=p.join("|");e.search(b,!0,!1).draw()});let r="";e.data().unique().sort().each(function(p,b){try{let x=$(p);x.is("a")&&(p=x.text())}catch{}r+=`<option value="${p}" title="${p}">${p}</option>`}),o.append(r);break;case"search-filter":$('<div class=""><input class="form-control" type="text" placeholder="Search..." style="width: 100%"/></div>').appendTo(s.empty()).on("keyup change clear",function(){let p=this.getElementsByTagName("input")[0].value;e.search()!==p&&e.search(p).draw()});break;case"bool-filter":var a=$('<input type="checkbox"></input>').appendTo(s.empty()).change(function(){this.checked?e.search("true").draw():e.search("").draw()});break;default:}s.attr("clear-width")&&t.find("thead tr:eq(0) th").eq(e.index()).width("")})}})}var cs=class{constructor(){}IsLoading=ko.observable();HasLoaded=ko.observable(!1);AllOpenRequests=le.get(I.open).List;MyAssignedRequests=ko.pureComputed(()=>this.AllOpenRequests().filter(e=>e.Assignments.CurrentStage.list.UserActionAssignments().length));MyActiveAssignments=ko.pureComputed(()=>this.MyAssignedRequests().flatMap(e=>e.Assignments.CurrentStage.list.UserActionAssignments()).filter(e=>e.Status==O.InProgress&&e.userIsDirectlyAssigned(F())));List=ko.observableArray();getByRequest=e=>this.List().filter(t=>t.Request.ID==e.ID);getOpenByRequest=ko.pureComputed(()=>{let e=[],t=le.get(I.open)?.List()??[],s=this.List().filter(o=>o.Status==O.InProgress);return t.map(o=>{e.push(...ke.getByRequest(o).filter(a=>a.Status==O.InProgress&&a.userIsDirectlyAssigned(F())))}),e});getOpenByUser=e=>ko.pureComputed(()=>this.List().filter(t=>t.Status==O.InProgress&&t.userIsDirectlyAssigned(e)));remove=e=>{this.List.remove(t=>t.ID==e)};load=async()=>{this.IsLoading(!0);let e=new Date,t=await _().Assignments.FindByColumnValue([{column:"Status",op:"eq",value:O.InProgress}],{orderByColumn:"Title",sortAsc:!1},{},pe.Views.Dashboard,!1);this.List(t.results);let s=new Date;window.DEBUG&&console.log(`All Assignments loaded: ${t.results.length} cnt in ${s-e}`),this.HasLoaded(!0),this.IsLoading(!1)};init=async()=>{if(!this.HasLoaded()){if(this.IsLoading())return new Promise((e,t)=>{this.isLoadingSubscription=this.IsLoading.subscribe(s=>{this.isLoadingSubscription.dispose(),e()})});await this.load()}};dispose=()=>{this.isLoadingSubscription&&this.isLoadingSubscription.dispose()}},ke=new cs;var Io=R`
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
`;var Do=R`
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
`;var Po=R`
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
`;var At=class extends V{constructor({activeRequestSet:e,filteredRequests:t=null,key:s="office"}){super(),this.key=s,this.ActiveSet=e,this.filter=this.ActiveSet.filter,this.FilteredRequests=t??this.ActiveSet.List,this.IsLoading=this.ActiveSet.IsLoading,this.HasLoaded=this.ActiveSet.HasLoaded,this.init()}hasInitialized=!1;requestDateBackground=e=>{if(new Date>e.Dates.EstClosed.Value())return"table-danger"};getTableElementId=()=>"tbl-requests-status-"+this.key+this.filter?.toLowerCase();refresh=async()=>{await this.ActiveSet.load()};tableBodyComplete=e=>{this.Table&&this.Table.clear().destroy(),this.Table=We(this.getTableElementId())};init=async()=>{await this.ActiveSet.init(),this.hasInitialized=!0};dispose=()=>{}},us=class extends At{constructor(e){super(e)}static name="open-requests-table";static template=Po},ps=class extends At{constructor(e){super(e)}static name="open-office-requests-table";static template=Do},ms=class extends At{constructor(e){super(e)}static name="closed-requests-table";static template=Io};var No=R`
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
`;var hs=class extends V{constructor(e){super(),this.key=e.key}ServiceTypes=ko.pureComputed(()=>me().filter(e=>e.userCanInitiate(F())));SelectedService=ko.observable();static name="requests-by-service-type";static template=No};var Eo=R`
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
`;var fs=class extends V{constructor({service:e,key:t}){super(),window.DEBUG&&console.log("New Service Type Table",e.Title),this.ServiceType=e,this.key=t,this._context=_(),this.init()}HasInitialized=ko.observable();AllRequests=ko.observableArray();Supplements=ko.observableArray();requestMap={};_context;requestCols=["Title","RequestingOffice","Requestor","RequestStatus","RequestDescription"];SupplementCols=ko.observableArray();getSupplementByRequestId=e=>{let t=this.Supplements().find(s=>s.Request?.ID==e.ID);return t||null};getTableElementId=()=>`tbl-requests-type-${this.key}-${this.ServiceType.UID}`;async init(){let e=this.requestMap,t=await this._context.Requests.FindByColumnValue([{column:"ServiceType",value:this.ServiceType.ID}],{orderByColumn:"Title",sortAsc:!1},{},oe.Views.ByServiceType).then(o=>{this.AllRequests(o.results),o.results.map(a=>{e[a.Title]?e[a.Title].request=a:e[a.Title]={request:a}})});if(!this.ServiceType._constructor){await t,this.HasInitialized(!0);return}let s=await this.ServiceType.instantiateEntity();Object.keys(s.FieldMap).map(o=>this.SupplementCols.push({key:o,displayName:s.FieldMap[o]?.displayName??o})),this.HasInitialized(!0)}tableHasRendered=()=>{this.Table=We(this.getTableElementId())};static name="requests-by-service-type-table";static template=Eo};var Oo=R`
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
`;var gs=class extends V{constructor(e){super()}HasLoaded=ko.observable(!1);IsLoading=le.get(I.open).IsLoading;AllOpenRequests=le.get(I.open).List;MyAssignedRequests=ke.MyAssignedRequests;assignmentStatusClass=e=>{switch(e.Status){case O.InProgress:return"alert-warning";default:return"alert-secondary"}};assignmentBadgeText=e=>{switch(e.Status){case O.InProgress:return"In Progress";case O.Completed:return"Completed";default:return null}};assignmentBadgeClass=e=>{switch(e.Status){case O.InProgress:return"bg-warning";case O.Completed:return"bg-success";default:break}};listBeforeChangeWatcher=()=>{window.DEBUG&&console.log("destroying table"),this.Table&&this.Table.clear().destroy()};listAfterChangeWatcher=()=>{window.DEBUG&&console.log("creating table"),setTimeout(()=>this.Table=We("my-assignments-table"),20)};myPostProcessingLogic=e=>{this.Table=We("my-assignments-table")};init=async()=>{this.HasLoaded(!0)};dispose=()=>{this.listAfterChangeSubscription.dispose(),this.listAfterChangeSubscription.dispose()};static name="my-assignments-table";static template=Oo};var Lo=R`
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
`;var Vo=R`
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
`;var Ht=class extends V{constructor(e){super(),Object.assign(this,e)}AvailableRequestorOffices=ko.pureComputed(()=>F()?.RequestingOffices());AvailableServiceTypes=ko.pureComputed(()=>me().filter(e=>e.userCanInitiate(F())))},bs=class extends Ht{constructor(e){super(e)}static name="request-header-view";static template=Vo},ys=class extends Ht{constructor(e){super(e)}static name="request-header-edit";static template=Lo};var Mo=R`
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
`;var vs=class extends V{constructor({request:e}){super(),this.request=e,this.Pipeline=e.Pipeline,this.allPipelineDetails=this.request.Pipeline.Stages().filter(t=>t.ActionType!=xe.Closed).map(t=>new ws({request:e,stage:t})),this.Pipeline.Stage.subscribe(this.SelectedStage),this.SelectedStage(this.Pipeline.Stage())}ShowActionsArea=ko.pureComputed(()=>this.SelectedStageDetail());listItemShowBorderlessBottom=e=>this.Pipeline.Stage()?.Step==e.Step&&this.ShowActionsArea();listItemTypeClass=e=>{if(this.SelectedStage()?.ID==e.ID&&e.ActionType!=xe.Closed)return"bg-primary text-white pointer active";if(e.Step<this.Pipeline.Stage()?.Step)return"bg-secondary text-white pointer";if(this.Pipeline.Stage()?.ID==e.ID)switch(this.request.State.Status()){case I.open:return"bg-primary-subtle pointer";case I.cancelled:case I.rejected:return"bg-danger text-white pointer";case I.fulfilled:return"bg-success text-white pointer";default:break}};listItemSubText=e=>{let t=ko.unwrap(e?.ActionType);if(!t)return"";if(xe.Closed==t)return t;let o=(e.Step??0)+1,a=this.Pipeline.Stages()?.find(p=>p.Step==o),r=this.request.Actions.list.All().find(p=>a.ActionType==xe.Closed?p.ActionType==B.Closed:p.PipelineStage?.Step==a.Step&&p.ActionType==B.Advanced);return r?"Completed: "+r.Created?.toLocaleDateString():t};setSelected=e=>{!this.Pipeline.Stage()||e.Step>this.Pipeline.Stage()?.Step||this.SelectedStage(e)};SelectedStage=ko.observable();SelectedStageDetail=ko.pureComputed(()=>this.allPipelineDetails.find(e=>e.stage.ID==this.SelectedStage()?.ID));StageDetail;static name="pipeline-component";static template=Mo},ws=class{constructor({request:e,stage:t}){this.request=e,this.stage=t}IsCurrentStage=ko.pureComputed(()=>this.request.Pipeline.Stage()?.ID==this.stage.ID);AllStageAssignments=ko.pureComputed(()=>this.request.Assignments.list.All().filter(e=>e.PipelineStage.ID==this.stage.ID));CurrentUserActionableAssignments=ko.pureComputed(()=>this.AllStageAssignments().filter(e=>e.isUserActionable()));view=e=>this.request.Assignments.view(e);remove=e=>this.request.Assignments.remove(e);addNew=e=>this.request.Assignments.addNew(e);userCanAssign=ko.pureComputed(()=>{let e=F();return this.IsCurrentStage()&&e.isInRequestOrg(this.stage.RequestOrg)})};var Bo=R`
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
`;var Ss=class extends V{constructor({ShowActionOfficeFeatures:e,ToggleActionOfficeFeatures:t}){super(),this.ShowActionOfficeFeatures=e,this.ToggleActionOfficeFeatures=t}ShowActionOfficeToggle=ko.pureComputed(()=>F()?.IsActionOffice()&&!1);MyOpenAssignments=ke.MyActiveAssignments;LateRequests=ko.pureComputed(()=>le.get(I.open)?.List()?.filter(e=>e.Dates.EstClosed.Value()<=new Date)??[]);toggleInfoContainer=(e,t)=>{t.target.closest(".status-info").classList.toggle("active")};static name="quick-info";static template=Bo};var _o=R`
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
`;var As=class extends V{constructor({addAssignment:e,stage:t=null}){super(),this.stage=t,this.addAssignment=e,this.uniqueInt=Math.floor(Math.random()*100),this.stage&&this.Role(xt[this.stage.ActionType])}getAsigneeElementID=()=>`people-new-assignee-${this.uniqueInt}`;Assignee=ko.observable();Role=ko.observable();Roles=Object.values(Se);submit=async()=>{let e={Role:this.Role(),Assignee:this.Assignee(),PipelineStage:this.stage,RequestOrg:this.stage?.RequestOrg};try{await this.addAssignment(e)}catch(t){console.error("Unable to save assignment",t),alert("Something went wrong saving the assignment");return}this.Assignee(null),this.Role(null)};static name="new-assignment";static template=_o};var Uo=R`
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
`;var Cs=class extends V{constructor(e){Object.assign(this,e)}FormatMessage=ko.pureComputed(()=>`${this.msg}... ${this.Status()}`);static name="task-toast";static template=Uo};var Go=R`
  <button
    title="Create Email from Request"
    type="button"
    class="btn btn-link action"
    data-bind="click: showDialog"
  >
    <i class="fa-solid fa-envelope"></i>
  </button>
  <dialog id="dialog-email-request" class="card">
    <div class="card-body">
      <div class="card-title d-flex justify-content-between align-items-center">
        <div>
          <h3>Send Request as Email</h3>
        </div>
        <div class="d-flex justify-content-end">
          <i
            class="fa-solid fa-xmark pointer"
            data-bind="click: closeDialog"
          ></i>
        </div>
      </div>
      <div data-bind="with: Notification">
        <div>
          <div
            data-bind="component: {name: ToString.components.edit, params: ToString}"
          ></div>
          <div
            data-bind="component: {name: CCString.components.edit, params: CCString}"
          ></div>
        </div>
        <div
          data-bind="component: {name: Title.components.edit, params: Title}"
        ></div>
        <div
          data-bind="component: {name: SendAs.components.edit, params: SendAs}"
        ></div>
        <div
          data-bind="component: {name: Body.components.edit, params: Body}"
        ></div>
      </div>
      <div>
        <button
          type="button"
          class="btn btn-link"
          title="Add a hyperlink to the request"
          data-bind="click: insertRequestLink"
          title="Insert a hyperlink to this request"
        >
          <i class="fa-solid fa-link"></i>
          Insert Direct Link to Request
        </button>
        <button
          type="button"
          class="btn btn-link"
          title="Add request attachments to this notification"
          data-bind="click: includeAttachments, enable: ShowIncludeAttachments"
          title="Include attachments from request"
        >
          <i class="fa-solid fa-file-circle-plus"></i>
          Include Request Attachments
        </button>
      </div>
      <div data-bind="if: Attachments().length" class="attachments-section">
        <table class="table">
          <thead>
            <tr>
              <th>Title</th>
              <th>File Name</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody data-bind="foreach: Attachments">
            <tr>
              <td>
                <div data-bind="text: Title"></div>
              </td>
              <td>
                <a
                  target="_blank"
                  data-bind="attr: { href: FileRef }, text: FileLeafRef"
                ></a>
              </td>
              <td>
                <button
                  type="button"
                  class="btn btn-link"
                  title="Don't include this attachment on the notification"
                >
                  <i
                    class="fa-solid fa-circle-xmark"
                    data-bind="click:  $parent.removeAttachment"
                  ></i>
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="d-flex justify-content-end gap-3">
        <button
          type="button"
          class="btn btn-danger"
          data-bind="click: closeDialog"
          title="Close cancel"
        >
          <i class="fa-solid fa-circle-xmark"></i>
          Cancel
        </button>
        <button
          type="button"
          class="btn btn-success"
          data-bind="click: sendEmail"
          title="Send email"
        >
          <i class="fa-solid fa-paper-plane"></i>
          Send
        </button>
      </div>
    </div>
  </dialog>
`;var $o="dialog-email-request",Rs=class extends V{constructor(e){super(e),this.request=e.request}request;Notification=ko.observable();Attachments=ko.observableArray();insertRequestLink=()=>{let e=this.request.getAppLinkElement(),t=this.Notification().Body.Value();this.Notification().Body.Value(e+"<br>"+t)};ShowIncludeAttachments=ko.pureComputed(()=>this.request.Attachments.list.Active().length);includeAttachments=()=>{let e=this.request.Attachments.list.Active().map(t=>t);this.Attachments(e)};removeAttachment=e=>{this.Attachments.remove(e)};sendEmail=async()=>{let e=ko.unwrap(this.Notification);if(this.closeDialog(),!e)return;let t=ko.unwrap(this.Attachments),s=await et(e,this.request.getRelativeFolderPath(),t)};init(){let e=io({request:this.request});this.Notification(e)}showDialog(){this.init(),document.getElementById($o)?.showModal()}closeDialog(){document.getElementById($o)?.close()}static name="send-request-as-email";static template=Go};var Ub=String.raw;function jo(){for(let i in Qt){let e=Qt[i];e.prototype instanceof V&&J(e)}}function J(i){ko.components.register(i.name,{template:i.template,viewModel:i})}var Wt=class{templateId="tmpl-request-detail";ServiceTypeStore=me;SelectedServiceType=ko.observable();ActiveServiceTypes=ko.pureComputed(()=>me().filter(e=>e.userCanInitiate(F())));formatAttachmentDescription=()=>{let e=this.SelectedServiceType()?.AttachmentDescription;return e&&e.trim()?e:"<i>Not applicable.</i>"};getDescriptionModal=()=>document.getElementById("dialog-new-request-detail");selectServiceTypeHandler=(e,t)=>{this.SelectedServiceType(e),setTimeout(()=>{t.target.scrollIntoView({behavior:"smooth",block:"center"})},460)};cancelCreateServiceType=()=>{this.SelectedServiceType(null)};confirmCreateServiceType=async()=>{let e=this.SelectedServiceType();this.SelectedServiceType(null),await e.initializeEntity();let t=oe.CreateByServiceType({ServiceType:e});window.WorkOrder.App.NewRequest({request:t})};constructor(){console.log("new")}};var Ho="By Service Type",it={};it[I.open]="open-office-requests-table";it[I.fulfilled]="closed-requests-table";it[I.cancelled]="closed-requests-table";it[I.rejected]="closed-requests-table";it[Ho]="requests-by-service-type";var zt=class{constructor(){this.RequestsByStatusMap=le,this.ShowAssignments.subscribe(this.showAssignmentsWatcher),this.ActiveKey(I.open)}async init(){await this.RequestsByStatusMap.get(I.open).init(),await ke.init(),this.HasLoaded(!0)}byServiceTypeKey=Ho;HasLoaded=ko.observable(!1);ShowAssignments=ko.observable(!1);ActiveKey=ko.observable();ActiveTableComponentName=ko.pureComputed(()=>it[this.ActiveKey()]);ActiveTableParams=ko.pureComputed(()=>{if(this.RequestsByStatusMap.has(this.ActiveKey())){let e=this.RequestsByStatusMap.get(this.ActiveKey()),t=ko.pureComputed(()=>e.List().filter(s=>s.RequestOrgs().find(F().isInRequestOrg)));return{activeRequestSet:e,filteredRequests:t,key:"office"}}return{key:"office"}});showAssignmentsWatcher=e=>{console.log("assignments toggled")};StatusOptions=ko.pureComputed(()=>[...this.RequestsByStatusMap.keys()])};var nn="By Service Type",st={};st[I.open]="open-requests-table";st[I.fulfilled]="closed-requests-table";st[I.cancelled]="closed-requests-table";st[I.rejected]="closed-requests-table";st[nn]="requests-by-service-type";var Jt=class{constructor(){this.RequestsByStatusMap=le,this.ActiveKey(I.open)}async init(){await this.RequestsByStatusMap.get(I.open).init(),this.HasLoaded(!0)}HasLoaded=ko.observable(!1);ActiveKey=ko.observable();ActiveTableComponentName=ko.pureComputed(()=>st[this.ActiveKey()]);ActiveTableParams=ko.pureComputed(()=>{if(this.RequestsByStatusMap.has(this.ActiveKey())){let e=this.RequestsByStatusMap.get(this.ActiveKey());return{activeRequestSet:e,filteredRequests:e.List,key:"my"}}return{key:"my"}});StatusOptions=ko.pureComputed(()=>[...this.RequestsByStatusMap.keys()])};ko.subscribable.fn.subscribeChanged=function(i){var e;this.subscribe(function(t){e=t},this,"beforeChange"),this.subscribe(function(t){i(t,e)})};ko.observableArray.fn.subscribeAdded=function(i){this.subscribe(function(e){let t=e.filter(s=>s.status=="added").map(s=>s.value);i(t)},this,"arrayChange")};ko.bindingHandlers.dateField={init:function(i,e,t){},update:function(i,e,t,s,o){}};ko.bindingHandlers.files={init:function(i,e){function t(o){var a=e();if(!o.length){a.removeAll();return}let r=ko.unwrap(a),p=[];for(let b of o)r.find(x=>x.name==b.name)||p.push(b);ko.utils.arrayPushAll(a,p)}ko.utils.registerEventHandler(i,"change",function(){t(i.files)});let s=i.closest("label");s&&(ko.utils.registerEventHandler(s,"dragover",function(o){o.preventDefault(),o.stopPropagation()}),ko.utils.registerEventHandler(s,"dragenter",function(o){o.preventDefault(),o.stopPropagation(),s.classList.add("dragging")}),ko.utils.registerEventHandler(s,"dragleave",function(o){o.preventDefault(),o.stopPropagation(),s.classList.remove("dragging")}),ko.utils.registerEventHandler(s,"drop",function(o){o.preventDefault(),o.stopPropagation();let r=o.originalEvent.dataTransfer.files;t(r)}))},update:function(i,e,t,s,o){if(!e()().length&&i.files.length){i.value=null;return}}};ko.bindingHandlers.toggles={init:function(i,e){var t=e();ko.utils.registerEventHandler(i,"click",function(){t(!t())})}};ko.bindingHandlers.people={init:function(i,e,t){let s=t.get("pickerOptions")??{};ko.isObservable(s)&&s.subscribe(o),o(ko.unwrap(s));function o(a){var r={};r.PrincipalAccountType="User",r.SearchPrincipalSource=15,r.ShowUserPresence=!0,r.ResolvePrincipalSource=15,r.AllowEmailAddresses=!0,r.AllowMultipleValues=!1,r.MaximumEntitySuggestions=50,Object.assign(r,a),r.OnUserResolvedClientScript=async function(p,b){let x=r.AllowMultipleValues;var N=SPClientPeoplePicker.SPClientPeoplePickerDict[p],U=e(),K=N.GetControlValueAsJSObject();if(!K.length){x?U.removeAll():U(null);return}if(!x){let G=K[0];if(G.IsResolved){if(G.Key==U()?.LoginName)return;var ve=await $e(G.Key),te=new W(ve);U(te)}return}let de=U().map(G=>G.LoginName),he=await Promise.all(K.filter(G=>G.IsResolved).map(async G=>{let ce=U().find(Kt=>Kt.LoginName==G.Key);if(ce)return ce;var ot=await $e(G.Key);return new W(ot)}));U(he)},SPClientPeoplePicker_InitStandaloneControlWrapper(i.id,null,r);for(let p of i.querySelectorAll("input"))p.setAttribute("autocomplete","off"),p.setAttribute("aria-autocomplete","none")}},update:function(i,e,t,s,o){let a=ko.unwrap(t.get("pickerOptions")??{});var r=SPClientPeoplePicker.SPClientPeoplePickerDict[i.id+"_TopSpan"],p=ko.unwrap(e());if(!a.AllowMultipleValues){if(!p){r?.DeleteProcessedUser();return}p&&!r.GetAllUserInfo().find(b=>b.DisplayText==p.LookupValue)&&r.AddUserKeys(p.LoginName??p.LookupValue??p.Title);return}if(!p.length){r?.DeleteProcessedUser();return}p.map(b=>{r.GetAllUserInfo().find(x=>x.DisplayText==b.LookupValue)||r.AddUserKeys(b.LoginName??b.LookupValue??b.Title)}),r.GetAllUserInfo().map(b=>{p.find(x=>x.LookupValue==b.DisplayText)})}};var rn={loadTemplate:function(i,e,t){e.fromPath?fetch(lt+e.fromPath).then(s=>{if(!s.ok)throw new Error(`Error Fetching HTML Template - ${s.statusText}`);return s.text()}).catch(s=>{e.fallback&&(console.warn("Primary template not found, attempting fallback",e),fetch(lt+e.fallback).then(o=>{if(!o.ok)throw new Error(`Error Fetching fallback HTML Template - ${o.statusText}`);return o.text()}).then(o=>ko.components.defaultLoader.loadTemplate(i,o,t)))}).then(s=>s?ko.components.defaultLoader.loadTemplate(i,s,t):null):t(null)}};ko.components.loaders.unshift(rn);var ln={loadViewModel:function(i,e,t){if(e.viaLoader){let s=import(lt+e.viaLoader).then(o=>{let a=o.default;ko.components.defaultLoader.loadViewModel(i,a,t)})}else t(null)}};ko.components.loaders.unshift(ln);var Ct=class{constructor(){this.init(),this.IsLoading=ke.IsLoading}HasLoaded=ko.observable(!1);init=async()=>{await ke.init(),this.HasLoaded(!0)}};window.WorkOrder=window.WorkOrder||{};async function Qo(){ko.options.deferUpdates=!0,await Ns(),jo(),xo(),window.WorkOrder.App=await Ts.Create(),ko.applyBindings(window.WorkOrder.App)}var Ts=class i{constructor(){this.Tab.subscribe(dn),window.addEventListener("popstate",this.popStateHandler)}RunningTasks=rt;BlockingTasks=Zs;ToggleActionOfficeFeatures=ko.observable(!0);ShowActionOfficeFeatures=ko.pureComputed(()=>this.CurrentUser()?.IsActionOffice()&&this.ToggleActionOfficeFeatures());HasLoaded=ko.observable(!1);CurrentUser=F;context=_();Tab=ko.observable();TabClicked=(e,t)=>this.Tab(t.target.getAttribute("id"));popStateHandler=e=>{e.state&&e.state.tab&&this.Tab(e.state.tab)};MyActiveAssignments=ke.MyActiveAssignments;Config={pipelineStageStore:Ke,requestOrgStore:ge,serviceTypeStore:me,holidayStore:It};OfficeRequestsView=new zt;MyRequestsView=new Jt;MyAssignmentsView=new Ct;NewRequestView=new Wt;RequestDetailView=new Lt;Authorization={currentUserIsAdmin:ko.pureComputed(()=>F()?.hasSystemRole(ze.Admin))};Init=async function(){{var e=this.context.ConfigPipelines.ToList().then(this.Config.pipelineStageStore),t=this.context.ConfigRequestOrgs.ToList().then(b=>this.Config.requestOrgStore(b.sort(at))),s=this.context.ConfigServiceTypes.ToList().then(async b=>{await Promise.all(b.map(async x=>x.initializeEntity())),this.Config.serviceTypeStore(b.sort(at))});let r=this.context.ConfigHolidays.ToList().then(this.Config.holidayStore),p=await Promise.all([t,e,s,r])}this.CurrentUser(await Tt.Create());var o=Nt("tab")||Ee.MyRequests,a=Nt("reqId");a&&o==Ee.RequestDetail?this.viewRequestByTitle(a):o==Ee.RequestDetail&&(o=Ee.NewRequest),this.Tab(o),vt(await this.context.RequestIngests.ToList()),this.HasLoaded(!0)};SelectNewRequest=(e,t)=>{this.Tab(Ee.NewRequest)};NewRequest=({request:e=null,serviceType:t=null})=>{let s={request:e??new oe({}),displayMode:be.New};Ze("reqId",""),this.RequestDetailView.createNewRequest(s),this.Tab(Ee.RequestDetail)};viewRequestByTitle=async e=>{let t=await this.context.Requests.FindByColumnValue([{column:"Title",value:e}],{},{},oe.Views.All,!1);if(!t.results.length){console.warn("Request not found: ",e);return}this.ViewRequest(t.results[0])};ViewRequest=async e=>{Ze("reqId",e.Title),this.RequestDetailView.viewRequest({request:e}),this.Tab(Ee.RequestDetail)};static Create=async function(){let e=new i;return await e.Init(),e}},dn=i=>{if(i){var e=document.getElementById(i),t=new bootstrap.Tab(e);Ze("tab",i),t.show()}};document.readyState==="ready"||document.readyState==="complete"?Qo():document.onreadystatechange=()=>{(document.readyState==="complete"||document.readyState==="ready")&&ExecuteOrDelayUntilScriptLoaded(function(){SP.SOD.executeFunc("sp.js","SP.ClientContext",Qo)},"sp.js")};document.getElementById("app").innerHTML=Fs;})();
