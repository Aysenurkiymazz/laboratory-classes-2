function getInfoLog(req) {
  console.log(`[INFO] ${req.method} ${req.url}`);
}

function getErrorLog(error) {
  console.error(`[ERROR] ${error.message}`);
}

function getProcessLog(info) {
  console.log(`[PROCESS] ${info}`);
}

module.exports = {
  getInfoLog,
  getErrorLog,
  getProcessLog,
};
