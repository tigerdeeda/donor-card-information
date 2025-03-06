import './../node_modules/bootstrap/dist/css/bootstrap.css'
import './../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.css'

function Donor_Form() {
    return (
        <div className="d-flex justify-content-center align-items-center vh-100">
            <form className="p-4 border rounded shadow bg-white">
                <div className="mb-3">
                    <label className="form-label">ชื่อเจ้าของสัตว์เลี้ยง</label>
                    <input type="text" className="form-control" id="ownerNameInput" />
                    <div id="ownerNameHelp" className="form-text">โปรดระบุชื่อเป็นภาษาไทย</div>
                </div>
                <div className="mb-3">
                    <label className="form-label">อีเมล์</label>
                    <input type="email" className="form-control" id="emailInput" />
                    <div id="emailHelp" className="form-text">โปรดระบุอีเมล์</div>
                </div>
                <div className="mb-3">
                    <label className="form-label">LINE Account</label>
                    <input type="lineAccount" className="form-control" id="lineAccountInput" />
                    <div id="lineAccountHelp" className="form-text">โปรดระบุไลน์ของเจ้าของ</div>
                </div>
                <div className="mb-3">
                    <label className="form-label">อายุของสัตว์เลี่ยง</label>
                    <select className="form-select" aria-label="Default select example">
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
                    <div id="emailHelp" className="form-text">ระบุอายุของสัตว์เลี้ยง</div>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}
  
export default Donor_Form