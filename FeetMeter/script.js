const input = document.getElementById('input');
const select = document.getElementById('footMeter');
const btn = document.getElementById('button');
const result = document.getElementById('result');
let meter;
let foot;

function meterToFoot(val) {
    meter = val;
    foot = 3.279 * meter;
};

function footToMeter(val) {
    foot = val;
    meter = 0.305 * foot;
};

btn.addEventListener('click', () => {
    if (select.value == 'foot') {
        footToMeter(input.value);
        return result.innerHTML = meter + ' m';
    } else {
        meterToFoot(input.value);
        if (foot == 1) {
            return result.innerHTML = foot + ' foot';
        } else {
            return result.innerHTML = foot + ' feet';
        }
    }
});