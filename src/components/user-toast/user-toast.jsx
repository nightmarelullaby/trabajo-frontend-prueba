import './user-toast.css'

export default function UserToast({title,coins}){
	return    <div class="user-info-toast">
      <img src="/assets/user_bee.png" class="user-info-toast-bee-icon" width="100%" height="120px"/>
      <div class="user-info-toast-user-info">
      <p class="user_info_toast-title">{title}</p>
      <div class="user_info_toast-coins-wrapper">
        <img class="user_info_toast-coins-hony-icon" src="/assets/hony.png" height="48" width="48" objectFit="contain" />
        <span class="user_info_toast-coins">{coins}</span>
      </div>
      </div>
    </div>
}