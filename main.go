package main

import (
	"embed"
	_ "github.com/lib/pq"
	_ "github.com/mizuki1412/go-core-kit/init"
	"github.com/mizuki1412/go-core-kit/init/initkit"
	"github.com/mizuki1412/go-core-kit/mod/user/additionfunc"
	"github.com/mizuki1412/go-core-kit/service/logkit"
	"github.com/mizuki1412/go-core-kit/service/restkit"
	"github.com/wailsapp/wails/v2"
	"github.com/wailsapp/wails/v2/pkg/logger"
	"github.com/wailsapp/wails/v2/pkg/options"
	"github.com/wailsapp/wails/v2/pkg/options/mac"
	"github.com/wailsapp/wails/v2/pkg/options/windows"
	"mizuki/project/wails-demo/mod/test"
)

//go:embed ui
var uiAssets embed.FS

//go:embed build/appicon.png
var icon []byte

func main() {
	initkit.LoadConfig()
	additionfunc.SessionGetUserFunc()
	restkit.AddActions(test.Init)
	go func() {
		_ = restkit.Run()
	}()

	// Create an instance of the app structure
	app := NewApp()

	// Create application with options
	err := wails.Run(&options.App{
		Title:             "Wails Demo",
		Width:             900,
		Height:            600,
		MinWidth:          720,
		MinHeight:         680,
		DisableResize:     false,
		Fullscreen:        false,
		Frameless:         false,
		StartHidden:       false,
		HideWindowOnClose: false,
		RGBA:              &options.RGBA{R: 255, G: 255, B: 255, A: 255},
		Assets:            uiAssets,
		LogLevel:          logger.DEBUG,
		OnStartup:         app.startup,
		OnDomReady:        app.domReady,
		OnShutdown:        app.shutdown,
		Bind: []interface{}{
			app,
		},
		// Windows platform specific options
		Windows: &windows.Options{
			WebviewIsTransparent: false,
			WindowIsTranslucent:  false,
			DisableWindowIcon:    false,
		},
		Mac: &mac.Options{
			TitleBar:             mac.TitleBarHiddenInset(),
			WebviewIsTransparent: true,
			WindowIsTranslucent:  true,
			About: &mac.AboutInfo{
				Title:   "Wails Demo",
				Message: "Wails Demo",
				Icon:    icon,
			},
		},
	})

	if err != nil {
		logkit.Fatal(err)
	}
}
