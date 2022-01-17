const fullScreen = {

  _status: false,

  get status() {
    return this._status;
  },

  set status(value) {
    if (typeof value === 'boolean') {
      this._status = value;
      console.log('Fullscreen Status : ' + this._status);
    } else {
      throw new Error('Fullscreen status must be a boolean');
    }
  },

  toggle: async () => {
    if (fullScreen.status) {
      fullScreen.status = false;
      fullScreen.close();
    } else {
      fullScreen.status = true;
      fullScreen.open();
    }
  },

  open: async () => {
    var fullScreenBody = document.body;
    if (fullScreenBody.requestFullscreen) {
      fullScreenBody.requestFullscreen();
    } else if (fullScreenBody.webkitRequestFullscreen) {
      /* Safari */
      fullScreenBody.webkitRequestFullscreen();
    } else if (fullScreenBody.msRequestFullscreen) {
      /* IE11 */
      fullScreenBody.msRequestFullscreen();
    }
  },

  close: async () => {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.webkitExitFullscreen) {
      /* Safari */
      document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) {
      /* IE11 */
      document.msExitFullscreen();
    }
  }
};

const closeWindowFunc = async () => {
  window.close();
};

const toggleRootModal = async () => {
  var rootModal = document.querySelector('.rootModal');
  if (rootModal !== null) {
    rootModal.remove();
  } else {
    document.body.innerHTML += `
          <div class="rootModal">
              <div class="inner">
                  <p class="title">Something Happened</p>
                  <p class="description">Yea you can say so something just showed up...sooo</p>
                  <button>Yea</button>
                  <button>No</button>
              </div>
          </div>
      `;
  }
};

const messageConsoleDemo = async () => { 
  console.log('PRESSED MESSAGE SHORTKEYS @' + Date.now()); 
};

module.exports = {
  closeWindowFunc,
  fullScreen,
  toggleRootModal,
  messageConsoleDemo
};
