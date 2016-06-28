module.exports = function calculateMinutesLate(scheduled, expected) {
  var scheduledTime = scheduled.split(":");
  var expectedTime = expected.split(":");
  var difference = (expectedTime[1] - scheduledTime[1]) + 60 * (expectedTime[0] - scheduledTime[0]);
  return difference;
}
