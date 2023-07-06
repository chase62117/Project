// 컨트롤의 생성 및 공통 기능 (예: append) 추가 -- 확장
// 데코레이터 패턴으로 구성

// append, getValue
function widget(_createControl) {
    var createControl = function(id, option) { // 
        var control = _createControl(id, option); // control 생성

        // 공통 기능 추가 append, remove
        control.append = function (child) {
            this.getEl().append(child.getEl());
        }

        control.get = function () {
            return getControl(id);
        }

        control.remove = function () {
            this.getEl().remove();    
            delControl(id);
        }

        // controlZip에 추가
        addControl(id, control);

        return control;
    }

    return createControl;
}