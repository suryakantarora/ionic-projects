import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'splash',
    pathMatch: 'full'
  },
  {
    path: 'tabs',
    loadChildren: () => import('./pages/tabs/tabs.module').then( m => m.TabsPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'start',
    loadChildren: () => import('./pages/start/start.module').then( m => m.StartPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./pages/register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'verify-otp',
    loadChildren: () => import('./modals/verify-otp/verify-otp.module').then( m => m.VerifyOtpPageModule)
  },
  {
    path: 'verify-pin',
    loadChildren: () => import('./modals/verify-pin/verify-pin.module').then( m => m.VerifyPinPageModule)
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./pages/dashboard/dashboard.module').then( m => m.DashboardPageModule)
  },
  {
    path: 'recent',
    loadChildren: () => import('./pages/recent/recent.module').then( m => m.RecentPageModule)
  },
  {
    path: 'statement',
    loadChildren: () => import('./pages/statement/statement.module').then( m => m.StatementPageModule)
  },
  {
    path: 'manage-card',
    loadChildren: () => import('./pages/manage-card/manage-card.module').then( m => m.ManageCardPageModule)
  },
  {
    path: 'services',
    loadChildren: () => import('./pages/services/services.module').then( m => m.ServicesPageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./pages/profile/profile.module').then( m => m.ProfilePageModule)
  },
  {
    path: 'accounts',
    loadChildren: () => import('./pages/accounts/accounts.module').then( m => m.AccountsPageModule)
  },
  {
    path: 'bill-pay',
    loadChildren: () => import('./pages/bill-pay/bill-pay.module').then( m => m.BillPayPageModule)
  },
  {
    path: 'wallet',
    loadChildren: () => import('./pages/wallet/wallet.module').then( m => m.WalletPageModule)
  },
  {
    path: 'topup',
    loadChildren: () => import('./pages/topup/topup.module').then( m => m.TopupPageModule)
  },
  {
    path: 'favourites',
    loadChildren: () => import('./pages/favourites/favourites.module').then( m => m.FavouritesPageModule)
  },
  {
    path: 'offers',
    loadChildren: () => import('./pages/offers/offers.module').then( m => m.OffersPageModule)
  },
  {
    path: 'settings',
    loadChildren: () => import('./pages/settings/settings.module').then( m => m.SettingsPageModule)
  },
  {
    path: 'search',
    loadChildren: () => import('./pages/search/search.module').then( m => m.SearchPageModule)
  },
  {
    path: 'support',
    loadChildren: () => import('./pages/support/support.module').then( m => m.SupportPageModule)
  },
  {
    path: 'splash',
    loadChildren: () => import('./splash-screen/splash-screen.module').then( m => m.SplashScreenPageModule)
  },
  {
    path: 'loader',
    loadChildren: () => import('./shared/loader/loader.module').then( m => m.LoaderPageModule)
  },
  {
    path: 'custom-alert',
    loadChildren: () => import('./shared/custom-alert/custom-alert.module').then( m => m.CustomAlertPageModule)
  },
  {
    path: 'pin-login',
    loadChildren: () => import('./pages/pin-login/pin-login.module').then( m => m.PinLoginPageModule)
  },
  {
    path: 'nfc',
    loadChildren: () => import('./pages/nfc/nfc.module').then( m => m.NfcPageModule)
  },
  {
    path: 'bill-payment',
    loadChildren: () => import('./pages/bill-payment/bill-payment.module').then( m => m.BillPaymentPageModule)
  },
  {
    path: 'add-card',
    loadChildren: () => import('./pages/add-card/add-card.module').then( m => m.AddCardPageModule)
  },
  {
    path: 'chat',
    loadChildren: () => import('./pages/chat/chat.module').then( m => m.ChatPageModule)
  },
  {
    path: 'sendnfc',
    loadChildren: () => import('./pages/sendnfc/sendnfc.module').then( m => m.SendnfcPageModule)
  },
  {
    path: 'receivenfc',
    loadChildren: () => import('./pages/receivenfc/receivenfc.module').then( m => m.ReceivenfcPageModule)
  },
  {
    path: 'wallettransfer',
    loadChildren: () => import('./pages/wallettransfer/wallettransfer.module').then( m => m.WallettransferPageModule)
  },
  {
    path: 'scan',
    loadChildren: () => import('./pages/scan/scan.module').then( m => m.ScanPageModule)
  },
  {
    path: 'walletstatement',
    loadChildren: () => import('./pages/walletstatement/walletstatement.module').then( m => m.WalletstatementPageModule)
  },
  {
    path: 'qr-info',
    loadChildren: () => import('./pages/qr-info/qr-info.module').then( m => m.QrInfoPageModule)
  },
  {
    path: 'referapp',
    loadChildren: () => import('./pages/referapp/referapp.module').then( m => m.ReferappPageModule)
  },
  {
    path: 'rateus',
    loadChildren: () => import('./modals/rateus/rateus.module').then( m => m.RateusPageModule)
  },
  {
    path: 'w2w',
    loadChildren: () => import('./pages/transfers/w2w/w2w.module').then( m => m.W2wPageModule)
  },
  {
    path: 'w2a',
    loadChildren: () => import('./pages/transfers/w2a/w2a.module').then( m => m.W2aPageModule)
  },
  {
    path: 'a2a',
    loadChildren: () => import('./pages/transfers/a2a/a2a.module').then( m => m.A2aPageModule)
  },
  {
    path: 'a2w',
    loadChildren: () => import('./pages/transfers/a2w/a2w.module').then( m => m.A2wPageModule)
  },
  {
    path: 'transfer-option',
    loadChildren: () => import('./pages/transfers/transfer-option/transfer-option.module').then( m => m.TransferOptionPageModule)
  },
  {
    path: 'transfer-result',
    loadChildren: () => import('./pages/transfers/transfer-result/transfer-result.module').then( m => m.TransferResultPageModule)
  },
  {
    path: 'request-money',
    loadChildren: () => import('./pages/transfers/request-money/request-money.module').then( m => m.RequestMoneyPageModule)
  },
  {
    path: 'notifications',
    loadChildren: () => import('./pages/notifications/notifications.module').then( m => m.NotificationsPageModule)
  },
  {
    path: 'upi',
    loadChildren: () => import('./pages/upi/upi.module').then( m => m.UpiPageModule)
  },
  {
    path: 'openfd',
    loadChildren: () => import('./pages/openfd/openfd.module').then( m => m.OpenfdPageModule)
  },
  {
    path: 'manage-beneficiary',
    loadChildren: () => import('./pages/manage-beneficiary/manage-beneficiary.module').then( m => m.ManageBeneficiaryPageModule)
  },
  {
    path: 'merchant-discount',
    loadChildren: () => import('./pages/merchant-discount/merchant-discount.module').then( m => m.MerchantDiscountPageModule)
  },
  {
    path: 'customer-loyality',
    loadChildren: () => import('./pages/customer-loyality/customer-loyality.module').then( m => m.CustomerLoyalityPageModule)
  },
  {
    path: 'verify-upi',
    loadChildren: () => import('./pages/verify-upi/verify-upi.module').then( m => m.VerifyUpiPageModule)
  },
  {
    path: 'modals',
    loadChildren: () => import('./modals/verify-upi-loading/verify-upi-loading.module').then( m => m.VerifyUpiLoadingPageModule)
  },
  {
    path: 'send-request-money',
    loadChildren: () => import('./pages/send-request-money/send-request-money.module').then( m => m.SendRequestMoneyPageModule)
  },
  {
    path: 'send-upi-money',
    loadChildren: () => import('./pages/send-upi-money/send-upi-money.module').then( m => m.SendUpiMoneyPageModule)
  },
  {
    path: 'pending-upi-money',
    loadChildren: () => import('./pages/pending-upi-money/pending-upi-money.module').then( m => m.PendingUpiMoneyPageModule)
  },
  {
    path: 'myqr',
    loadChildren: () => import('./pages/myqr/myqr.module').then( m => m.MyqrPageModule)
  },
  {
    path: 'loyality',
    loadChildren: () => import('./pages/loyality/loyality.module').then( m => m.LoyalityPageModule)
  },
  {
    path: 'statistics',
    loadChildren: () => import('./pages/statistics/statistics.module').then( m => m.StatisticsPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
