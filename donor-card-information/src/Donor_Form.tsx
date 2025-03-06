import './../node_modules/bootstrap/dist/css/bootstrap.min.css'

function Donor_Form() {
    
    return (
      <div className="Donor_Form">
        <form>
            <div class="mb-3">
                <label for="ownerName" class="form-label">ชื่อเจ้าของสัตว์เลี้ยง</label>
                <input type="text" class="form-control" id="ownerNameInput">
                <div id="ownerNameHelp" class="form-text">โปรดระบุชื่อเป็นภาษาไทย</div>
            </div>
            <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">อีเมล์</label>
                <input type="email" class="form-control" id="emailInput">
                <div id="emailHelp" class="form-text">โปรดระบุอีเมล์</div>
            </div>
            <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">LINE Account</label>
                <input type="lineAccount" class="form-control" id="lineAccountInput">
                <div id="lineAccountHelp" class="form-text">โปรดระบุไลน์ของเจ้าของ</div>
            </div>
            <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">อายุของสัตว์เลี่ยง</label>
                <select class="form-select" aria-label="Default select example">
                    <option selected>ระบุอายุของสัตว์เลี้ยง</option>
                    <option value="1">1 ปี</option>
                    <option value="2">2 ปี</option>
                    <option value="3">3 ปี</option>
                    <option value="4">4 ปี</option>
                    <option value="5">5 ปี</option>
                    <option value="6">6 ปี</option>
                    <option value="7">7 ปี</option>
                    <option value="8">8 ปี</option>
                    <option value="9">9 ปี</option>
                    <option value="10">10 ปี</option>
                    <option value="11">11 ปี</option>
                    <option value="12">12 ปี</option>
                    <option value="13">13 ปี</option>
                    <option value="14">14 ปี</option>
                    <option value="15">15 ปี</option>
                    <option value="16">16 ปี</option>
                    <option value="17">17 ปี</option>
                    <option value="18">18 ปี</option>
                    <option value="19">19 ปี</option>
                    <option value="20">20 ปี</option>
                </select>
                <div id="emailHelp" class="form-text">ระบุอายุของสัตว์เลี้ยง</div>
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
        </form>
      </div>
    )
}
  
export default Donor_Form
  