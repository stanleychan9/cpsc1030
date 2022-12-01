$alerted = false;

$(document).ready(() => {
    $(`summary`).mouseover(() => {
        if (!$alerted) {
            alert(`Click the triangle to expand the sub-pages under "Public facilities".`);
            $alerted = true;
        }
    });
});