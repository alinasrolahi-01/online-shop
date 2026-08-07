import SearchBox from "./SearchBox";
import NotificationsMenu from "./NotificationsMenu";
import SettingsMenu from "./SettingsMenu";

const HeaderDashboard = ({ title = "داشبورد", date = "۱۴ آوریل ۲۰۲۶ | سه‌شنبه" }) => {
  return (
    <header className="bg-white border-b border-slate-200 sticky top-0 z-30 px-6 py-4 flex items-center gap-4">
      <div>
        <h1 className="text-lg font-bold text-slate-800">{title}</h1>
        <p className="text-xs text-slate-400">{date}</p>
      </div>

      <div className="mr-auto flex items-center gap-3">
        <SearchBox />
        <NotificationsMenu />
        <SettingsMenu />
      </div>
    </header>
  );
};

export default HeaderDashboard;
