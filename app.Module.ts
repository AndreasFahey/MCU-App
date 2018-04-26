@NgModule({
    declarations: [
    MyApp,
    HomePage,
    PhaseOnePage,
    PhaseTwoPage,
    PhaseThreePage
    ],
    imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
    ],
    bootstrap: [IonicApp],
    entryComponents: [
        MyApp,
        HomePage,
        PhaseOnePage,
        PhaseTwoPage,
        PhaseThreePage
    ],
    providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
    ]
    })
    export class AppModule {}