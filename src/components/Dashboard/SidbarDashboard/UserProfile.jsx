import avatar from "../../../assets/images/3.jpg";



export default function UserProfile({ sidebarOpen }) {
  return (
    <div className="p-3 border-t border-slate-100">
      <div className="flex items-center gap-3 p-2 rounded-xl hover:bg-slate-50 cursor-pointer">
        <img
          src={avatar}
          className="w-10 h-10 rounded-xl flex-shrink-0 object-cover"
          alt="avatar"
        />
        {sidebarOpen && (
          <div>
            <p className="text-sm font-semibold text-slate-700">علی محمدی</p>
            <p className="text-xs text-slate-400">مدیر فروشگاه</p>
          </div>
        )}
      </div>
    </div>
  );
}
