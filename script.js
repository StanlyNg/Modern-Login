// ✅ 切换界面逻辑（登录 / 注册）
const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');

registerBtn.addEventListener('click', () => {
    container.classList.add("active");
});

loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
});

// ✅ Firebase 配置（使用你提供的配置）
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  FacebookAuthProvider,
  GithubAuthProvider
} from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyCzOo7smCvpIYBx3ka6T8A4EQeRLSRi5Rs",
  authDomain: "api-key-507c0.firebaseapp.com",
  projectId: "api-key-507c0",
  appId: "1:253436646430:web:3fad155ba0732ec253ca0f"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// ✅ Google 登录
document.getElementById("google-login").addEventListener("click", () => {
  const provider = new GoogleAuthProvider();
  signInWithPopup(auth, provider)
    .then(result => {
      alert("Google 登录成功: " + result.user.email);
      // 你可以跳转到 dashboard.html
      // window.location.href = "dashboard.html";
    })
    .catch(error => {
      console.error(error);
      alert("Google 登录失败");
    });
});

// ✅ Facebook 登录
document.getElementById("facebook-login").addEventListener("click", () => {
  const provider = new FacebookAuthProvider();
  signInWithPopup(auth, provider)
    .then(result => {
      alert("Facebook 登录成功: " + result.user.email);
    })
    .catch(error => {
      console.error(error);
      alert("Facebook 登录失败");
    });
});

// ✅ GitHub 登录
document.getElementById("github-login").addEventListener("click", () => {
  const provider = new GithubAuthProvider();
  signInWithPopup(auth, provider)
    .then(result => {
      alert("GitHub 登录成功: " + result.user.email);
    })
    .catch(error => {
      console.error(error);
      alert("GitHub 登录失败");
    });
});

// ❌ LinkedIn 登录（Firebase 不支持）
document.getElementById("linkedin-login").addEventListener("click", () => {
  alert("暂不支持 LinkedIn 登录，请使用其他方式");
});
