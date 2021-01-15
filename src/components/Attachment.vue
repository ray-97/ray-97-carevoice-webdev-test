<template>
    <div>        
        <div class="images-container">
            <ul>
                <li v-for="(img, k) in images" :key="k" style="list-style-type:none;">
                    <div class="img-container"> 
                        <img :src="img" ref="output" alt="img.png"/>
                        <button :id="k" @click="deleteFile">X</button>
                    </div>
                </li>
            </ul>
        </div>
        
        <div v-if="counter < 4">
            <input type="file"  accept="image/*" name="image" ref="fileform"
            @change="loadFile">
        </div>
        <div v-else>
            <h3>Max number of files reached.</h3>
        </div>
    </div>
</template>

// <li v-for="(img, k) in images" :key="k">
//     <img src="img.png" alt="img.png">
// </li>
// <form action="/action_page.php" onsubmit="return false">
// <label for="file" style="cursor: pointer;">Upload Image</label>
// <input @click="attachmentAPI" type="submit">
// </form>

<script>
export default {
    name: "Attachment",
    data() {
        return {
            counter: 0,
            images: [],
            response: {
                bucket: "tcv-dev-private",
                code: 0,
                key: "axa_claim/52ba76c0-32f8-0139-1a54-1e3056b8d114/Inpatient.jpg",
                token: "mTLL_0hhI0W7AJfusrKSEVvJ-NHpbTQBmYUN063R:GX5yRsAQxMcg4rdjugI9Cq4sq0g=:eyJzY29wZSI6InRjdi1kZXYtcHJpdmF0ZTpheGFfY2xhaW0vNTJiYTc2YzAtMzJmOC0wMTM5L"
            }
        }
    },
    methods: {
        loadFile(e) {
            if (this.counter < 4) {
                const image = e.target.files[0];
                const reader = new FileReader();
                reader.readAsDataURL(image);
                reader.onload = e => {
                    this.images.push(e.target.result);
                };
                this.$refs.fileform.value = "";
                this.counter++;
            }
        },
        deleteFile(e) {
            this.images.splice(e.target.id,1);
            if (this.counter > 0) {
                this.counter--;
            }
        }
    }
}
</script>

<style scoped>
.images-container {
  width: 1000px;
  height: 200px;
  border: 1px solid;
  padding: 10px;
  margin-left: 10%;
  margin-bottom: 30px;
}

ul > li {
    display: inline-block;
    /* You can also add some margins here to make it look prettier */
    zoom:1;
    *display:inline;
    /* this fix is needed for IE7- */
}

.img-container {
  display: inline-block;
  position: relative;
}

.img-container button {
  position: absolute;
  top: 0px;
  right: 0px;
  background-color: #555;
  color: white;
  border: none;
  cursor: pointer;
  border-radius: 5px;
}

.container {
  position: relative;
  width: 50%;
}

/* Make the image responsive */
.img-container img {
  width: 200px;
  height: auto;
  margin: 10px;
}

/* Style the button and place it in the middle of the container/image */
.container .btn {
  /* top: 50%;
  left: 50%; */
  transform: translate(+350%, -400%);
  background-color: #555;
  color: white;
  font-size: 16px;
  padding: 6px 12px;
  border: none;
  cursor: pointer;
  border-radius: 5px;
}

.img-container button:hover {
  background-color: red;
}
</style>