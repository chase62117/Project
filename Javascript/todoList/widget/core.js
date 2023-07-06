controlZip = {}; // 만들어진 컨트롤들의 집합

export function getControl(id){
    return controlZip[id];
}
  
export function delControl(id) {
    delete controlZip[id];
  }
  
export function addControl(id, control) {
    controlZip[id] = control;
  }