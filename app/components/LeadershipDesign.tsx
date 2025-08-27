import React from "react";

const LeadershipDesign: React.FC = () => {
  return (
    <div className="relative items-center justify-center hidden w-full md:flex h-96">
      {/* Background circles with colors */}
      <div className="absolute w-16 h-16 bg-orange-500 rounded-full top-8 left-16"></div>
      <div className="absolute w-12 h-12 bg-orange-500 rounded-full top-4 left-48"></div>
      <div className="absolute w-8 h-8 bg-orange-500 rounded-full top-12 left-32"></div>
      <div className="absolute w-20 h-20 bg-orange-500 rounded-full bottom-8 right-16"></div>
      <div className="absolute bg-orange-500 rounded-full w-14 h-14 bottom-16 left-24"></div>
      <div className="absolute w-10 h-10 bg-orange-500 rounded-full top-20 right-32"></div>
      <div
        className="absolute w-6 h-6 rounded-full bg-brown-600 bottom-32 left-48"
        style={{ backgroundColor: "#8B4513" }}
      ></div>

      {/* Leader images in circular frames */}
      {/* CEO - Center large image */}
      <div className="absolute z-10 w-48 h-48 overflow-hidden rounded-full shadow-lg ">
        <img
          src="/abanga_img.jpg"
          alt="CEO Osman Hakim Abdul"
          className="object-cover w-full h-full"
          onError={(e) => {
            e.currentTarget.src =
              "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTI4IiBoZWlnaHQ9IjEyOCIgdmlld0JveD0iMCAwIDEyOCAxMjgiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIxMjgiIGhlaWdodD0iMTI4IiBmaWxsPSIjRjNGNEY2Ii8+CjxwYXRoIGQ9Ik02NCA5NkM3Ni4xNTAzIDk2IDg2IDg2LjE1MDMgODYgNzRDODYgNjEuODQ5NyA3Ni4xNTAzIDUyIDY0IDUyQzUxLjg0OTcgNTIgNDIgNjEuODQ5NyA0MiA3NEM0MiA4Ni4xNTAzIDUxLjg0OTcgOTYgNjQgOTZaIiBmaWxsPSIjOUI5OUIzIi8+CjxwYXRoIGQ9Ik02NCA2NEMzNS44MTIyIDY0IDMyIDY3LjgxMjIgMzIgOTZIMzJDMzIgMTI0IDE2IDEzNiA2NCAxMzZDMTEyIDEzNiA5NiAxMjQgOTYgOTZIMzJDMzIgNjcuODEyMiA5Mi4xODc4IDY0IDY0IDY0WiIgZmlsbD0iIzlCOUI5MyIvPgo8L3N2Zz4K";
          }}
        />
      </div>

      {/* Manager - Top left */}
      <div className="absolute left-0 z-10 w-40 h-40 overflow-hidden rounded-full shadow-lg top-16">
        <img
          src="/martha_img.jpg"
          alt="Manager Amanfo Martha Simaa"
          className="object-cover w-full h-full"
          onError={(e) => {
            e.currentTarget.src =
              "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iOTYiIGhlaWdodD0iOTYiIHZpZXdCb3g9IjAgMCA5NiA5NiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9Ijk2IiBoZWlnaHQ9Ijk2IiBmaWxsPSIjRjNGNEY2Ii8+CjxwYXRoIGQ9Ik00OCA3MkM1Ny45NDExIDcyIDY2IDYzLjk0MTEgNjYgNTRDNjYgNDQuMDU4OSA1Ny45NDExIDM2IDQ4IDM2QzM4LjA1ODkgMzYgMzAgNDQuMDU4OSAzMCA1NEMzMCA2My45NDExIDM4LjA1ODkgNzIgNDggNzJaIiBmaWxsPSIjOUI5OUIzIi8+CjxwYXRoIGQ9Ik00OCA0OEMyNi44NTkyIDQ4IDI0IDUxLjg1OTIgMjQgNzJIMjRDMjQgOTIgMTIgMTAyIDQ4IDEwMkM4NCAxMDIgNzIgOTIgNzIgNzJIMjRDMjQgNTEuODU5MiA2OS4xNDA4IDQ4IDQ4IDQ4WiIgZmlsbD0iIzlCOUI5MyIvPgo8L3N2Zz4K";
          }}
        />
      </div>

      {/* PRO - Top right */}
      <div className="absolute top-0 z-10 w-40 h-40 overflow-hidden rounded-full shadow-lg right-10">
        <img
          src="/giden_img.jpg"
          alt="PRO Amoah Gideon"
          className="object-cover w-full h-full"
          onError={(e) => {
            e.currentTarget.src =
              "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iOTYiIGhlaWdodD0iOTYiIHZpZXdCb3g9IjAgMCA5NiA5NiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9Ijk2IiBoZWlnaHQ9Ijk2IiBmaWxsPSIjRjNGNEY2Ii8+CjxwYXRoIGQ9Ik00OCA3MkM1Ny45NDExIDcyIDY2IDYzLjk0MTEgNjYgNTRDNjYgNDQuMDU4OSA1Ny45NDExIDM2IDQ4IDM2QzM4LjA1ODkgMzYgMzAgNDQuMDU4OSAzMCA1NEMzMCA2My45NDExIDM4LjA1ODkgNzIgNDggNzJaIiBmaWxsPSIjOUI5OUIzIi8+CjxwYXRoIGQ9Ik00OCA0OEMyNi44NTkyIDQ4IDI0IDUxLjg1OTIgMjQgNzJIMjRDMjQgOTIgMTIgMTAyIDQ4IDEwMkM4NCAxMDIgNzIgOTIgNzIgNzJIMjRDMjQgNTEuODU5MiA2OS4xNDA4IDQ4IDQ4IDQ4WiIgZmlsbD0iIzlCOUI5MyIvPgo8L3N2Zz4K";
          }}
        />
      </div>

      {/* Publicity - Bottom left */}
      <div className="absolute bottom-0 z-10 overflow-hidden rounded-full shadow-lg w-36 h-36 left-16">
        <img
          src="/ruth_img.jpg"
          alt="Publicity Ruth"
          className="object-cover w-full h-full"
          onError={(e) => {
            e.currentTarget.src =
              "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAiIGhlaWdodD0iODAiIHZpZXdCb3g9IjAgMCA4MCA4MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjgwIiBoZWlnaHQ9IjgwIiBmaWxsPSIjRjNGNEY2Ii8+CjxwYXRoIGQ9Ik00MCA2MEM0OC4yODQzIDYwIDU1IDUzLjI4NDMgNTUgNDVDNTUgMzYuNzE1NyA0OC4yODQzIDMwIDQwIDMwQzMxLjcxNTcgMzAgMjUgMzYuNzE1NyAyNSA0NUMyNSA1My4yODQzIDMxLjcxNTcgNjAgNDAgNjBaIiBmaWxsPSIjOUI5OUIzIi8+CjxwYXRoIGQ9Ik00MCA0MEMyMi4zODI2IDQwIDIwIDQzLjM4MjYgMjAgNjBIMjBDMjAgNzYuNjY2NyAxMCA4NSA0MCA4NUM3MCA4NSA2MCA3Ni42NjY3IDYwIDYwSDIwQzIwIDQzLjM4MjYgNTcuNjE3NCA0MCA0MCA0MFoiIGZpbGw9IiM5QjlCOTMiLz4KPC9zdmc+Cg==";
          }}
        />
      </div>
    </div>
  );
};

export default LeadershipDesign;
