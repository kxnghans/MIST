<template>
  <div  :class="returnImage" id="contact">
    <div class="has-text-centered">
      <div class="pageSize">
        <!--Display notification feedback-->
        <NotiMsg> </NotiMsg>
        <!--Name field-->
        <br>
        <div class="field">
          <label class="label" :class="$store.getters.updateTheme[0]">Full Name</label>
          <div class="control has-icons-left">
            <input class="is-info input" id="fullName" type="text" :class="[highlight.fullName, $store.getters.updateTheme[0], $store.getters.updateMode[0]]" placeholder="Full Name" v-model="formField.fullName">
            <span class="icon is-left" :class="$store.getters.updateTheme[0]">
              <font-awesome-icon icon="user"/>
            </span>
          </div>
          <p v-if="!fullNameIsValid" class="error"> {{this.$store.getters.notifications[0]}} </p>
        </div>
        <!--Email field-->
        <div class="field">
          <label class="label" :class="$store.getters.updateTheme[0]">Email</label>
          <div class="control has-icons-left ">
            <input class="is-info input" id="email" type="email" :class="[highlight.email, $store.getters.updateTheme[0], $store.getters.updateMode[0]]" placeholder="mine@example.com" v-model="formField.email">
            <span class="icon is-left" :class="$store.getters.updateTheme[0]">
              <font-awesome-icon icon="envelope-open-text"/>
            </span>
          </div>
          <p v-if="!emailIsValid" class="error"> {{this.$store.getters.notifications[1]}} </p>
        </div>
        <!--Category field-->
        <div  class="field">
          <label class="label" :class="$store.getters.updateTheme[0]">Category</label>
          <div class="control">
            <div class="select is-info newSize" :class="highlight.category">
              <select id="Category" v-model="formField.category" :class="[ $store.getters.updateMode[0], { 'has-text-info': !categoryIsValid }]">
                <option class="has-text-info">{{defaultSelect}}</option>
                <option v-for="category in options" :key="category.item" :class="$store.getters.updateTheme[0]" >
                  {{category.item}}
                </option>
              </select>
            </div>
          </div>
          <p v-if="!categoryIsValid" class="error p-2"> {{this.$store.getters.notifications[2]}} </p>
        </div>
        <!--Subject field-->
        <div class="field">
          <label class="label" :class="$store.getters.updateTheme[0]">Subject</label>
          <div class="control has-icons-left ">
            <input class="is-info input" id="Subject" type="text" :class="[highlight.subject, $store.getters.updateTheme[0], $store.getters.updateMode[0]]" placeholder="Subject" v-model="formField.subject">
            <span class="icon is-left" :class="$store.getters.updateTheme[0]">
              <font-awesome-icon icon="envelope"/>
            </span>
          </div>
          <p v-if="!subjectIsValid" class="error"> {{this.$store.getters.notifications[3]}} </p>
        </div>
        <!--Message field-->
        <div  class="field">
          <label class="label" :class="$store.getters.updateTheme[0]">Message</label>
          <div class="control has-icons-left ">
            <textarea class="textarea is-info" id="message" type="text" :class="[highlight.message, $store.getters.updateTheme[0], $store.getters.updateMode[0]]" placeholder="Please enter a detailed message of at least 10 characters" v-model="formField.message"></textarea>
          </div>
          <p class="font-reduce" :class="$store.getters.updateTheme[0]">{{ WordCount(formField.message) }}</p>
          <p v-if="!messageIsValid" class="error"> {{this.$store.getters.notifications[4]}} </p>
        </div>
        <!--Slide/Verify Button-->
        <div class="drag-center float" v-if="returnForm">
          <drag-verify
            :width="this.drag.width"
            :height="this.drag.height"
            :text="this.drag.text"
            :circle="this.drag.circle"
            :success-text="this.drag.successText"
            :text-size="this.drag.textSize"
            :progress-bar-bg="this.drag.progressBarBg"
            :completed-bg="this.drag.completedBg"
            :background="returnVBackground"
            :handler-bg="returnVhandlerBg"
            :handler-icon="this.drag.handlerIcon"
            :success-icon="this.drag.successIcon"
            @passcallback="updateButton"
          >
          </drag-verify>
        </div>
        <!--Send Button-->
        <div class="field p-5 ">
          <button
            class="button is-info, has-background-info"
            :disabled="!this.checkButton"
            :class="$store.getters.updateTheme[1]"
            type="submit" @click="authenticate"
            >
              <strong>Send Message</strong>
          </button>
        </div>
      </div>
      <!--Footer-->
      <div class="footerSize">
        <br>
        <div class="footerSize" :class="returnLine"></div>
        <div class="columns font-reduce" :class="$store.getters.updateTheme[0]">
          <div class="column">
            <p class="to-upper">Address</p>
            <a href="https://www.google.com/maps/place/1420+Austin+Bluffs+Pkwy,+Colorado+Springs,+CO+80918/@38.8937025,-104.8024641,17z/data=!4m5!3m4!1s0x87134fa0c74099d9:0xbfe108fb546154f6!8m2!3d38.8937025!4d-104.8002754" :class="$store.getters.updateTheme[0]">
              1420 Austin Bluffs Pkwy
            </a>
            <a href="https://www.google.com/maps/place/1420+Austin+Bluffs+Pkwy,+Colorado+Springs,+CO+80918/@38.8937025,-104.8024641,17z/data=!4m5!3m4!1s0x87134fa0c74099d9:0xbfe108fb546154f6!8m2!3d38.8937025!4d-104.8002754" :class="$store.getters.updateTheme[0]">
              Colorado Springs, CO 80918
            </a>
          </div>
          <div class="column">
            <p class="to-upper">Contact</p>
            <div>
              <a href="tel:+1719-255-3333" :class="$store.getters.updateTheme[0]">
                (719) 255-3333
              </a>
            </div>
            <div>
              <a href="tel:+1719-822-1308" :class="$store.getters.updateTheme[0]">
                (719) 822-1308
              </a>
            </div>
          </div>
          <div class="column">
            <p class="to-upper">Hours</p>
            <p>Mon - Fri</p>
            <p>8am - 5pm</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import NotiMsg from "./NotiMsg.vue"
import dragVerify from "vue-drag-verify"

export default {
  name: 'Contact',
  components: {
    NotiMsg,
    dragVerify
  },
  //create objects for elements
  data() {
    return {
      formField: {
        fullName: "",
        email: "",
        category: "-- Select --",
        subject: "",
        message: ""
      },
      errmsg: {
        fullName: "Full name is required",
        email: "Enter a valid email address",
        category: "Select a valid category",
        subject: "Enter a subject title",
        message: "Need details at least 10 characters in the message"
      },
      validations: {
        fullName: { type: "string", value: true },
        email: { type: "email", value: true },
        category: { type: "string", value: true },
        subject: { type: "string", value: true },
        message: { type: "text", value: true },
      },
      highlight: {
        fullName: "",
        email: "",
        category: "",
        subject: "",
        message: ""
      },
      drag: {
        width: 300,
        height: 50,
        text: "Slide if you are human",
        circle: true,
        successText: "Verified!",
        textSize: "18px",
        progressBarBg: "#3E8ED0",
        completedBg: "#48C78E",
        handlerIcon:'fa fa-angle-double-right',
        successIcon:'fa-user',
      },
      options: [
        { item: "Message" },
        { item: "Bug" }
      ],
      defaultSelect: "-- Select --" ,
      newItem: "",
      emailTest: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
      checkButton: false,
      resetDrag: true
    }
  },
  computed: {
    fullNameIsValid() {
      return !!this.formField.fullName
    },
    emailIsValid() {
      return !!this.formField.email.match(this.emailTest)
    },
    categoryIsValid() {
      return this.formField.category !== "-- Select --"
    },
    subjectIsValid() {
      return !!this.formField.subject
    },
    messageIsValid() {
      return this.formField.message.length > 10
    },
    returnForm() {
      return (!!this.formField.fullName && !!this.formField.email && !!this.formField.category && !!this.formField.subject && !!this.formField.message && this.resetDrag)
    },
    returnImage() {
      return (this.$store.getters.updateTheme[0] !== "is-dark has-text-light") ? "parallax-light" : "parallax-dark"
    },
    returnVBackground() {
      return (this.$store.getters.updateMode[0] !== "has-background-light") ? "#191919" : "#FFF"
    },
    returnVhandlerBg() {
      return (this.$store.getters.updateMode[0] !== "has-background-light") ? "#FFF" : "#DEDEDE"
    },
    returnVtextColor() {
      return (this.$store.getters.updateMode[0] !== "has-background-light") ? "#FFF" : "#000"
    },
    returnLine() {
      return (this.$store.getters.updateTheme[0] !== "is-dark has-text-light") ? "line-black" : "line-white"
    }
  },
  methods: {
    //utilize vue framework
    authenticate() {
      //Reset buttons
      console.log("Reset Verification")
      setTimeout(()=>{
        this.resetDrag = !this.resetDrag
      },1000);
      this.resetDrag = !this.resetDrag
      this.checkButton = false
      //Authenticate all fields
      console.log("Authenticate fields")
      this.$store.state.notifications = []
      //Check if name field is  empty
      for (let fields in this.formField) {
        let label = fields;
        let content = this.formField[fields];
        let instance = this.validations[label].type;
        let valid = this.validations[label].value;
        //check if strings are valid
        if (instance==="string") {
          valid = this.checkString(content, fields)
          console.log(label + " is now " + valid)
        }
        //check if email is valid
        else if (instance === "email") {
          //this.validations[label].value = this.callEmailCheck(content);
          valid = this.checkEmail(content, fields)
          console.log(label + " is now " + valid)
        }
        //check if email is valid
        else if (instance === "text") {
          //this.validations[label].value = this.callEmailCheck(content);
          valid = this.checkMessage(content, fields)
          console.log(label + " is now " + valid)
        }
        //send content
        else {
        console.log("function broke check condition statement")
        }
      }
      this.highlight.fullName = (this.fullNameIsValid !== false) ? "is-success" : "is-danger"
      this.highlight.email = (this.emailIsValid !== false) ? "is-success" : "is-danger"
      this.highlight.category = (this.categoryIsValid !== false) ? "is-success" : "is-danger"
      this.highlight.subject = (this.subjectIsValid !== false) ? "is-success" : "is-danger"
      this.highlight.message = (this.messageIsValid !== false) ? "is-success" : "is-danger"
      console.log("Now sending message ...")
      this.SendMessage()
    },
    //check if string fields are blank
    checkString (info, fields) {
      if ( (info.length>0) && (info!=="-- Select --") ) {
        //send error messages to state machine
        this.newItem = null
        this.$store.dispatch("addItem", this.newItem)
        return true;
      }
      else {
        //send error messages to state machine
        this.newItem = this.errmsg[fields];
        this.$store.dispatch("addItem", this.newItem)
        this.newItem = ""
        return false;
      }
    },
    //check if email field is blank
    checkEmail (info, fields) {
      if ( info.match(this.emailTest) ) {
        //send error messages to state machine
        this.newItem = null
        this.$store.dispatch("addItem", this.newItem)
        return true;
      }
      else {
        //send error messages to state machine
        this.newItem = this.errmsg[fields];
        this.$store.dispatch("addItem", this.newItem)
        this.newItem = ""
        return false;
      }
    },
    //check if message field is less than 10 characters
    checkMessage (info, fields) {
      if (info.length > 10 ) {
        //send error messages to state machine
        this.newItem = null
        this.$store.dispatch("addItem", this.newItem)
        return true;
      }
      else {
        //send error messages to state machine
        this.newItem = this.errmsg[fields];
        this.$store.dispatch("addItem", this.newItem)
        this.newItem = ""
        return false;
      }
    },
    //sent message function
    SendMessage (content) {
      console.log(content)
      return content;
    },
    updateButton() {
      this.checkButton = true
    },
    // Message count
    WordCount(text) {
      let count = 0
      if (typeof text !== "undefined" && text !== null) {
        count = text.length
      }
      else {
        count = 0
      }
      return count + " characters"
    }
  }
}
</script>


<style scoped lang="scss">
.drag-center {
  margin: auto;
  width: 313px;
  border: 2px solid #3E8ED0;
  border-radius: 50px;
  padding: 5px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.4), 0 6px 20px 0 rgba(0, 0, 0, 0.4);
}
.newSize {
  width: 100%;
}
input ,
select ,
textarea {
  border-radius: 15px;
  box-shadow: -2px -2px 4px #797373,  2px 2px 5px #3E8ED0;
  width: 100%;
  height: 40px;
  box-sizing: border-box;
  transition: all 0.2s ease-in-out;
  appearance: none;
  -webkit-appearance: none;
}
#contact {
  display: flex;
  flex-flow: column;
  min-height: 900px;
}
</style>
