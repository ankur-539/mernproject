import mymodel from "../schema/myschema.js"


export const mycontrol = async (req, res) => {
    res.send("welcome to external control")
}

export const procontrol = async (req, res) => {
    res.send("product")
}


export const user = async (req, res) => {
    const all = await mymodel.find();
    res.status(200).json({ data: all });
}

export const userragistor = async (req, res) => {
    const { username, pass, userphone, profileurl, dob, emailid, gender, role } = req.body;
    if (username == "") {
        res.status(200).json({ msg: "username is required", mystatus: 420 })
    }
    const cpyemail = await mymodel.findOne({ emailid: emailid })
    if (cpyemail) {
        res.status(200).json({ msg: "Already exist", mystatus: 430 })
    }
    else {
        const newdata = await mymodel.insertOne({ username, pass, userphone, profileurl, dob, emailid, gender, role });
        res.status(200).json({ msg: "new user added", user: newdata, mystatus: 250 })
    }
}
export const userlogin = async (req, res) => {
    const { emailid, pass } = req.body;
    if (!pass && !emailid) {
        res.status(250).json({ msg: "Email and Pass is required", mystatus: 260 })
    }
    if (!emailid) {
        res.status(250).json({ msg: "Email is required", mystatus: 270 })
    }
    if (!pass) {
        res.status(250).json({ msg: "Password is required", mystatus: 280 })
    }

    try {
        const checkEmail = await mymodel.findOne({ emailid });
        if (!checkEmail) {
            return res.json({ msg: "User not found", mystatus: 430 });
        }
        if (checkEmail.pass !== pass) {
            return res.json({ msg: "Wrong password", mystatus: 450 });
        }
        return res.json({ msg: "Welcome", mystatus: 200 });

    } catch (error) {
        return res.status(500).json({ msg: "Server error", mystatus: 500 });
    };
}


export const userdelete = async (req, res) => {
    const id = req.params.id;
    const deleteuser = await mymodel.findByIdAndDelete({ _id: id })
    res.status(200).json({ msg: "user deleted", mystatus: 512 });
}
export const userprev = async (req, res) => {

    const id = req.params.id;
    const prevdata = await mymodel.findById(id);
    res.status(200).json({ data: prevdata });
}
export const useredit = async (req, res) => {

    const id = req.params.id;
    const edituser = await mymodel.findOne({ _id: id });
    res.status(200).json({ msg: "matched", mystatus: 450, user: edituser });
}

export const userupdate = async (req, res) => {
    const id = req.params.id;
    const updatedUser = await mymodel.findByIdAndUpdate(id, req.body, { new: true });
    res.status(200).json({ msg: "User updated", data: updatedUser });
};