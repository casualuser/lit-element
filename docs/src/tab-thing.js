import { LitElement, html, css } from 'lit-element';

class TabThing extends LitElement {
  static get properties() {
    return { selectedTab: { type: String} };
  }

  constructor() {
    super();
    this.selectedTab='js';
  }

  static get styles() {
    return [
      css`@-webkit-keyframes mdc-ripple-fg-radius-in{from{-webkit-animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);-webkit-transform:translate(var(--mdc-ripple-fg-translate-start, 0)) scale(1);transform:translate(var(--mdc-ripple-fg-translate-start, 0)) scale(1)}to{-webkit-transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1));transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}}@keyframes mdc-ripple-fg-radius-in{from{-webkit-animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);-webkit-transform:translate(var(--mdc-ripple-fg-translate-start, 0)) scale(1);transform:translate(var(--mdc-ripple-fg-translate-start, 0)) scale(1)}to{-webkit-transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1));transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}}@-webkit-keyframes mdc-ripple-fg-opacity-in{from{-webkit-animation-timing-function:linear;animation-timing-function:linear;opacity:0}to{opacity:var(--mdc-ripple-fg-opacity, 0)}}@keyframes mdc-ripple-fg-opacity-in{from{-webkit-animation-timing-function:linear;animation-timing-function:linear;opacity:0}to{opacity:var(--mdc-ripple-fg-opacity, 0)}}@-webkit-keyframes mdc-ripple-fg-opacity-out{from{-webkit-animation-timing-function:linear;animation-timing-function:linear;opacity:var(--mdc-ripple-fg-opacity, 0)}to{opacity:0}}@keyframes mdc-ripple-fg-opacity-out{from{-webkit-animation-timing-function:linear;animation-timing-function:linear;opacity:var(--mdc-ripple-fg-opacity, 0)}to{opacity:0}}.mdc-ripple-surface--test-edge-var-bug{--mdc-ripple-surface-test-edge-var: 1px solid #000;visibility:hidden}.mdc-ripple-surface--test-edge-var-bug::before{border:var(--mdc-ripple-surface-test-edge-var)}.mdc-tab{position:relative;font-family:Roboto,sans-serif;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-size:.875rem;line-height:2.25rem;font-weight:500;letter-spacing:.08929em;text-decoration:none;text-transform:uppercase;display:flex;flex:1 0 auto;justify-content:center;box-sizing:border-box;height:48px;padding:0 24px;border:none;outline:none;background:none;text-align:center;text-decoration:none;text-transform:uppercase;white-space:nowrap;cursor:pointer;-webkit-appearance:none;z-index:1}.mdc-tab .mdc-tab__text-label{color:#000;color:var(--mdc-theme-on-surface, #000)}.mdc-tab .mdc-tab__icon{color:#000;color:var(--mdc-theme-on-surface, #000)}.mdc-tab--min-width{flex:0 1 auto}.mdc-tab__ripple{--mdc-ripple-fg-size: 0;--mdc-ripple-left: 0;--mdc-ripple-top: 0;--mdc-ripple-fg-scale: 1;--mdc-ripple-fg-translate-end: 0;--mdc-ripple-fg-translate-start: 0;-webkit-tap-highlight-color:rgba(0,0,0,0);will-change:transform, opacity;position:absolute;top:0;left:0;width:100%;height:100%;overflow:hidden}.mdc-tab__ripple::before,.mdc-tab__ripple::after{position:absolute;border-radius:50%;opacity:0;pointer-events:none;content:""}.mdc-tab__ripple::before{transition:opacity 15ms linear,background-color 15ms linear;z-index:1}.mdc-tab__ripple.mdc-ripple-upgraded::before{-webkit-transform:scale(var(--mdc-ripple-fg-scale, 1));transform:scale(var(--mdc-ripple-fg-scale, 1))}.mdc-tab__ripple.mdc-ripple-upgraded::after{top:0;left:0;-webkit-transform:scale(0);transform:scale(0);-webkit-transform-origin:center center;transform-origin:center center}.mdc-tab__ripple.mdc-ripple-upgraded--unbounded::after{top:var(--mdc-ripple-top, 0);left:var(--mdc-ripple-left, 0)}.mdc-tab__ripple.mdc-ripple-upgraded--foreground-activation::after{-webkit-animation:225ms mdc-ripple-fg-radius-in forwards,75ms mdc-ripple-fg-opacity-in forwards;animation:225ms mdc-ripple-fg-radius-in forwards,75ms mdc-ripple-fg-opacity-in forwards}.mdc-tab__ripple.mdc-ripple-upgraded--foreground-deactivation::after{-webkit-animation:150ms mdc-ripple-fg-opacity-out;animation:150ms mdc-ripple-fg-opacity-out;-webkit-transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1));transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}.mdc-tab__ripple::before,.mdc-tab__ripple::after{top:calc(50% - 100%);left:calc(50% - 100%);width:200%;height:200%}.mdc-tab__ripple.mdc-ripple-upgraded::after{width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-tab__ripple::before,.mdc-tab__ripple::after{background-color:#6200ee}@supports not (-ms-ime-align: auto){.mdc-tab__ripple::before,.mdc-tab__ripple::after{background-color:var(--mdc-theme-primary, #6200ee)}}.mdc-tab__ripple:hover::before{opacity:.04}.mdc-tab__ripple:not(.mdc-ripple-upgraded):focus::before,.mdc-tab__ripple.mdc-ripple-upgraded--background-focused::before{transition-duration:75ms;opacity:.12}.mdc-tab__ripple:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-tab__ripple:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:.16}.mdc-tab__ripple.mdc-ripple-upgraded{--mdc-ripple-fg-opacity: .16}.mdc-tab__content{position:relative;display:flex;align-items:center;justify-content:center;height:inherit;pointer-events:none}.mdc-tab__text-label,.mdc-tab__icon{transition:150ms color linear, 150ms opacity linear;z-index:2}.mdc-tab__text-label{display:inline-block;opacity:.6;line-height:1}.mdc-tab__icon{width:24px;height:24px;opacity:.54;font-size:24px}.mdc-tab--stacked{height:72px}.mdc-tab--stacked .mdc-tab__content{flex-direction:column;align-items:center;justify-content:space-between}.mdc-tab--stacked .mdc-tab__icon{padding-top:12px}.mdc-tab--stacked .mdc-tab__text-label{padding-bottom:16px}.mdc-tab--active .mdc-tab__text-label{color:#6200ee;color:var(--mdc-theme-primary, #6200ee)}.mdc-tab--active .mdc-tab__icon{color:#6200ee;color:var(--mdc-theme-primary, #6200ee)}.mdc-tab--active .mdc-tab__text-label,.mdc-tab--active .mdc-tab__icon{transition-delay:100ms;opacity:1}.mdc-tab:not(.mdc-tab--stacked) .mdc-tab__icon+.mdc-tab__text-label{padding-left:8px;padding-right:0}[dir="rtl"] .mdc-tab:not(.mdc-tab--stacked) .mdc-tab__icon+.mdc-tab__text-label,.mdc-tab:not(.mdc-tab--stacked) .mdc-tab__icon+.mdc-tab__text-label[dir="rtl"]{padding-left:0;padding-right:8px}
      .mdc-tab-bar{width:100%}

      .mdc-tab-indicator{display:flex;position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none;z-index:1}.mdc-tab-indicator>.mdc-tab-indicator__content--underline{background-color:#6200ee;background-color:var(--mdc-theme-primary, #6200ee)}.mdc-tab-indicator>.mdc-tab-indicator__content--underline{height:2px}.mdc-tab-indicator>.mdc-tab-indicator__content--icon{color:#018786;color:var(--mdc-theme-secondary, #018786)}.mdc-tab-indicator>.mdc-tab-indicator__content--icon{height:34px;font-size:34px}.mdc-tab-indicator__content{-webkit-transform-origin:left;transform-origin:left;opacity:0}.mdc-tab-indicator__content--underline{align-self:flex-end;width:100%}.mdc-tab-indicator__content--icon{align-self:center;margin:0 auto}.mdc-tab-indicator--active>.mdc-tab-indicator__content{opacity:1}.mdc-tab-indicator>.mdc-tab-indicator__content{transition:250ms -webkit-transform cubic-bezier(0.4, 0, 0.2, 1);transition:250ms transform cubic-bezier(0.4, 0, 0.2, 1);transition:250ms transform cubic-bezier(0.4, 0, 0.2, 1), 250ms -webkit-transform cubic-bezier(0.4, 0, 0.2, 1)}.mdc-tab-indicator--no-transition>.mdc-tab-indicator__content{transition:none}.mdc-tab-indicator--fade>.mdc-tab-indicator__content{transition:150ms opacity linear}.mdc-tab-indicator--active.mdc-tab-indicator--fade>.mdc-tab-indicator__content{transition-delay:100ms}
      
      .mdc-tab-scroller{overflow-y:hidden}.mdc-tab-scroller__test{position:absolute;top:-9999px;width:100px;height:100px;overflow-x:scroll}.mdc-tab-scroller__scroll-area{-webkit-overflow-scrolling:touch;display:flex;overflow-x:hidden}.mdc-tab-scroller__scroll-area::-webkit-scrollbar,.mdc-tab-scroller__test::-webkit-scrollbar{display:none}.mdc-tab-scroller__scroll-area--scroll{overflow-x:scroll}.mdc-tab-scroller__scroll-content{position:relative;display:flex;flex:1 0 auto;-webkit-transform:none;transform:none;will-change:transform}.mdc-tab-scroller--align-start .mdc-tab-scroller__scroll-content{justify-content:flex-start}.mdc-tab-scroller--align-end .mdc-tab-scroller__scroll-content{justify-content:flex-end}.mdc-tab-scroller--align-center .mdc-tab-scroller__scroll-content{justify-content:center}.mdc-tab-scroller--animating .mdc-tab-scroller__scroll-area{-webkit-overflow-scrolling:auto}.mdc-tab-scroller--animating .mdc-tab-scroller__scroll-content{transition:250ms -webkit-transform cubic-bezier(0.4, 0, 0.2, 1);transition:250ms transform cubic-bezier(0.4, 0, 0.2, 1);transition:250ms transform cubic-bezier(0.4, 0, 0.2, 1), 250ms -webkit-transform cubic-bezier(0.4, 0, 0.2, 1)} .sample { font-family:Roboto,sans-serif } .sample--inactive { } .sample--active { }`
    ];
  }
  
  selectTab(e) {
    this.selectedTab = e.target.dataset.name;
    let buttons = Array.from(this.shadowRoot.querySelectorAll('.mdc-tab'));
    let spans = Array.from(this.shadowRoot.querySelectorAll('.mdc-tab-indicator')); 
    
    buttons.map(item => { 
      item.className='mdc-tab';
      item.setAttribute('aria-selected', false);
    });
    
    spans.map(item => {
      item.className='mdc-tab-indicator';
    });

    let activeButton = this.shadowRoot.getElementById(this.selectedTab);
    activeButton.className='mdc-tab mdc-tab--active';
    activeButton.setAttribute('aria-selected', true);
    
    let nodes = Array.from(activeButton.childNodes);
    nodes.map(item => { 
      if (item.className) {
        if (item.className == 'mdc-tab-indicator') {
          item.className = 'mdc-tab-indicator mdc-tab-indicator--active';
        }
      }    
    });
  }

  render() {
    return html`
      <div class="mdc-tab-bar" role="tablist">
        <div class="mdc-tab-scroller">
          <div class="mdc-tab-scroller__scroll-area">
            <div class="mdc-tab-scroller__scroll-content">
              <button id="ts" 
                @click="${this.selectTab}" 
                class="${this.selectedTab=='ts' ? 'mdc-tab mdc-tab--active' : 'mdc-tab'}" 
                role="tab" 
                aria-selected="true" 
                tabindex="0">
                <span class="mdc-tab__content">
                  <span class="mdc-tab__text-label">TypeScript</span>
                </span>
                <span 
                  class="${this.selectedTab== 'ts' ? 'mdc-tab-indicator mdc-tab-indicator--active' : 'mdc-tab-indicator'}">
                  <span class="mdc-tab-indicator__content mdc-tab-indicator__content--underline"></span>
                </span>
                <span data-name="ts" class="mdc-tab__ripple"></span>
              </button>
              <button 
              id="js" @click="${this.selectTab}" class="${this.selectedTab == 'js' ? 'mdc-tab mdc-tab--active': 'mdc-tab'}" role="tab" aria-selected="false" tabindex="-1">
                <span class="mdc-tab__content">
                  <span class="mdc-tab__text-label">JavaScript</span>
                </span>
                <span class="${this.selectedTab == 'js' ? 'mdc-tab-indicator mdc-tab-indicator--active' : 'mdc-tab-indicator'}">
                  <span class="mdc-tab-indicator__content mdc-tab-indicator__content--underline"></span>
                </span>
                <span data-name="js" class="mdc-tab__ripple"></span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class="sample sample--active">
        <slot name="ts"></slot>
      </div>  
      <div class="sample sample--inactive">
        <slot name="js"></slot>
      </div>
    `;
  }
}

customElements.define('tab-thing', TabThing);
